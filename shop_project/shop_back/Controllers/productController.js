import {readFile, writeFile} from "fs/promises"
import productsModel from "../Models/productsModel.js";


export async function createProduct(req,res) {

    try {
        const { body } = req;
        console.log(body)
        const { title, price, category, description, id, brand } = req.body;

        if (!title || !price ) {
            return res.status(400).json("title or price is missing, please provide them. ");
        }
        const newProduct = { title, price, category, description, id, brand };

        productsModel.create(newProduct)

        return res.status(200).json("product saved");
    } catch (error) {
        console.log(error);
    }

}


export async function editProduct(req,res) {
    try {
        const { body, params } = req;
        const { id: requestID } = params;

        console.log(requestID)
        const productToEdit = await productsModel.findOne({ _id: requestID});
        console.log(productToEdit);
        
        

        if (!productToEdit) {
            return res.json("no product to edit");
        }
        
        const editProduct = await productsModel.findOneAndUpdate({ _id: req.params.id },body)

        if (!editProduct) {
            return res.json("error while editing product");
        }

        return res.status(200).json("product edited");
    } catch (error) {
        console.log(error);
    }


}

export async function deleteProduct(req,res) {

    try {
        const { body, params } = req;
        const { id: requestID } = params;

        const productToDelete = await productsModel.findOne({ id: requestID});

        if (!productToDelete) {
            return res.json("no product to delete");
        }
        
        const deleteProduct = await productsModel.findOneAndDelete({ id: req.params.id })

        if (!deleteProduct) {
            return res.json("error while deleting product");
        }

        return res.status(200).json("product deleted");
    } catch (error) {
        console.log(error);
    }
    
}

export async function listProducts(req,res) {

    try {
        var currentList = []
        var item = 0
        var currentProduct = await productsModel.find().select("id title price description category brand id")
        // if (currentProduct.length == 0) {
        //     return ("there is no data for these product")
        // }
        // for (let i = 0; i < currentProduct.length; i++) {
        //     item = {"title":currentProduct[i].title,"id":currentProduct[i].id}
        //     currentList.push(item)
        // }
        // console.log(currentList)
        return res.status(200).json(currentProduct);

    } catch (error) {
        console.log(error);
    }
    
}

export async function listProduct(req,res) {

    try {

        var currentProduct = await productsModel.findOne({_id: req.params.id})
        console.log(currentProduct)
        if (currentProduct.length == 0) {
            return ("there is no data for this product")
        }
        
        return res.status(200).json(currentProduct);

    } catch (error) {
        console.log(error);
    }
    
}