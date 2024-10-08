import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";
import productRoutes from "./Routes/ProductRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import mongoose from "mongoose";

const PORT = 3000;
const app = express();

http.createServer(app);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

mongoose.connect("mongodb://localhost:27017/productsDB").then(() => {
    console.log("connected to DB");
});

 app.use("/product", productRoutes)
 app.use("/user", userRoutes)

app.listen(3000, () => {
    console.log("server opened on port 3000");
});