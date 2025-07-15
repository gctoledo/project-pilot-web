import { create } from "zustand";
import {
  createFormStepSlice,
  STEPS,
  type FormStepSlice,
} from "./slices/stepSlice";
import {
  createProjectTypeSlice,
  type ProjectTypeSlice,
} from "./slices/typeSlice";
import {
  createFrontendSlice,
  type FrontendSlice,
} from "./slices/frontendSlice";
import { ProjectType } from "@/types/project_types";
import { FrontendTechnologies } from "@/types/frontend_technologies";

export type FormState = FormStepSlice &
  ProjectTypeSlice &
  FrontendSlice & {
    reset: () => void;
  };

export const useFormStore = create<FormState>(() => ({
  ...createFormStepSlice(),
  ...createProjectTypeSlice(),
  ...createFrontendSlice(),

  reset: () => {
    createFormStepSlice().setCurrentStep(STEPS.initial);
    createProjectTypeSlice().setType(ProjectType.frontend);
    createFrontendSlice().setFrontend.technology(
      FrontendTechnologies.html_css_js,
    );
    createFrontendSlice().setFrontend.typescript(false);
    createFrontendSlice().setFrontend.extra_technologies([]);
  },
}));
