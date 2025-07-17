import {
  BackendTechnologies,
  DatabaseTechnologies,
  ExtraBackendTechnologies,
} from "@/types/backend_technologies";
import FormActions from "../form-actions";
import { motion } from "framer-motion";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  BACKEND_EXTRA_TECHNOLOGIES_LABEL,
  BACKEND_TECHNOLOGIES_LABEL,
  DATABASE_TECHNOLOGIES_LABEL,
} from "@/constants/backend";
import { Checkbox } from "../ui/checkbox";
import type { FormSchema } from "@/schemas/form";

const BackendForm = () => {
  const form = useFormContext<FormSchema>();

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
          name="backend.technology"
          control={form.control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
          name="backend.database"
          control={form.control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
                name="backend.extra_technologies"
                control={form.control}
                render={({ field }) => {
                  const isChecked = field.value?.includes(option);
                  const handleChange = (checked: boolean) => {
                    if (checked) {
                      field.onChange([...(field.value || []), option]);
                    } else {
                      field.onChange(
                        (field.value || []).filter(
                          (v: ExtraBackendTechnologies) => v !== option,
                        ),
                      );
                    }
                  };

                  return (
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={!!isChecked}
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

        <Controller
          name="backend.tests"
          control={form.control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={!!field.value}
                onCheckedChange={field.onChange}
                id="tests"
              />
              <label className="text-sm" htmlFor="tests">
                Deseja criar testes automatizados?
              </label>
            </div>
          )}
        />

        <FormActions />
      </div>
    </motion.div>
  );
};

export default BackendForm;
