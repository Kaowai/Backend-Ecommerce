import ShopModel from "../models/shop.model";

interface ISignup {
  name: string;
  email: string;
  password: string;
}

const signUp = async ({ name, email, password }: ISignup) => {
  try {
    const hodelShop = await ShopModel.findOne({ email }).lean();
  } catch (err) {
    return {
      code: "xxx",
      message: (err as any).message,
      status: "error",
    };
  }
};
