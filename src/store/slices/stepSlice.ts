import { useFormStore } from "../useFormStore";

const MIN_STEP = 0;
const MAX_STEP = 3;

export interface FormStepSlice {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  next: () => void;
  back: () => void;
}

export const createFormStepSlice = (): FormStepSlice => ({
  currentStep: 0,
  setCurrentStep: (step) => {
    useFormStore.setState({ currentStep: step });
  },
  next: () => {
    useFormStore.setState((state) => ({
      currentStep: Math.min(state.currentStep + 1, MAX_STEP),
    }));
  },
  back: () => {
    useFormStore.setState((state) => ({
      currentStep: Math.max(state.currentStep - 1, MIN_STEP),
    }));
  },
});
