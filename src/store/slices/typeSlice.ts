import { ProjectType } from "@/types/project_types";
import { useFormStore } from "../useFormStore";

export interface ProjectTypeSlice {
  type: ProjectType;
  setType: (type: ProjectType) => void;
}

export const createProjectTypeSlice = (): ProjectTypeSlice => ({
  type: ProjectType.frontend,
  setType: (type) => {
    useFormStore.setState({ type });
  },
});
