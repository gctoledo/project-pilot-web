export const ProjectType = {
  frontend: "frontend",
  backend: "backend",
  fullstack: "fullstack",
} as const;

export const ProjectLevel = {
  junior: "junior",
  mid_level: "mid-level",
  senior: "senior",
} as const;

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];

export type ProjectLevel = (typeof ProjectLevel)[keyof typeof ProjectLevel];
