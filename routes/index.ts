import { Router } from "../deps.ts";
import {
  createUser,
  findUser,
  updateUser,
  getAllUsers,
  deleteById,
} from "../handlers/user.ts";

export const router = new Router()
  .get("/api/users/", getAllUsers)
  .get("/api/users/:userId", findUser)
  .delete("/api/users/:userId", deleteById)
  .patch("/api/users", updateUser)
  .post("/api/users", createUser);
