import jwt from "jsonwebtoken";
import usersModel from "../../Models/usersModel.js";

export async function userAuth(req, res, next) {
    const { headers } = req;
    const { token } = headers;
    try {
        if (!token) {
            return res.json("you must be logged to perform this action")
        }
        const checkToken = jwt.verify(token, "TokdjFdncyrFd5")
        const { id } = checkToken;

        const checkForUser = await usersModel.findOne({ _id: id });

        if (!checkForUser) {
            return res.json("no user found");
        }

        next();
    } catch (error) {
        console.log (error)
    }
}