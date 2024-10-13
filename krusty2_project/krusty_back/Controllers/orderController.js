
import orderModel from "../Models/orderModel.js";


export async function createorder(req,res) {

    try {
        const { body } = req;
        console.log(body)
        const { ordername } = req.body;

        if (!ordername ) {
            return res.status(400).json("order name is missing");
        }
        const neworder = { ordername };

        orderModel.create(neworder)

        return res.status(200).json("order placed");
    } catch (error) {
        console.log(error);
    }

}


export async function editorder(req,res) {
    try {
        const { body, params } = req;
        const { id: requestID } = params;

        console.log(requestID)
        const orderToEdit = await orderModel.findOne({ _id: requestID});
        console.log(orderToEdit);
        
        

        if (!orderToEdit) {
            return res.json("no order to edit");
        }
        
        const editorder = await orderModel.findOneAndUpdate({ _id: req.params.id },body)

        if (!editorder) {
            return res.json("error while editing order");
        }

        return res.status(200).json("order edited");
    } catch (error) {
        console.log(error);
    }


}

export async function deleteorder(req,res) {

    try {
        const { body, params } = req;
        const { id: requestID } = params;

        const orderToDelete = await orderModel.findOne({ id: requestID});

        if (!orderToDelete) {
            return res.json("no order to delete");
        }
        
        const deleteorder = await orderModel.findOneAndDelete({ id: req.params.id })

        if (!deleteorder) {
            return res.json("error while deleting order");
        }

        return res.status(200).json("order deleted");
    } catch (error) {
        console.log(error);
    }
    
}

export async function listorders(req,res) {

    try {

        var currentorder = await orderModel.find().select("ordername")
         if (currentorder.length == 0) {
             return ("there is no data for these order")
         }

        return res.status(200).json(currentorder);

    } catch (error) {
        console.log(error);
    }
    
}

export async function listorder(req,res) {

    try {

        var currentorder = await orderModel.findOne({_id: req.params.id})
        console.log(currentorder)
        if (currentorder.length == 0) {
            return ("there is no data for this order")
        }
        
        return res.status(200).json(currentorder);

    } catch (error) {
        console.log(error);
    }
    
}