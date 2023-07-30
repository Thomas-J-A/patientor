import { Gender, Discharge, HealthCheckRating, SickLeave } from "./types";

export const isString = (x: unknown): x is string => {
  return typeof x === "string";
};

export const isNumber = (x: unknown): x is number => {
  return typeof x === "number";
};

export const isGender = (x: string): x is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(x);
};

export const isDischarge = (x: object): x is Discharge => {
  return (
    "date" in x && isString(x.date) && "criteria" in x && isString(x.criteria)
  );
};

export const isHealthCheckRating = (x: number): x is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(x);
};

export const isStringArray = (x: unknown[]): x is string[] => {
  return x.every((y) => typeof y === "string");
};

export const isSickLeave = (x: object): x is SickLeave => {
  return (
    "startDate" in x &&
    isString(x.startDate) &&
    "endDate" in x &&
    isString(x.endDate)
  );
};
