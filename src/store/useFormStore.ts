import { create } from "zustand";
import { createFormStepSlice, type FormStepSlice } from "./slices/stepSlice";
import {
  createProjectTypeSlice,
  type ProjectTypeSlice,
} from "./slices/typeSlice";
import {
  createFrontendSlice,
  type FrontendSlice,
} from "./slices/frontendSlice";

export type FormState = FormStepSlice & ProjectTypeSlice & FrontendSlice;

export const useFormStore = create<FormState>(() => ({
  ...createFormStepSlice(),
  ...createProjectTypeSlice(),
  ...createFrontendSlice(),
}));
