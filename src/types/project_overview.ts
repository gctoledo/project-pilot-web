export const ProjectType = {
  frontend: "frontend",
  backend: "backend",
  fullstack: "fullstack",
} as const;

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];
