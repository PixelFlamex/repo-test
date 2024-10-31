import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register (req,res) {
    const {body} = req;
    const {email,password,username} = body;
    try { 
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const createUser = await userModel.create({ ...body, password: hashedPassword });

        if (!createUser) {
            return res.status(500).json("unable to create a user");
        }
        return res.status(200).json("account created");

    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }

}


export async function login (req,res) {
    const {body} = req;
    const {email,password} = body;
    try {
        const getUserFromDb = await userModel.findOne({email: email})

        if (!getUserFromDb) {
            return res.json("no user found with this email")
        }
        
        const { password: passwordFromDB, _id } = getUserFromDb;

        const passwordMatch = await bcrypt.compare(password, passwordFromDB)

        if (!passwordMatch) {
            return res.json("password does not match");
        }

        const userToken = jwt.sign({ id: _id }, "TokdjFdncyrFd5")
        console.log (userToken)
        const checkToken = jwt.verify(userToken, "TokdjFdncyrFd5")
        console.log (checkToken)
        return res.json({ token: userToken, id: _id, message: "logged "})

    } catch (error) {
        console.log(error)
    }
}

export async function editUser(req,res) {
    try {
        const { body, params } = req;
        const { id: requestID } = params;

        console.log(requestID)
        const userToEdit = await userModel.findOne({ _id: requestID});
        console.log(userToEdit);
        
        

        if (!userToEdit) {
            return res.json("no user to edit");
        }
        
        const edituser = await userModel.findOneAndUpdate({ _id: req.params.id },body)

        if (!edituser) {
            return res.json("error while editing user");
        }

        return res.status(200).json("user edited");
    } catch (error) {
        console.log(error);
    }


}

export async function getUser(req,res) {
    try {
        const { body, params } = req;
        const { id: requestID } = params;

        console.log(requestID)
        const user = await userModel.findOne({ _id: requestID});
        console.log(user);
        return res.status(200).json(user);
 
    } catch (error) {
        console.log(error);
    }


}

