import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
    title: {
        type: String,
        
        lowercase: true,

    },
    recipeinstructions: {
        type: String,
        required: true,
        lowercase: true,

    },

})

export default mongoose.model("recipes",recipesSchema)