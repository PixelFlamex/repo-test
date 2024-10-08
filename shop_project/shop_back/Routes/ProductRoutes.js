import express from "express";
import { createProduct , deleteProduct , editProduct , listProducts , listProduct } from "../Controllers/productController.js"
import { userAuth } from "../Controllers/Middlewares/UserAuth.js";
const productRoutes = express.Router();

productRoutes.post("/create", userAuth, createProduct);
productRoutes.delete("/:id/delete", userAuth, deleteProduct);
productRoutes.put("/:id/edit", userAuth, editProduct);
productRoutes.get("/list", listProducts);
productRoutes.get("/list/:id", listProduct);



export default productRoutes;