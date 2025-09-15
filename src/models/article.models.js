import { model, Schema, Types } from "mongoose";

const articleschema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    content: { type: String, required: true },
    author: { type: Types.ObjectId, ref: "User", required: true },
    tags: [{ type: Types.ObjectId, ref: "tags", required: true }],
  },
  { versionKey: false }
);

export const articleModel = model("article", articleschema);
