import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";
import FormActions from "../form-actions";
import { useFormContext } from "react-hook-form";
import { useFormStore } from "@/store/useFormStore";
import { STEPS } from "@/store/slices/stepSlice";
import type { FormSchema } from "@/schemas/form";

const DescriptionForm = () => {
  const step = useFormStore((state) => state.currentStep);

  const form = useFormContext<FormSchema>();

  const nextIsDisabled =
    form.formState.errors.overview?.description && step === STEPS.description;

  const DESCRIPTION_PLACEHOLDER = `
Ex:
- No back-end, utilizar Jest para testes automatizados;
- No front-end, utilizar Context API para gerenciamento de estado;
- No front-end, utilizar React Router para roteamento.
  `.trim();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="mb-1 text-center text-lg">
        Você gostaria de adicionar uma{" "}
        <span className="text-primary font-bold">descrição</span>?
      </h2>
      <p className="mb-4 text-center text-sm">
        Isso pode ajudar a ter um resultado mais assertivo.
      </p>

      <Textarea
        className="mb-4"
        placeholder={DESCRIPTION_PLACEHOLDER}
        {...form.register("overview.description")}
      />

      {form.formState.errors.overview?.description && (
        <p className="text-center text-sm text-red-500">
          {form.formState.errors.overview?.description?.message}
        </p>
      )}

      <FormActions nextIsDisabled={nextIsDisabled} />
    </motion.div>
  );
};

export default DescriptionForm;
