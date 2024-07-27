import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    patientId: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    }
})

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;