import mongoose, { model, Schema } from "mongoose";
import { IShop } from "../interfaces/IUser";

const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

// Declare the Schema of the Mongo model
var shopSchema = new Schema<IShop>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Schema.Types.String,
      enum: ["active", "inactive"],
      default: "active",
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    roles: {
      type: [Schema.Types.String],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const ShopModel = model<IShop>(DOCUMENT_NAME, shopSchema);
export default ShopModel;
