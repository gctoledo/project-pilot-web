import FormActions from "../form-actions";
import { motion } from "framer-motion";
import InfoCard from "./components/info-card";
import { FRONTEND_TECHNOLOGIES_LABEL } from "@/constants/frontend";
import { PROJECT_TYPE_LABEL } from "@/constants/project-overview";
import { useFormContext } from "react-hook-form";
import type { FormSchema } from "@/schemas";

const Review = () => {
  const form = useFormContext<FormSchema>();
  const type = form.getValues("overview.type");
  const frontend = form.getValues("frontend");

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-center text-lg">
        Revisando as informações do projeto...
      </h2>

      <div className="w-full bg-white/5 py-[1px]"></div>

      <h3 className="mb-3 text-center text-lg">
        Projeto{" "}
        <span className="text-primary font-bold">
          {PROJECT_TYPE_LABEL[type]}
        </span>
      </h3>

      {type !== "backend" && (
        <>
          <div className="space-y-3 pl-2">
            <p className="text-primary text-center font-bold">
              {FRONTEND_TECHNOLOGIES_LABEL[frontend.technology]}
              {frontend.typescript && (
                <span className="text-foreground">
                  {" "}
                  + <span className="text-blue-500">Typescript</span>
                </span>
              )}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {frontend.extra_technologies.map((technology) => (
                <InfoCard key={technology} text={technology} />
              ))}
            </div>
          </div>
        </>
      )}

      <FormActions />
    </motion.div>
  );
};

export default Review;
