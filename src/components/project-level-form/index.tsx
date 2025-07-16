import { Button } from "../ui/button";
import FormActions from "../form-actions";
import { motion } from "framer-motion";
import { ProjectLevel } from "@/types/project_overview";
import { PROJECT_LEVEL_LABEL } from "@/constants/project-overview";
import { useFormContext } from "react-hook-form";
import type { FormSchema } from "@/schemas/form";

const ProjectLevelForm = () => {
  const form = useFormContext<FormSchema>();
  const level = form.watch("overview.level");

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-center text-lg">
        Qual seu nível de{" "}
        <span className="text-primary font-bold">conhecimento</span> em
        programação?
      </h2>

      <div className="flex w-full items-center justify-center gap-4">
        {Object.values(ProjectLevel).map((option) => (
          <Button
            key={option}
            onClick={() => form.setValue("overview.level", option)}
            variant={level === option ? "default" : "outline"}
            type="button"
          >
            {PROJECT_LEVEL_LABEL[option]}
          </Button>
        ))}
      </div>

      <FormActions />
    </motion.div>
  );
};

export default ProjectLevelForm;
