import { ProjectType } from "@/types/project_types";
import { create } from "zustand";

interface FormState {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  next: () => void;
  back: () => void;
  type: ProjectType;
  setType: (type: ProjectType) => void;
}

const MIN_STEP = 0;
const MAX_STEP = 3;

export const useFormStore = create<FormState>((set) => {
  return {
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
  };
});
