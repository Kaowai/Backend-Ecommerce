import { model, Schema } from "mongoose";
import { COLLECTION, DOCUMENT } from "../consts/consts";

export interface IApiKey extends Document {
  key: string;
  status: boolean;
  permissions: Array<string>;
}

var apiKeySchema = new Schema<IApiKey>(
  {
    key: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      index: true,
    },
    status: {
      type: Schema.Types.Boolean,
      default: true,
    },
    permissions: {
      type: [Schema.Types.String],
      required: true,
      enum: ["000", "001", "002"],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION.API_KEY,
  }
);

//Export the model
export default model<IApiKey>(DOCUMENT.API_KEY, apiKeySchema);
