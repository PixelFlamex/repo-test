import express from "express";
import { register,login,editUser,getUser} from "../Controllers/userController.js"
const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.put("/:id/edit", editUser)
userRoutes.get("/:id/get", getUser)


export default userRoutes;