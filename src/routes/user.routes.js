import { Router } from "express";
import {
  createdUser,
  deletedUser,
  getAllUsers,
  getUserByPk,
  updateUser,
} from "../controller/user.controller.js";

export const userRoutes = Router();

userRoutes.post("/users", createdUser);

userRoutes.get("/users", getAllUsers);

userRoutes.get("/users/:id", getUserByPk);

userRoutes.put("/users/:id", updateUser);

userRoutes.delete("/users/:id", deletedUser);
