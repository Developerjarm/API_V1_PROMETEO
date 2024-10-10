import express from "express";
import { createNewUser, getUsers, getUserById, updateUserAuthentication, deleteUserAuthentication } from "../services/user.controller";

const route = express.Router();

route.get("/", getUsers);
route.post("/create-user", createNewUser);
route.get("/:id_user", getUserById);
route.put("/:id_user", updateUserAuthentication);
route.delete("/:id_user", deleteUserAuthentication);

export default route;