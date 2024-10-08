import express from "express"
import {listNames} from "../Controllers/NamesController.js"
const NamesRoutes = express.Router();

NamesRoutes.get("/list", listNames);


export default NamesRoutes;