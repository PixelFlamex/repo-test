import express from "express";
import { register,login } from "../Controllers/employeeController.js"
const employeeRoutes = express.Router();

employeeRoutes.post("/register", register);
employeeRoutes.post("/login", login);


export default employeeRoutes;