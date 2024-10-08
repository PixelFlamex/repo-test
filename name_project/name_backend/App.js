import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import nameRoutes from "./Routes/NamesRoutes.js";
import mongoose from "mongoose";

const PORT = 3001;
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

mongoose.connect("mongodb://localhost:27017/namesDB").then(() => {
    console.log("connected to DB");
});

 app.use("/name", nameRoutes)
 

app.listen(3001, () => {
    console.log("server opened on port 3001");
});