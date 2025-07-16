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
import { ProjectLevel, ProjectType } from "@/types/project_overview";
import {
  createProjectOverviewSlice,
  type ProjectOverviewSlice,
} from "./slices/overviewSlice";
import { createBackendSlice, type BackendSlice } from "./slices/backendSlice";
import {
  BackendTechnologies,
  DatabaseTechnologies,
} from "@/types/backend_technologies";

export type FormState = FormStepSlice &
  ProjectOverviewSlice &
  FrontendSlice &
  BackendSlice & {
    reset: () => void;
  };

export const useFormStore = create<FormState>(() => ({
  ...createFormStepSlice(),
  ...createProjectOverviewSlice(),
  ...createFrontendSlice(),
  ...createBackendSlice(),

  reset: () => {
    createFormStepSlice().setCurrentStep(STEPS.initial);

    createProjectOverviewSlice().setOverview.type(ProjectType.frontend);
    createProjectOverviewSlice().setOverview.description("");
    createProjectOverviewSlice().setOverview.level(ProjectLevel.junior);

    createFrontendSlice().setFrontend.technology(
      FrontendTechnologies.html_css_js,
    );
    createFrontendSlice().setFrontend.typescript(false);
    createFrontendSlice().setFrontend.extra_technologies([]);

    createBackendSlice().setBackend.technology(BackendTechnologies.express_js);
    createBackendSlice().setBackend.database(DatabaseTechnologies.none);
    createBackendSlice().setBackend.extra_technologies([]);
  },
}));
