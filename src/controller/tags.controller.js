import { TagModels } from "../models/tag.models.js";

export const createdTag = async (req, res) => {
  const { name } = req.body;

  try {
    const created = await TagModels.create({ name });
    res.status(201).json({
      ok: true,
      msg: "se creo correctameten el usuario",
      data: created,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAllTag = async (req, res) => {
  try {
    const tags = await TagModels.find();
    res.status(200).json({ ok: true, data: tags });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getTagById = async (req, res) => {
  const { id } = req.params;

  try {
    const getTag = await TagModels.findById(id);

    res.status(200).json({
      ok: true,
      data: getTag,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateTag = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const update = await TagModels.findByIdAndUpdate(
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

export const deletedTag = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await TagModels.findByIdAndDelete(id);
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
