import express from "express";
import { createorder , deleteorder , editorder , listorders , listorder } from "../Controllers/orderController.js"
import { userAuth } from "../Controllers/Middlewares/UserAuth.js";
const orderRoutes = express.Router();

orderRoutes.post("/create", userAuth, createorder);
orderRoutes.delete("/:id/delete", userAuth, deleteorder);
orderRoutes.put("/:id/edit", userAuth, editorder);
orderRoutes.get("/list", listorders);
orderRoutes.get("/list/:id", listorder);



export default orderRoutes;