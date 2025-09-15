import { UserModel } from "../models/user.models.js";

export const createdUser = async (req, res) => {
  const { username, password, email, more_data } = req.body;
  try {
    const user = await UserModel.create({
      username,
      password,
      email,
      more_data,
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

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getUserByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    res.status(200).json({
      ok: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const update = await UserModel.findByIdAndUpdate(
      id,
      { body },
      { new: true }
    );
    res.status(200).json({ ok: true, data: update });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error interno del servidor",
    });
  }
};

export const deletedUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await UserModel.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "usuario eliminado correctamente",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error interno del servidor",
    });
  }
};
