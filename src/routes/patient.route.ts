import express from "express";

import patientService from "../services/patient.service";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send(patientService.fetchAllPatients());
});

export default router;
