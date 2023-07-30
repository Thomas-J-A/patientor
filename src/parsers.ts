import {
  Discharge,
  Gender,
  HealthCheckRating,
  Diagnosis,
  SickLeave,
} from "./types";

import {
  isString,
  isNumber,
  isGender,
  isDischarge,
  isHealthCheckRating,
  isStringArray,
  isSickLeave,
} from "./typeGuards";

export const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error("Incorrect or missing name");
  }

  return name;
};

export default parseName;

export const parseDateOfBirth = (dob: unknown): string => {
  if (!isString(dob)) {
    throw new Error("Incorrect or missing date of birth");
  }

  return dob;
};

export const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error("Incorrect or missing SSN");
  }

  return ssn;
};

export const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  }

  return gender;
};

export const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error("Incorrect or missing occupation");
  }

  return occupation;
};

export const parseDescription = (description: unknown): string => {
  if (!isString(description)) {
    throw new Error("Incorrect or missing description");
  }

  return description;
};

export const parseSpecialist = (specialist: unknown): string => {
  if (!isString(specialist)) {
    throw new Error("Incorrect or missing specialist");
  }

  return specialist;
};

export const parseDischarge = (discharge: unknown): Discharge => {
  if (!discharge || typeof discharge !== "object" || !isDischarge(discharge)) {
    throw new Error("Invalid discharge");
  }

  return discharge;
};

export const parseEmployerName = (employerName: unknown): string => {
  if (!isString(employerName)) {
    throw new Error("Incorrect or missing employer name");
  }

  return employerName;
};

export const parseHealthCheckRating = (
  healthCheckRating: unknown
): HealthCheckRating => {
  if (!isNumber(healthCheckRating) || !isHealthCheckRating(healthCheckRating)) {
    throw new Error("Incorrect or missing health check rating");
  }

  return healthCheckRating;
};

export const parseDiagnosisCodes = (
  diagnosisCodes: unknown
): Array<Diagnosis["code"]> | undefined => {
  // Field is optional so may not be specified (not an error)
  if (diagnosisCodes === undefined) return diagnosisCodes;

  if (!Array.isArray(diagnosisCodes) || !isStringArray(diagnosisCodes)) {
    throw new Error("Diagnosis codes must be an array of strings");
  }

  return diagnosisCodes;
};

export const parseSickLeave = (sickLeave: unknown): SickLeave | undefined => {
  // Field is optional so may not be defined (not an error)
  if (sickLeave === undefined) return sickLeave;

  if (!sickLeave || typeof sickLeave !== "object" || !isSickLeave(sickLeave)) {
    throw new Error("Invalid sick leave");
  }

  return sickLeave;
};
