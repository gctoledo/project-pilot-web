import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod/v4";
import type { FormValues } from "../App";
const firstStepSchema = z.object({
  type: z.enum(["frontend", "backend", "fullstack"]),
});

type FirstStepValues = z.infer<typeof firstStepSchema>;

interface FirstStepProps {
  onNext: (data: Partial<FormValues>) => void;
  defaultValues: FormValues;
}

const FirstStep = ({ defaultValues, onNext }: FirstStepProps) => {
  const form = useForm<FirstStepValues>({
    resolver: zodResolver(firstStepSchema),
    defaultValues: {
      type: defaultValues.type,
    },
  });

  const onSubmit = (data: FirstStepValues) => {
    onNext({
      type: data.type,
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <h2>Qual tipo de projeto você quer criar?</h2>

      <div></div>
    </form>
  );
};

export default FirstStep;
