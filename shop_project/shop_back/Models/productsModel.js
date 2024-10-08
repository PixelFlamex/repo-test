import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,

    },
    price: {
        type:String,
        required: true,
        lowercase: true,
        minlength: 1
    },
    sku: {
        type: String,
        unique: false,
        minlength: 1,
        default: "no sku"
    },
    category: {
        type: String,
        lowercase: true,
        default: "no category"
    },
    brand: {
        type: String,
        lowercase: true,
        default: "no brand"
    },
    description: {
        type: String,
        lowercase: true,
        default: "no description"
    },
    createdAt: {
        type: Date,
        default: () => {
            return new Date();
        },
    }
})

export default mongoose.model("products",productsSchema)