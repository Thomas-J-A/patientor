import { Gender } from "./types";

import { isString, isGender } from "./typeGuards";

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
