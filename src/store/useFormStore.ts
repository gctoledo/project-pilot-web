import { create } from "zustand";
import {
  createFormStepSlice,
  STEPS,
  type FormStepSlice,
} from "./slices/stepSlice";

export type FormState = FormStepSlice & {
  reset: () => void;
};

export const useFormStore = create<FormState>(() => ({
  ...createFormStepSlice(),

  reset: () => {
    createFormStepSlice().setCurrentStep(STEPS.initial);
  },
}));
