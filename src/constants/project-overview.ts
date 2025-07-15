import { ProjectLevel, ProjectType } from "@/types/project_overview";

export const PROJECT_TYPE_LABEL = {
  [ProjectType.frontend]: "Front-end",
  [ProjectType.backend]: "Back-end",
  [ProjectType.fullstack]: "Full-stack",
};

export const PROJECT_LEVEL_LABEL = {
  [ProjectLevel.junior]: "Júnior",
  [ProjectLevel.mid_level]: "Pleno",
  [ProjectLevel.senior]: "Sênior",
};
