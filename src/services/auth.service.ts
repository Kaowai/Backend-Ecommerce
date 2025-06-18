import ShopModel from "../models/shop.model";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { createKeyToken } from "./keyToken.service";
import { createTokenPair } from "../auth/authUtils";
import { ROLE_SHOP } from "../consts/consts";
import { getInfoData } from "../utils";
interface ISignup {
  name: string;
  email: string;
  password: string;
}

const signUpService = async ({ name, email, password }: ISignup) => {
  try {
    const holderShop = await ShopModel.findOne({ email }).lean();

    if (holderShop) {
      return {
        code: "xxxx",
        message: "Shop is already registered",
      };
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const newShop = await ShopModel.create({
      name,
      email,
      password: passwordHash,
      roles: [ROLE_SHOP.SHOP],
    });

    if (!newShop) {
      return {
        code: "CREATE_FAILED",
        message: "Failed to create shop",
      };
    }

    // create privateKey, publicKey
    const privateKey = crypto.randomBytes(64).toString("hex");
    const publicKey = crypto.randomBytes(64).toString("hex");

    console.log({ privateKey, publicKey });

    // create public key for each user register
    const keyStore = await createKeyToken(
      newShop._id.toString(),
      publicKey,
      privateKey
    );

    if (!keyStore) {
      return {
        code: "KEY_ERROR",
        message: "Create publickey error",
      };
    }

    const payload = { userId: newShop._id.toString(), email };

    const token = await createTokenPair(payload, publicKey, privateKey);

    return {
      code: 201,
      metadata: {
        shop: getInfoData({
          fields: ["_id", "name", "email"] as any,
          object: newShop,
        }),
        token,
      },
    };
  } catch (err) {
    console.log(err)
    return {
      code: "xxx",
      message: (err as any).message,
      status: "error",
    };
  }
};

export { signUpService };
