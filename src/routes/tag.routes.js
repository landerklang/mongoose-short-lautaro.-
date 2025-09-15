import { Router } from "express";
import {
  createdTag,
  getAllTag,
  getTagById,
  updateTag,
} from "../controller/tags.controller";
import { deletedArticle } from "../controller/article.controller";

export const tagRouters = Router();

tagRouters.post("/tag", createdTag);

tagRouters.get("/tag", getAllTag);

tagRouters.get("/tag/:id", getTagById);

tagRouters.put("/tag/:id", updateTag);

tagRouters.delete("/tag/:id", deletedArticle);
