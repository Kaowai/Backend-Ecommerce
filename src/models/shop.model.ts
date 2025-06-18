import { model, Schema } from "mongoose";
import { COLLECTION, DOCUMENT } from "../consts/consts";

export interface IShop extends Document {
  name: string;
  email: string;
  mobile: string;
  password: string;
  status: String;
  verify: boolean;
  roles: Array<string>;
}

var shopSchema = new Schema<IShop>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
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
    collection: COLLECTION.SHOP,
  }
);

const ShopModel = model<IShop>(DOCUMENT.SHOP, shopSchema);
export default ShopModel;
