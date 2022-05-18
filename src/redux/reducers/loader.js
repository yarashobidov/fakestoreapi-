import { EXIT_LOADER, START_LOADER } from "../types/types";

const loader = (state = true, action) => {
  switch (action.type) {
    case START_LOADER:
      return true;

    case EXIT_LOADER:
      return false;

    default:
      return state;
  }
};

export default loader;
