import { model, Types, Schema } from "mongoose";

const AnexoSchema = new Schema(
  {
    link: { type: String, require: true },
    descrypcion: { type: String, require: true },
    article: { type: Types.ObjectId, ref: "Article" },
    deleted: { type: Boolean, default: false },
    // eliminacion logica
  },
  {
    versionKey: false,
  }
);

export const anexoModels = model("Anexo", AnexoSchema);
