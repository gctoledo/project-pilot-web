import { useFormStore } from "@/store/useFormStore";
import FormActions from "../form-actions";
import { motion } from "framer-motion";
import InfoCard from "./components/info-card";
import { Dot } from "lucide-react";
import { FRONTEND_TECHNOLOGIES_LABEL } from "@/constants/frontend";

const Review = () => {
  const type = useFormStore((state) => state.type);
  const frontend = useFormStore((state) => state.frontend);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-center text-lg">
        Revisando as informações do projeto
      </h2>

      {type !== "backend" && (
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-lg">
            <Dot size={20} />
            Front-end
          </h3>

          <div className="space-y-3 pl-2">
            <p className="text-primary font-bold">
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
        </div>
      )}

      <FormActions />
    </motion.div>
  );
};

export default Review;
