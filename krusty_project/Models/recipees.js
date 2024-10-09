import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
    recipee: {
        type: String,
        required: true,
        lowercase: true,

    },

})

export default mongoose.model("recipes",recipesSchema)