import express from "express";
import cors from "cors";

import diagnosisRouter from "./routes/diagnosis.route";
import patientRouter from "./routes/patient.route";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("Someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);
app.use("/api/patients", patientRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
