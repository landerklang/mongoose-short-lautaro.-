import { Router } from "express";
import {
  createdTag,
  deletedTag,
  getAllTag,
  getTagById,
  updateTag,
} from "../controller/tags.controller.js";

export const tagRouters = Router();

tagRouters.post("/tag", createdTag);

tagRouters.get("/tag", getAllTag);

tagRouters.get("/tag/:id", getTagById);

tagRouters.put("/tag/:id", updateTag);

tagRouters.delete("/tag/:id", deletedTag);
