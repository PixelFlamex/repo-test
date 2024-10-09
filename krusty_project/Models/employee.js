import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employee: {
        type: String,
        required: true,
        lowercase: true,

    },

})

export default mongoose.model("employee",employeeSchema)