import { useFormStore } from "../useFormStore";
import {
  BackendTechnologies,
  DatabaseTechnologies,
  type ExtraBackendTechnologies,
} from "@/types/backend_technologies";

export interface BackendSlice {
  backend: {
    technology: BackendTechnologies;
    database: DatabaseTechnologies;
    extra_technologies: ExtraBackendTechnologies[];
  };
  setBackend: {
    technology: (technology: BackendTechnologies) => void;
    database: (database: DatabaseTechnologies) => void;
    extra_technologies: (
      extra_technologies: ExtraBackendTechnologies[],
    ) => void;
  };
}

export const createBackendSlice = (): BackendSlice => ({
  backend: {
    technology: BackendTechnologies.express_js,
    database: DatabaseTechnologies.none,
    extra_technologies: [],
  },
  setBackend: {
    technology: (technology) => {
      useFormStore.setState((state) => ({
        backend: {
          ...state.backend,
          technology,
        },
      }));
    },
    database: (database) => {
      useFormStore.setState((state) => ({
        backend: {
          ...state.backend,
          database,
        },
      }));
    },
    extra_technologies: (extra_technologies) => {
      useFormStore.setState((state) => ({
        backend: {
          ...state.backend,
          extra_technologies,
        },
      }));
    },
  },
});
