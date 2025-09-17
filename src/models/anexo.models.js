import { model, Types, Schema } from "mongoose";

const AnexoSchema = new Schema(
  {
    link: { type: String, require: true },
    descrypcion: { type: String, require: true },
    article: { type: Types.ObjectId, ref: "Article" },
  },
  {
    versionKey: false,
  }
);

export const anexoModels = model("Anexo", AnexoSchema);
