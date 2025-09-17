import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { ArticleRoutes } from "./article.routes.js";
import { tagRouters } from "./tag.routes.js";
import { AnexoRouter } from "./anexo.routes.js";

export const routes = Router();

routes.use(userRoutes);
routes.use(ArticleRoutes);
routes.use(tagRouters);
routes.use(AnexoRouter);
