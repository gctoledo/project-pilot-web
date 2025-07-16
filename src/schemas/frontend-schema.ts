import {
  ExtraFrontendTechnologies,
  FrontendTechnologies,
} from "@/types/frontend_technologies";
import { z } from "zod/v4";

const ExtraFrontendTechnologiesSchema = z.enum(
  Object.values(ExtraFrontendTechnologies),
);

export const frontendFormSchema = z.object({
  technology: z.enum(Object.values(FrontendTechnologies)),
  typescript: z.boolean(),
  extra_technologies: z.array(ExtraFrontendTechnologiesSchema),
});
