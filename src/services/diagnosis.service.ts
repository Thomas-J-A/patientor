import diagnoses from "../data/diagnoses";

import { Diagnosis } from "../types.js";

// Return all diagnoses from data store
const fetchAllDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export default { fetchAllDiagnoses };
