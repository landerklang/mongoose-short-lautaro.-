import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    more_data: {
      firt_name: { type: String, require: true },
      last_name: { type: String, require: true },
      telefone: { type: Number, require: true },
    },
  },
  {
    versionKey: false,
  }
);

export const UserModel = model("User", UserSchema);
