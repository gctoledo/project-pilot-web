import {
  BackendTechnologies,
  DatabaseTechnologies,
  ExtraBackendTechnologies,
} from "@/types/backend_technologies";
import { z } from "zod/v4";

const ExtraBackendTechnologiesSchema = z.enum(
  Object.values(ExtraBackendTechnologies),
);

export const backendFormSchema = z.object({
  technology: z.enum(Object.values(BackendTechnologies)),
  database: z.enum(Object.values(DatabaseTechnologies)),
  extra_technologies: z.array(ExtraBackendTechnologiesSchema),
  tests: z.boolean(),
});
