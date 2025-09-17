import { anexoModels } from "../models/anexo.models.js";

export const createdAnexo = async (req, res) => {
  const { link, descrypcion, article } = req.body;
  try {
    const anexo = await anexoModels.create({
      link,
      descrypcion,
      article,
    });
    res
      .status(201)
      .json({ ok: true, msg: "el anexo se creó correctamente", data: anexo });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAllAnexo = async (req, res) => {
  try {
    const getanexo = await anexoModels
      .find({ deleted: false })
      .populate("article");
    res.status(200).json({ ok: true, data: getanexo });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAnexoById = async (req, res) => {
  const { id } = req.params;

  try {
    const getanexoID = await anexoModels.findById(id);

    res.status(200).json({
      ok: true,
      data: getanexoID,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateAnexo = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const update = await anexoModels.findByIdAndUpdate(
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

export const deletedAnexo = async (req, res) => {
  const { id } = req.params;
  try {
    const delet = await anexoModels.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
      // eliminacion logica
    );
    res.status(200).json({
      ok: true,
      msg: "usuario eliminado correctamente",
      data: delet,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error interno del servidor",
    });
  }
};
