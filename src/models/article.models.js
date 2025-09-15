import { model, Schema, Types } from "mongoose";

const articleschema = new Schema(
  {
    title: { type: String, unique: true, require: true },
    content: { type: String, require: true },
    author: { type: Types.ObjectId, ref: "User", require: true, unique: true },
  },
  { versionKey: false }
);

export const articleModel = model("article", articleschema);
