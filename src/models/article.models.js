import { model, Schema, Types } from "mongoose";

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Types.ObjectId, ref: "User", required: true },
    tags: [{ type: Types.ObjectId, ref: "Tags", required: true }],
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
// para poder utilizar el populate sin que en la colecion tenga una relacion se debe utilizar la anterior consulta donde le estoy pidiendo que se genero un obejto de tipo virtual que permite realizar una referencia con este
export const articleModel = model("Article", articleSchema);
