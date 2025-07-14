import FormActions from "./form-actions";
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
import { useFormStore } from "@/store/form";

const TECHNOLOGY_OPTIONS = [
  {
    label: "HTML / CSS / JavaScript (Vanilla)",
    value: FrontendTechnologies.html_css_js,
  },
  {
    label: "React.js",
    value: FrontendTechnologies.react,
  },
  {
    label: "Next.js",
    value: FrontendTechnologies.next,
  },
  {
    label: "Vue.js",
    value: FrontendTechnologies.vue,
  },
  {
    label: "Nuxt.js",
    value: FrontendTechnologies.nuxt,
  },
  {
    label: "Angular",
    value: FrontendTechnologies.angular,
  },
  {
    label: "Svelte",
    value: FrontendTechnologies.svelte,
  },
];

const EXTRA_TECHNOLOGY_OPTIONS = [
  {
    label: "Tailwind CSS",
    value: ExtraFrontendTechnologies.tailwindcss,
  },
  {
    label: "Bootstrap",
    value: ExtraFrontendTechnologies.bootstrap,
  },
  {
    label: "Material UI",
    value: ExtraFrontendTechnologies.material_ui,
  },
  {
    label: "Shadcn UI",
    value: ExtraFrontendTechnologies.shadcn_ui,
  },
  {
    label: "Sass",
    value: ExtraFrontendTechnologies.sass,
  },
  {
    label: "Styled Components",
    value: ExtraFrontendTechnologies.styled_components,
  },
];

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
  const next = useFormStore((state) => state.next);

  const form = useForm<FrontendFormSchema>({
    resolver: zodResolver(frontendFormSchema),
    defaultValues: {
      technology: frontend.technology,
      typescript: frontend.typescript,
      extra_technologies: frontend.extra_technologies,
    },
  });

  //! PRECISO FAZER QUE QUANDO O USUARIO ALTERE ALGUM INPUT
  //! ALTERE O ESTADO DO ZUSTAND EM TEMPO REAL
  //! AO INVES DE APENAS QUANDO DER SUBMIT
  const onSubmit = (data: FrontendFormSchema) => {
    console.log(data);
  };

  return (
    <form className="space-y-5">
      <h2 className="text-center text-lg">
        Qual tecnologia front-end deseja utilizar?
      </h2>

      <Controller
        name="technology"
        control={form.control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma tecnologia" />
            </SelectTrigger>
            <SelectContent>
              {TECHNOLOGY_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
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
              onCheckedChange={(checked) => field.onChange(!!checked)}
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
          {EXTRA_TECHNOLOGY_OPTIONS.map((option) => (
            <Controller
              key={option.value}
              name="extra_technologies"
              control={form.control}
              render={({ field }) => {
                const isChecked = field.value?.includes(option.value);
                const handleChange = (checked: boolean) => {
                  if (checked) {
                    field.onChange([...(field.value || []), option.value]);
                  } else {
                    field.onChange(
                      (field.value || []).filter((v) => v !== option.value),
                    );
                  }
                };

                return (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={(checked) => handleChange(!!checked)}
                      id={option.value}
                    />
                    <label className="text-sm" htmlFor={option.value}>
                      {option.label}
                    </label>
                  </div>
                );
              }}
            />
          ))}
        </div>
      </div>

      <FormActions onNext={form.handleSubmit(onSubmit)} />
    </form>
  );
};

export default FrontendForm;
