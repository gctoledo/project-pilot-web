import { ProjectType } from "@/types/project_types";
import { Button } from "../ui/button";
import { useFormStore } from "@/store/useFormStore";
import FormActions from "../form-actions";
import { motion } from "framer-motion";

const PROJECT_TYPES_OPTIONS = [
  {
    label: "Front-end",
    value: ProjectType.frontend,
  },
  {
    label: "Back-end",
    value: ProjectType.backend,
  },
  {
    label: "Full-stack",
    value: ProjectType.fullstack,
  },
];

const ProjectTypeForm = () => {
  const setType = useFormStore((state) => state.setType);
  const actType = useFormStore((state) => state.type);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-center text-lg">
        Qual tipo de projeto você quer criar?
      </h2>

      <div className="flex items-center gap-4">
        {PROJECT_TYPES_OPTIONS.map((option) => (
          <Button
            key={option.value}
            onClick={() => setType(option.value)}
            variant={actType === option.value ? "default" : "outline"}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <FormActions />
    </motion.div>
  );
};

export default ProjectTypeForm;
