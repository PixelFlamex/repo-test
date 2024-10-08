import mongoose from "mongoose";

const namesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,

    },
    createdAt: {
        type: Date,
        default: () => {
            return new Date();
        },
    }
})

export default mongoose.model("names",namesSchema)