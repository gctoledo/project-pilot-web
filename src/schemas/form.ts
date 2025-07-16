import { z } from "zod/v4";
import { frontendFormSchema } from "./frontend-schema";
import { backendFormSchema } from "./backend-schema";
import { overviewFormSchema } from "./overview-schema";

export const formSchema = z.object({
  frontend: frontendFormSchema,
  backend: backendFormSchema,
  overview: overviewFormSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
