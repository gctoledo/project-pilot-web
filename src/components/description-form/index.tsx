import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";
import FormActions from "../form-actions";
import { useForm } from "react-hook-form";
import z from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store/useFormStore";

const descriptionFormSchema = z.object({
  description: z.string(),
});

type DescriptionFormSchema = z.infer<typeof descriptionFormSchema>;

const DescriptionForm = () => {
  const description = useFormStore((state) => state.overview.description);
  const setDescription = useFormStore((state) => state.setOverview.description);

  const form = useForm<DescriptionFormSchema>({
    resolver: zodResolver(descriptionFormSchema),
    mode: "onChange",
    defaultValues: {
      description,
    },
  });

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="mb-1 text-center text-lg">
        Você gostaria de adicionar uma{" "}
        <span className="text-primary">descrição</span>?
      </h2>
      <p className="mb-4 text-center text-sm">
        Isso pode ajudar a ter um resultado mais assertivo.
      </p>

      <Textarea
        className="mb-4"
        placeholder="Gostaria de utilizar Vitest para realizar testes automatizados no projeto..."
        {...form.register("description")}
        onChange={(e) => setDescription(e.target.value)}
      />

      <FormActions />
    </motion.div>
  );
};

export default DescriptionForm;
