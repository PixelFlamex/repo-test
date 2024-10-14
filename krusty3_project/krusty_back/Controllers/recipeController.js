
import recipeModel from "../Models/recipeModel.js";


export async function createrecipe(req,res) {

    try {
        const { body } = req;
        console.log(body)
        const { recipeinstructions } = req.body;

        if (!recipeinstructions ) {
            return res.status(400).json("recipe instructions are missing");
        }
        const newrecipe = { recipeinstructions };

        recipeModel.create(newrecipe)

        return res.status(200).json("recipe added");
    } catch (error) {
        console.log(error);
    }

}


export async function editrecipe(req,res) {
    try {
        const { body, params } = req;
        const { id: requestID } = params;

        console.log(requestID)
        const recipeToEdit = await recipeModel.findOne({ _id: requestID});
        console.log(recipeToEdit);
        
        

        if (!recipeToEdit) {
            return res.json("no recipe to edit");
        }
        
        const editrecipe = await recipeModel.findOneAndUpdate({ _id: req.params.id },body)

        if (!editrecipe) {
            return res.json("error while editing recipe");
        }

        return res.status(200).json("recipe edited");
    } catch (error) {
        console.log(error);
    }


}

export async function deleterecipe(req,res) {

    try {
        const { body, params } = req;
        const { iid: requestID } = params;

        const recipeToDelete = await recipeModel.findOne({ id: requestID});

        if (!recipeToDelete) {
            return res.json("no recipe to delete");
        }
        
        const deleterecipe = await recipeModel.findOneAndDelete({ _id: req.params.id })

        if (!deleterecipe) {
            return res.json("error while deleting recipe");
        }

        return res.status(200).json("recipe deleted");
    } catch (error) {
        console.log(error);
    }
    
}

export async function listrecipes(req,res) {

    try {

        var currentrecipe = await recipeModel.find().select("title recipeinstructions")
         if (currentrecipe.length == 0) {
             return ("there is no data for these recipes")
         }

        return res.status(200).json(currentrecipe);

    } catch (error) {
        console.log(error);
    }
    
}

export async function listrecipe(req,res) {

    try {

        var currentrecipe = await recipeModel.findOne({_id: req.params.id})
        console.log(currentrecipe)
        if (currentrecipe.length == 0) {
            return ("there is no data for this recipe")
        }
        
        return res.status(200).json(currentrecipe);

    } catch (error) {
        console.log(error);
    }
    
}