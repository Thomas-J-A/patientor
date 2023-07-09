import express from "express";

import diagnosisService from "../services/diagnosis.service";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send(diagnosisService.fetchAllDiagnoses());
});

export default router;
