import { ProjectLevel, ProjectType } from "@/types/project_overview";
import { z } from "zod/v4";

export const overviewFormSchema = z.object({
  description: z
    .string()
    .max(300, "Descrição não pode ultrapassar 300 caracteres")
    .trim(),
  level: z.enum(Object.values(ProjectLevel)),
  type: z.enum(Object.values(ProjectType)),
});
