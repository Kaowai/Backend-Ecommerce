import KeyTokenModel from "../models/keytoken.model";

const createKeyToken = async (
  userId: string,
  publicKey: string,
  privateKey: string
) => {
  try {
    const token = await KeyTokenModel.create({
      user: userId,
      publicKey,
      privateKey,
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
