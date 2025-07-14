import {
  FrontendTechnologies,
  type ExtraFrontendTechnologies,
} from "@/types/frontend_technologies";
import { ProjectType } from "@/types/project_types";
import { create } from "zustand";

interface FormState {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  next: () => void;
  back: () => void;
  type: ProjectType;
  setType: (type: ProjectType) => void;
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

const MIN_STEP = 0;
const MAX_STEP = 3;

export const useFormStore = create<FormState>((set) => ({
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
  next: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, MAX_STEP),
    })),
  back: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, MIN_STEP),
    })),

  type: ProjectType.frontend,
  setType: (type) => set({ type }),

  frontend: {
    technology: FrontendTechnologies.html_css_js,
    typescript: false,
    extra_technologies: [],
  },
  setFrontend: {
    technology: (technology) =>
      set((state) => ({
        frontend: {
          ...state.frontend,
          technology,
        },
      })),
    typescript: (typescript) =>
      set((state) => ({
        frontend: {
          ...state.frontend,
          typescript,
        },
      })),
    extra_technologies: (extra_technologies) =>
      set((state) => ({
        frontend: {
          ...state.frontend,
          extra_technologies,
        },
      })),
  },
}));
