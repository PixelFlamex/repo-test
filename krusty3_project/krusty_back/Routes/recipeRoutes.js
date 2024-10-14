import express from "express";
import { createrecipe , deleterecipe , editrecipe , listrecipes , listrecipe } from "../Controllers/recipeController.js"
import { userAuth } from "../Controllers/Middlewares/UserAuth.js";
const recipeRoutes = express.Router();

recipeRoutes.post("/create", userAuth, createrecipe);
recipeRoutes.delete("/:id/delete", userAuth, deleterecipe);
recipeRoutes.put("/:id/edit", userAuth, editrecipe);
recipeRoutes.get("/list", listrecipes);
recipeRoutes.get("/list/:id", listrecipe);



export default recipeRoutes;