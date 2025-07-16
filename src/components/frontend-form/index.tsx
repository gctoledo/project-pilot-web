import FormActions from "../form-actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import {
  ExtraFrontendTechnologies,
  FrontendTechnologies,
} from "@/types/frontend_technologies";
import { motion } from "framer-motion";
import {
  FRONTEND_EXTRA_TECHNOLOGIES_LABEL,
  FRONTEND_TECHNOLOGIES_LABEL,
} from "@/constants/frontend";
import type { FormSchema } from "@/schemas/form";

const FrontendForm = () => {
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
          <span className="text-primary font-bold">front-end</span> deseja
          utilizar?
        </h2>

        <Controller
          name="frontend.technology"
          control={form.control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
          name="frontend.typescript"
          control={form.control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={!!field.value}
                onCheckedChange={field.onChange}
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
                name="frontend.extra_technologies"
                control={form.control}
                render={({ field }) => {
                  const isChecked = field.value?.includes(option);
                  const handleChange = (checked: boolean) => {
                    if (checked) {
                      field.onChange([...(field.value || []), option]);
                    } else {
                      field.onChange(
                        (field.value || []).filter(
                          (v: ExtraFrontendTechnologies) => v !== option,
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
      </div>
    </motion.div>
  );
};

export default FrontendForm;
