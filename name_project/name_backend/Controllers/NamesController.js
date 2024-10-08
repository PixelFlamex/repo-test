import nameModel from "./Models/NamesModel.js";



export async function listNames(req,res) {

    try {
        var currentProduct = await nameModel.find().select("name id")
        return res.status(200).json(currentProduct);

    } catch (error) {
        console.log(error);
    }
    
}