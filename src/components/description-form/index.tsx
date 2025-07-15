import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";
import FormActions from "../form-actions";
import { useForm } from "react-hook-form";
import z from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store/useFormStore";
import { STEPS } from "@/store/slices/stepSlice";

const descriptionFormSchema = z.object({
  description: z
    .string()
    .max(300, "Descrição não pode ultrapassar 300 caracteres"),
});

type DescriptionFormSchema = z.infer<typeof descriptionFormSchema>;

const DescriptionForm = () => {
  const description = useFormStore((state) => state.overview.description);
  const setDescription = useFormStore((state) => state.setOverview.description);
  const step = useFormStore((state) => state.currentStep);

  const form = useForm<DescriptionFormSchema>({
    resolver: zodResolver(descriptionFormSchema),
    mode: "onChange",
    defaultValues: {
      description,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    form.setValue("description", value);
    form.trigger("description");
    setDescription(value);
  };

  const nextIsDisabled = !form.formState.isValid && step === STEPS.description;

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
        placeholder="Gostaria de utilizar Vitest para realizar testes automatizados no projeto..."
        {...form.register("description")}
        onChange={handleChange}
      />

      {form.formState.errors.description && (
        <p className="text-center text-sm text-red-500">
          {form.formState.errors.description.message}
        </p>
      )}

      <FormActions nextIsDisabled={nextIsDisabled} />
    </motion.div>
  );
};

export default DescriptionForm;
