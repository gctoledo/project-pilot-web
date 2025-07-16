import { Button } from "../ui/button";
import FormActions from "../form-actions";
import { motion } from "framer-motion";
import { ProjectType } from "@/types/project_overview";
import { PROJECT_TYPE_LABEL } from "@/constants/project-overview";
import { useFormContext } from "react-hook-form";
import type { FormSchema } from "@/schemas";

const ProjectTypeForm = () => {
  const form = useFormContext<FormSchema>();

  const type = form.watch("overview.type");

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-center text-lg">
        Qual <span className="text-primary font-bold">tipo</span> de projeto
        você quer criar?
      </h2>

      <div className="flex w-full items-center justify-center gap-4">
        {Object.values(ProjectType).map((option) => (
          <Button
            key={option}
            onClick={() => form.setValue("overview.type", option)}
            variant={type === option ? "default" : "outline"}
            type="button"
          >
            {PROJECT_TYPE_LABEL[option]}
          </Button>
        ))}
      </div>

      <FormActions />
    </motion.div>
  );
};

export default ProjectTypeForm;
