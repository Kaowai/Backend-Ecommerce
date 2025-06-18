import KeyTokenModel from "../models/keytoken.model";

const createKeyToken = async (userId: string, publicKey: string) => {
  try {
    const publicKeyString = publicKey.toString(); // KeyObject is not string

    const token = await KeyTokenModel.create({
      user: userId,
      publicKey: publicKeyString,
    });

    return token ? token.publicKey : null;
  } catch (err) {
    return {
      code: "xxx",
      message: (err as any).message,
      status: "error",
    };
  }
};

export { createKeyToken };
