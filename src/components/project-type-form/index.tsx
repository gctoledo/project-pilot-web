import { Button } from "../ui/button";
import { useFormStore } from "@/store/useFormStore";
import FormActions from "../form-actions";
import { motion } from "framer-motion";
import { PROJECT_TYPE_LABEL } from "@/constants/project-type";
import { ProjectType } from "@/types/project_overview";

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

      <div className="flex w-full items-center justify-center gap-4">
        {Object.values(ProjectType).map((option) => (
          <Button
            key={option}
            onClick={() => setType(option)}
            variant={actType === option ? "default" : "outline"}
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
