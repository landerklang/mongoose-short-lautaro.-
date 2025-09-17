import { Router } from "express";

import {
  createdAnexo,
  deletedAnexo,
  getAllAnexo,
  getAnexoById,
  updateAnexo,
} from "../controller/anexo.controller.js";

export const AnexoRouter = Router();

AnexoRouter.post("/anexos", createdAnexo);

AnexoRouter.get("/anexos", getAllAnexo);

AnexoRouter.get("/anexos/:id", getAnexoById);

AnexoRouter.put("/anexos/:id", updateAnexo);

AnexoRouter.delete("/anexos/:id", deletedAnexo);
