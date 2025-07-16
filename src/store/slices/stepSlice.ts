import { ProjectType } from "@/types/project_overview";
import { useFormStore } from "../useFormStore";

export const MIN_STEP = 0;
export const MAX_STEP = 6;

export const STEPS = {
  initial: MIN_STEP,
  projectType: 1,
  level: 2,
  frontend: 3,
  backend: 4,
  description: 5,
  review: MAX_STEP,
};

export interface FormStepSlice {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  next: (type: ProjectType) => void;
  back: (type: ProjectType) => void;
}

export const createFormStepSlice = (): FormStepSlice => ({
  currentStep: STEPS.initial,
  setCurrentStep: (step) => {
    useFormStore.setState({ currentStep: step });
  },
  next: (type) => {
    useFormStore.setState((state) => {
      if (type === ProjectType.backend && state.currentStep === STEPS.level) {
        return {
          currentStep: STEPS.backend,
        };
      }

      if (
        type === ProjectType.frontend &&
        state.currentStep === STEPS.frontend
      ) {
        return {
          currentStep: STEPS.description,
        };
      }

      return {
        currentStep: Math.min(state.currentStep + 1, MAX_STEP),
      };
    });
  },
  back: (type) => {
    useFormStore.setState((state) => {
      if (type === ProjectType.backend && state.currentStep === STEPS.backend) {
        return {
          currentStep: STEPS.level,
        };
      }

      if (
        type === ProjectType.frontend &&
        state.currentStep === STEPS.description
      ) {
        return {
          currentStep: STEPS.frontend,
        };
      }

      return {
        currentStep: Math.max(state.currentStep - 1, MIN_STEP),
      };
    });
  },
});
