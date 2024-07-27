import express from "express";
const router = express.Router();
import Patient from "../models/Patient.js";

router.post('/add', async (req, res) => {
    const { name, age, gender, disease, department, patientId, phone } = req.body;
    try {
        const newPatient = new Patient({ name, age, gender, disease, department, patientId, phone });
        await newPatient.save();
        res.status(201).send('Patient added successfully');
    } catch (error) {
        res.status(400).send({ message: 'Failed to add patient', error });
    }
});

router.get('/:patientId', async (req, res) => {
    const { patientId } = req.params;
    try {
        const patient = await Patient.findOne({ patientId });
        if (!patient) {
            return res.status(404).send({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching patient', error });
    }
});

export default router;
