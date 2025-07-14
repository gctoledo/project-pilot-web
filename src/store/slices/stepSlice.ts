import { ProjectType } from "@/types/project_types";
import { useFormStore } from "../useFormStore";

export const MIN_STEP = 0;
export const MAX_STEP = 3;

export const STEPS = {
  initial: MIN_STEP,
  projectType: 1,
  frontend: 2,
  backend: 3,
  review: MAX_STEP,
};

export interface FormStepSlice {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  next: () => void;
  back: () => void;
}

export const createFormStepSlice = (): FormStepSlice => ({
  currentStep: STEPS.initial,
  setCurrentStep: (step) => {
    useFormStore.setState({ currentStep: step });
  },
  next: () => {
    useFormStore.setState((state) => {
      if (
        state.type === ProjectType.backend &&
        state.currentStep === STEPS.projectType
      ) {
        return {
          currentStep: STEPS.review,
        };
      }

      if (
        state.type === ProjectType.frontend &&
        state.currentStep === STEPS.frontend
      ) {
        return {
          currentStep: STEPS.review,
        };
      }

      return {
        currentStep: Math.min(state.currentStep + 1, MAX_STEP),
      };
    });
  },
  back: () => {
    useFormStore.setState((state) => {
      if (
        state.type === ProjectType.backend &&
        state.currentStep === STEPS.backend
      ) {
        return {
          currentStep: STEPS.projectType,
        };
      }

      return {
        currentStep: Math.max(state.currentStep - 1, MIN_STEP),
      };
    });
  },
});
