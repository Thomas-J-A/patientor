/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";

import patientService from "../services/patient.service";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send(patientService.fetchAllPatients());
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const newPatient = patientService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });

  res.status(201).json(newPatient);
});

export default router;
