import { v4 as uuidv4 } from "uuid";

import patients from "../data/patients";

import {
  Patient,
  PatientNoSensitiveFields,
  NewPatient,
  NewEntry,
  Entry,
} from "../types";

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

const addEntry = (patientId: string, data: NewEntry): Entry => {
  // Create new entry object
  const newEntry: Entry = {
    id: uuidv4(),
    ...data,
  };

  // Add entry to appropriate user in data store
  const patient = patients.find((p) => p.id === patientId);

  if (!patient) {
    throw new Error(`Patient with id ${patientId} does not exist`);
  }

  console.log(patient.entries);
  patient.entries = [...patient.entries, newEntry];
  console.log(patient.entries);

  return newEntry;
};

export default { fetchAllPatients, fetchPatient, addPatient, addEntry };
