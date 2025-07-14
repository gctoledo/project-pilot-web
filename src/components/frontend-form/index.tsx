import FormActions from "../form-actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import {
  ExtraFrontendTechnologies,
  FrontendTechnologies,
} from "@/types/frontend_technologies";
import { useFormStore } from "@/store/useFormStore";
import { motion } from "framer-motion";
import {
  FRONTEND_EXTRA_TECHNOLOGIES_LABEL,
  FRONTEND_TECHNOLOGIES_LABEL,
} from "@/constants/frontend";

const ExtraFrontendTechnologiesSchema = z.enum(
  Object.values(ExtraFrontendTechnologies),
);

const frontendFormSchema = z.object({
  technology: z.enum(Object.values(FrontendTechnologies)),
  typescript: z.boolean(),
  extra_technologies: z.array(ExtraFrontendTechnologiesSchema),
});

type FrontendFormSchema = z.infer<typeof frontendFormSchema>;

const FrontendForm = () => {
  const frontend = useFormStore((state) => state.frontend);
  const setFrontend = useFormStore((state) => state.setFrontend);

  const form = useForm<FrontendFormSchema>({
    resolver: zodResolver(frontendFormSchema),
    defaultValues: {
      technology: frontend.technology,
      typescript: frontend.typescript,
      extra_technologies: frontend.extra_technologies,
    },
  });

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <form className="space-y-5">
        <h2 className="text-center text-lg">
          Qual tecnologia <span className="text-primary">front-end</span> deseja
          utilizar?
        </h2>

        <Controller
          name="technology"
          control={form.control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setFrontend.technology(value as FrontendTechnologies);
              }}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma tecnologia" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(FrontendTechnologies).map((option) => (
                  <SelectItem key={option} value={option}>
                    {FRONTEND_TECHNOLOGIES_LABEL[option]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <Controller
          name="typescript"
          control={form.control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked) => {
                  field.onChange(!!checked);
                  setFrontend.typescript(!!checked);
                }}
                id="typescript"
              />
              <label className="text-sm" htmlFor="typescript">
                Deseja utilizar TypeScript?
              </label>
            </div>
          )}
        />

        <div>
          <p className="mb-2 text-sm font-medium">
            Gostaria de utilizar mais alguma tecnologia?
          </p>

          <div className="grid grid-cols-3 gap-2">
            {Object.values(ExtraFrontendTechnologies).map((option) => (
              <Controller
                key={option}
                name="extra_technologies"
                control={form.control}
                render={({ field }) => {
                  const isChecked = field.value?.includes(option);
                  const handleChange = (checked: boolean) => {
                    if (checked) {
                      field.onChange([...(field.value || []), option]);
                      setFrontend.extra_technologies([
                        ...(field.value || []),
                        option,
                      ]);
                    } else {
                      field.onChange(
                        (field.value || []).filter((v) => v !== option),
                      );
                      setFrontend.extra_technologies(
                        (field.value || []).filter((v) => v !== option),
                      );
                    }
                  };

                  return (
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked) => handleChange(!!checked)}
                        id={option}
                      />
                      <label className="text-sm" htmlFor={option}>
                        {FRONTEND_EXTRA_TECHNOLOGIES_LABEL[option]}
                      </label>
                    </div>
                  );
                }}
              />
            ))}
          </div>
        </div>

        <FormActions />
      </form>
    </motion.div>
  );
};

export default FrontendForm;
