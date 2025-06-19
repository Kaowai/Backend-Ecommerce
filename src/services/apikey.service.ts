import apikeyModel from "../models/apikey.model";
import crypto from "crypto";

const findApiKeyById = async (key: string) => {
  const objKey = await apikeyModel.findOne({ key, status: true }).lean();
  return objKey;
};

const createApiKey = async () => {
  const apiKey = await apikeyModel.create({
    key: crypto.randomBytes(64).toString("hex"),
    permissions: ["001"],
  });
  return apiKey;
};

export { findApiKeyById, createApiKey };
