import { model, Schema, Types } from "mongoose";

const articleSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    content: { type: String, required: true },
    author: { type: Types.ObjectId, ref: "User", required: true },
    tags: [{ type: Types.ObjectId, ref: "tags", required: true }],
  },
  {
    versionKey: false,
    // toJSON: true,
    // toObject: true
  }
);

articleSchema.virtual("Anexo", {
  ref: "Anexo",
  localField: "_id",
  foreignField: "article",
});

articleSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, result) => {
    delete result.id;
  },
});
export const articleModel = model("Article", articleSchema);
