import { KeyObject } from "crypto";
import JWT from "jsonwebtoken";

const createTokenPair = async (
  payload: object,
  publicKey: KeyObject,
  privateKey: string
) => {
  try {
    const accessToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "2 days",
    });

    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "7 days",
    });

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.log(`error verify:::`, err);
      } else {
        console.log(`decode verify:::`, decode);
      }
    });

    return { accessToken, refreshToken };
  } catch (err) {
    console.log(err);
  }
};

export { createTokenPair };
