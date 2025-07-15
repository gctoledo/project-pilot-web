import { create } from "zustand";
import {
  createFormStepSlice,
  STEPS,
  type FormStepSlice,
} from "./slices/stepSlice";
import {
  createFrontendSlice,
  type FrontendSlice,
} from "./slices/frontendSlice";
import { FrontendTechnologies } from "@/types/frontend_technologies";
import { ProjectType } from "@/types/project_overview";
import {
  createProjectOverviewSlice,
  type ProjectOverviewSlice,
} from "./slices/overviewSlice";

export type FormState = FormStepSlice &
  ProjectOverviewSlice &
  FrontendSlice & {
    reset: () => void;
  };

export const useFormStore = create<FormState>(() => ({
  ...createFormStepSlice(),
  ...createProjectOverviewSlice(),
  ...createFrontendSlice(),

  reset: () => {
    createFormStepSlice().setCurrentStep(STEPS.initial);

    createProjectOverviewSlice().setType(ProjectType.frontend);
    createProjectOverviewSlice().setDescription("");

    createFrontendSlice().setFrontend.technology(
      FrontendTechnologies.html_css_js,
    );
    createFrontendSlice().setFrontend.typescript(false);
    createFrontendSlice().setFrontend.extra_technologies([]);
  },
}));
