import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { articleRoutes } from "./article.routes.js";
import { tagRouters } from "./tag.routes.js";

export const routes = Router();

routes.use(userRoutes);

routes.use(articleRoutes);

routes.use(tagRouters);
