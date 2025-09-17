import { model, Schema, Types } from "mongoose";

const TagSchema = new Schema({
  name: { type: String, unique: true, required: true },
  creadetFor: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  articles: [
    {
      type: Types.ObjectId,
      ref: "Article",
      required: true,
    },
  ],
});

export const TagModels = model("Tags", TagSchema);
