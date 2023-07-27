import { v4 as uuidv4 } from "uuid";

import patients from "../data/patients";

import { Patient, PatientNoSensitiveFields, NewPatient } from "../types";

const fetchAllPatients = (): PatientNoSensitiveFields[] => {
  return patients.map((p) => ({
    id: p.id,
    name: p.name,
    dateOfBirth: p.dateOfBirth,
    gender: p.gender,
    occupation: p.occupation,
  }));
};

const fetchPatient = (id: string): Patient => {
  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    throw new Error(`Patient with ID ${id} not found`);
  }

  return patient;
};

const addPatient = (data: NewPatient): Patient => {
  // Create new patient object
  const newPatient: Patient = {
    id: uuidv4(),
    ...data,
  };

  // Add patient to data store
  patients.push(newPatient);

  return newPatient;
};

export default { fetchAllPatients, fetchPatient, addPatient };
