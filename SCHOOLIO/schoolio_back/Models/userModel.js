import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true,
        default: 0
    },
    currentPic: {
        type: Number,
        required: true,
        default: 0
    },
    ownedPics: {
        type: Array,
        required: true,
        default: [0]
    },
    highscore: {
        type: Number,
        required: true,
        default: 0
    }
})

export default mongoose.model("user",userSchema)