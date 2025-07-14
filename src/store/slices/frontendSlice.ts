import {
  FrontendTechnologies,
  type ExtraFrontendTechnologies,
} from "@/types/frontend_technologies";
import { useFormStore } from "../useFormStore";

export interface FrontendSlice {
  frontend: {
    technology: FrontendTechnologies;
    typescript: boolean;
    extra_technologies: ExtraFrontendTechnologies[];
  };
  setFrontend: {
    technology: (technology: FrontendTechnologies) => void;
    typescript: (typescript: boolean) => void;
    extra_technologies: (
      extra_technologies: ExtraFrontendTechnologies[],
    ) => void;
  };
}

export const createFrontendSlice = (): FrontendSlice => ({
  frontend: {
    technology: FrontendTechnologies.html_css_js,
    typescript: false,
    extra_technologies: [],
  },
  setFrontend: {
    technology: (technology) => {
      useFormStore.setState((state) => ({
        frontend: {
          ...state.frontend,
          technology,
        },
      }));
    },
    typescript: (typescript) => {
      useFormStore.setState((state) => ({
        frontend: {
          ...state.frontend,
          typescript,
        },
      }));
    },
    extra_technologies: (extra_technologies) => {
      useFormStore.setState((state) => ({
        frontend: {
          ...state.frontend,
          extra_technologies,
        },
      }));
    },
  },
});
