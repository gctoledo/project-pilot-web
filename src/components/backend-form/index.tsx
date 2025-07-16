import {
  BackendTechnologies,
  DatabaseTechnologies,
  ExtraBackendTechnologies,
} from "@/types/backend_technologies";
import FormActions from "../form-actions";
import { motion } from "framer-motion";
import { z } from "zod/v4";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useFormStore } from "@/store/useFormStore";
import {
  BACKEND_EXTRA_TECHNOLOGIES_LABEL,
  BACKEND_TECHNOLOGIES_LABEL,
  DATABASE_TECHNOLOGIES_LABEL,
} from "@/constants/backend";
import { Checkbox } from "../ui/checkbox";

const ExtraBackendTechnologiesSchema = z.enum(
  Object.values(ExtraBackendTechnologies),
);

const backendFormSchema = z.object({
  technology: z.enum(Object.values(BackendTechnologies)),
  database: z.enum(Object.values(DatabaseTechnologies)),
  extra_technologies: z.array(ExtraBackendTechnologiesSchema),
});

type BackendFormSchema = z.infer<typeof backendFormSchema>;

const BackendForm = () => {
  const backend = useFormStore((state) => state.backend);
  const setBackend = useFormStore((state) => state.setBackend);

  const form = useForm<BackendFormSchema>({
    resolver: zodResolver(backendFormSchema),
    defaultValues: {
      technology: backend.technology,
      extra_technologies: backend.extra_technologies,
      database: backend.database,
    },
  });

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="space-y-5">
        <h2 className="text-center text-lg">
          Qual tecnologia{" "}
          <span className="text-primary font-bold">back-end</span> deseja
          utilizar?
        </h2>

        <Controller
          name="technology"
          control={form.control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setBackend.technology(value as BackendTechnologies);
              }}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma tecnologia" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(BackendTechnologies).map((option) => (
                  <SelectItem key={option} value={option}>
                    {BACKEND_TECHNOLOGIES_LABEL[option]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <p className="mb-2 text-sm font-medium">
          Deseja utilizar algum banco de dados?
        </p>

        <Controller
          name="database"
          control={form.control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setBackend.database(value as DatabaseTechnologies);
              }}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um banco de dados" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(DatabaseTechnologies).map((option) => (
                  <SelectItem key={option} value={option}>
                    {DATABASE_TECHNOLOGIES_LABEL[option]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <div>
          <p className="mb-2 text-sm font-medium">
            Gostaria de utilizar mais alguma tecnologia?
          </p>

          <div className="grid grid-cols-3 gap-2">
            {Object.values(ExtraBackendTechnologies).map((option) => (
              <Controller
                key={option}
                name="extra_technologies"
                control={form.control}
                render={({ field }) => {
                  const isChecked = field.value?.includes(option);
                  const handleChange = (checked: boolean) => {
                    if (checked) {
                      field.onChange([...(field.value || []), option]);
                      setBackend.extra_technologies([
                        ...(field.value || []),
                        option,
                      ]);
                    } else {
                      field.onChange(
                        (field.value || []).filter((v) => v !== option),
                      );
                      setBackend.extra_technologies(
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
                        {BACKEND_EXTRA_TECHNOLOGIES_LABEL[option]}
                      </label>
                    </div>
                  );
                }}
              />
            ))}
          </div>
        </div>

        <FormActions />
      </div>
    </motion.div>
  );
};

export default BackendForm;
