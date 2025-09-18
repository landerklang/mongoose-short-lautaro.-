import { Router } from "express";
import {
  createdArticle,
  getAllArticle,
  getArticleByPk,
  updateArticle,
  deletedArticle,
  updaterelacionfromarticle,
} from "../controller/article.controller.js";

export const ArticleRoutes = Router();

ArticleRoutes.post("/articles", createdArticle);

ArticleRoutes.get("/articles", getAllArticle);

ArticleRoutes.get("/articles/:id", getArticleByPk);

ArticleRoutes.put("/articles/:id", updateArticle);

ArticleRoutes.delete("/articles/:id", deletedArticle);

ArticleRoutes.patch("/articles/:id/tags/:tagsid", updaterelacionfromarticle);
