/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  parseDescription,
  parseDateOfBirth,
  parseSpecialist,
  parseDischarge,
  parseEmployerName,
  parseHealthCheckRating,
  parseDiagnosisCodes,
  parseSickLeave,
} from "../parsers";
import {
  NewHospitalEntry,
  NewOccupationalHealthcareEntry,
  NewHealthCheckEntry,
  NewEntry,
} from "../types";
import { isString } from "../typeGuards";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewEntry = (entry: any): NewEntry => {
  if (!entry || typeof entry !== "object") {
    throw new Error("Invalid entry");
  }

  if (!("type" in entry) || !isString(entry.type)) {
    throw new Error("You must provide an entry type (as a string)");
  }

  const baseEntry = {
    description: parseDescription(entry.description),
    date: parseDateOfBirth(entry.date),
    specialist: parseSpecialist(entry.specialist),
    diagnosisCodes: parseDiagnosisCodes(entry.diagnosisCodes),
  };

  switch (entry.type) {
    case "Hospital":
      const newHospitalEntry: NewHospitalEntry = {
        ...baseEntry,
        type: "Hospital",
        discharge: parseDischarge(entry.discharge),
      };

      return newHospitalEntry;
    case "OccupationalHealthcare":
      const newOccupationalHealthcareEntry: NewOccupationalHealthcareEntry = {
        ...baseEntry,
        type: "OccupationalHealthcare",
        employerName: parseEmployerName(entry.employerName),
        sickLeave: parseSickLeave(entry.sickLeave),
      };

      return newOccupationalHealthcareEntry;
    case "HealthCheck":
      const newHealthCheckEntry: NewHealthCheckEntry = {
        ...baseEntry,
        type: "HealthCheck",
        healthCheckRating: parseHealthCheckRating(entry.healthCheckRating),
      };

      return newHealthCheckEntry;
    default:
      throw new Error(
        "Type must be either Hospital, OccupationalHealthcare, or HealthCheck"
      );
  }
};

export default toNewEntry;
