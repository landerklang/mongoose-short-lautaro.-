import { Router } from "express";
import { createdUser } from "../controller/user.controller.js";

export const userRoutes = Router();

userRoutes.post("/users", createdUser);
