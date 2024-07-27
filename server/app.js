import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Patients from "./routes/patient.js";
import Doctors from "./routes/doctor.js";

const app = express();


mongoose.connect('mongodb+srv://admin:admin123@cluster0.majagkj.mongodb.net/?retryWrites=true&w=majority&appName=cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(cors());
app.use(express.json());

app.use('/patients', Patients);
app.use('/doctors', Doctors);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})