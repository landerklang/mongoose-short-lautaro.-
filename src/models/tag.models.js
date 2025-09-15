import { model, Schema, Types } from "mongoose";

const Tagschema = new Schema({
  name: { type: String, unique: true, required: true },
  creadetFor: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  articles: [
    {
      type: Types.ObjectId,
      ref: "article",
      required: true,
    },
  ],
});

export const TagModels = model("Tags", Tagschema);
