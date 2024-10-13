import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    ordername: {
        type: String,
        required: true,
        lowercase: true,

    },

})

export default mongoose.model("orders",ordersSchema)