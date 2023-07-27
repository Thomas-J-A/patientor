import express from "express";

import patientService from "../services/patient.service";

import toNewPatient from "../utils/toNewPatient.util";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send(patientService.fetchAllPatients());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  try {
    // Try to find patient with requested id
    const patient = patientService.fetchPatient(id);

    return res.status(200).json(patient);
  } catch (err) {
    let errMsg = "Something went wrong.";

    if (err instanceof Error) {
      errMsg = `${errMsg} Error: ${err.message}`;
    }

    return res.status(404).json({ error: errMsg });
  }
});

router.post("/", (req, res) => {
  try {
    // Ensure request body conforms to NewPatient type
    const newPatient = toNewPatient(req.body);

    // Create new patient in data store
    const newPatientResult = patientService.addPatient(newPatient);

    res.status(201).json(newPatientResult);
  } catch (err: unknown) {
    let errMsg = "Something went wrong.";

    if (err instanceof Error) {
      errMsg = `${errMsg} Error: ${err.message}`;
    }

    res.status(400).json({ error: errMsg });
  }
});

export default router;
