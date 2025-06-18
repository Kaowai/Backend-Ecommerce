import { Schema, model } from "mongoose";
import { COLLECTION, DOCUMENT } from "../consts/consts";

export interface IKeyToken extends Document {
  user: Schema.Types.ObjectId;
  publicKey: string;
  refreshToken: [string];
}

var keyTokenSchema = new Schema<IKeyToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: DOCUMENT.SHOP,
    },
    publicKey: {
      type: Schema.Types.String,
      required: true,
    },
    refreshToken: {
      type: [Schema.Types.String],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION.KEY,
  }
);

const KeyTokenModel = model<IKeyToken>(DOCUMENT.KEY, keyTokenSchema);
export default KeyTokenModel;
