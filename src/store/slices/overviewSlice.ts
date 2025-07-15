import { ProjectLevel, ProjectType } from "@/types/project_overview";
import { useFormStore } from "../useFormStore";

export interface ProjectOverviewSlice {
  overview: {
    type: ProjectType;
    description: string;
    level: ProjectLevel;
  };

  setOverview: {
    type: (type: ProjectType) => void;
    description: (description: string) => void;
    level: (level: ProjectLevel) => void;
  };
}

export const createProjectOverviewSlice = (): ProjectOverviewSlice => ({
  overview: {
    type: ProjectType.frontend,
    description: "",
    level: ProjectLevel.junior,
  },

  setOverview: {
    type: (type) => {
      useFormStore.setState((state) => ({
        overview: {
          ...state.overview,
          type,
        },
      }));
    },
    description: (description) => {
      useFormStore.setState((state) => ({
        overview: {
          ...state.overview,
          description,
        },
      }));
    },
    level: (level) => {
      useFormStore.setState((state) => ({
        overview: {
          ...state.overview,
          level,
        },
      }));
    },
  },
});
