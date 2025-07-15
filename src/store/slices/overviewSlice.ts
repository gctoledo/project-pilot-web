import { ProjectType } from "@/types/project_overview";
import { useFormStore } from "../useFormStore";

export interface ProjectOverviewSlice {
  type: ProjectType;
  setType: (type: ProjectType) => void;
  description: string;
  setDescription: (description: string) => void;
}

export const createProjectOverviewSlice = (): ProjectOverviewSlice => ({
  type: ProjectType.frontend,
  setType: (type) => {
    useFormStore.setState({ type });
  },

  description: "",
  setDescription: (description) => {
    useFormStore.setState({ description });
  },
});
