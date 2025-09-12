import { UserModel } from "../models/user.models.js";

export const createdUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await UserModel.create({
      username,
      password,
      email,
    });
    res
      .status(201)
      .json({ ok: true, msg: "usuario creado correctamente", data: user });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
