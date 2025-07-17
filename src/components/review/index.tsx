import FormActions from "../form-actions";
import { motion } from "framer-motion";
import InfoCard from "./components/info-card";
import {
  FRONTEND_EXTRA_TECHNOLOGIES_LABEL,
  FRONTEND_TECHNOLOGIES_LABEL,
} from "@/constants/frontend";
import {
  PROJECT_LEVEL_LABEL,
  PROJECT_TYPE_LABEL,
} from "@/constants/project-overview";
import { useFormContext } from "react-hook-form";
import type { FormSchema } from "@/schemas/form";
import { Book, LetterText, Printer, Settings } from "lucide-react";
import {
  BACKEND_EXTRA_TECHNOLOGIES_LABEL,
  BACKEND_TECHNOLOGIES_LABEL,
  DATABASE_TECHNOLOGIES_LABEL,
} from "@/constants/backend";
import { Textarea } from "../ui/textarea";

const Review = () => {
  const form = useFormContext<FormSchema>();
  const overview = form.getValues("overview");
  const frontend = form.getValues("frontend");
  const backend = form.getValues("backend");

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-center text-lg">
        Revisando as <span className="text-primary font-bold">informações</span>{" "}
        fornecidas...
      </h2>

      <div className="space-y-0.5 text-sm">
        <div className="mb-2 flex items-center gap-2">
          <Book size={20} />
          <p className="text-base font-bold">Resumo do projeto</p>
        </div>

        <p>
          <strong>Tipo de projeto:</strong> {PROJECT_TYPE_LABEL[overview.type]}
        </p>

        <p>
          <strong>Dificuldade:</strong> {PROJECT_LEVEL_LABEL[overview.level]}
        </p>
      </div>

      {overview.type !== "backend" && (
        <div className="space-y-0.5 text-sm">
          <div className="mb-4 w-full bg-white/8 py-[1px]"></div>

          <div className="mb-2 flex items-center gap-2">
            <Printer size={20} />
            <p className="text-base font-bold">Projeto Front-end</p>
          </div>

          <p>
            <strong>Tecnologia: </strong>
            {FRONTEND_TECHNOLOGIES_LABEL[frontend.technology]}
          </p>

          <p>
            <strong>TypeScript: </strong>
            {frontend.typescript ? "Sim" : "Não"}
          </p>

          <p>
            <strong>Testes automatizados: </strong>
            {frontend.tests ? "Sim" : "Não"}
          </p>

          <div className="mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-3">
            {frontend.extra_technologies.map((technology) => (
              <InfoCard
                key={technology}
                text={FRONTEND_EXTRA_TECHNOLOGIES_LABEL[technology]}
              />
            ))}
          </div>
        </div>
      )}

      {overview.type !== "frontend" && (
        <div className="space-y-0.5 text-sm">
          <div className="mb-4 w-full bg-white/8 py-[1px]"></div>

          <div className="mb-2 flex items-center gap-2">
            <Settings size={20} />
            <p className="text-base font-bold">Projeto Back-end</p>
          </div>

          <p>
            <strong>Tecnologia: </strong>
            {BACKEND_TECHNOLOGIES_LABEL[backend.technology]}
          </p>

          <p>
            <strong>Banco de dados: </strong>
            {DATABASE_TECHNOLOGIES_LABEL[backend.database]}
          </p>

          <p>
            <strong>Testes automatizados: </strong>
            {backend.tests ? "Sim" : "Não"}
          </p>

          <div className="mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-3">
            {backend.extra_technologies.map((technology) => (
              <InfoCard
                key={technology}
                text={BACKEND_EXTRA_TECHNOLOGIES_LABEL[technology]}
              />
            ))}
          </div>
        </div>
      )}

      {overview.description.trim() && (
        <div>
          <div className="mb-4 w-full bg-white/8 py-[1px]"></div>

          <div className="mb-2 flex items-center gap-2">
            <LetterText size={20} />
            <p className="font-bold">Descrição</p>
          </div>

          <Textarea
            value={overview.description}
            disabled={true}
            className="resize-none"
          />
        </div>
      )}

      <FormActions />
    </motion.div>
  );
};

export default Review;
