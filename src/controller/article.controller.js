import { articleModel } from "../models/article.models.js";

export const createdArticle = async (req, res) => {
  const { title, content, author, tags } = req.body;

  try {
    const created = await articleModel.create({ title, content, author, tags });
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

export const getAllArticle = async (req, res) => {
  try {
    const articles = await articleModel.find().populate("author", "tag");
    res.status(200).json({ ok: true, data: articles });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getArticleByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const getarticle = await articleModel.findById(id);

    res.status(200).json({
      ok: true,
      data: getarticle,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const update = await articleModel.findByIdAndUpdate(
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

export const deletedArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await articleModel.findByIdAndDelete(id);
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
