import { Router } from "express";
import {
  createdArticle,
  deletedArticle,
  getAllArticle,
  getArticleByPk,
  updateArticle,
} from "../controller/article.controller.js";

export const articleRoutes = Router();

articleRoutes.use("/article", createdArticle);

articleRoutes.get("/article", getAllArticle);

articleRoutes.get("/article/:id", getArticleByPk);

articleRoutes.put("/article/:id", updateArticle);

articleRoutes.delete("/article/:id", deletedArticle);
