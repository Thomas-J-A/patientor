import { Gender } from "./types";

export const isString = (x: unknown): x is string => {
  return typeof x === "string";
};

export const isGender = (x: string): x is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(x);
};
