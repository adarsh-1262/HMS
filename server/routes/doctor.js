import express from "express";
const router = express.Router();
import Doctor from "../models/Doctor.js";

router.post("/add", async (req, res) => {
    const {name, department} = req.body;
    const newDoctor = new Doctor({ name, department });
    await newDoctor.save();
    res.status(201).send('Doctor added successfully');
});

router.get('/', async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

export default router;