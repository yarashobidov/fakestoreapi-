import { START_LOADER, EXIT_LOADER } from "../types/types";

export const startloader = () => {
  return { type: START_LOADER };
};

export const exitloader = () => {
  return { type: EXIT_LOADER };
};
