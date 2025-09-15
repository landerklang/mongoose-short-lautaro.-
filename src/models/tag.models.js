import { model, Schema } from "mongoose";

const Tagschema = new Schema({
  name: { types: String, unique: true, require: true },
});

export const TagModels = model("Tags", Tagschema);
