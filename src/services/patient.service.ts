import patients from "../data/patients";

import { PatientNoSensitiveFields } from "../types";

const fetchAllPatients = (): PatientNoSensitiveFields[] => {
  return patients.map((p) => ({
    id: p.id,
    name: p.name,
    dateOfBirth: p.dateOfBirth,
    gender: p.gender,
    occupation: p.occupation,
  }));
};

export default { fetchAllPatients };
