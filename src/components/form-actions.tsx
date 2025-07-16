import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/useFormStore";
import { MAX_STEP, STEPS } from "@/store/slices/stepSlice";
import ClearFormButton from "./clear-form-button";
import GenerateResultButton from "./generate-result-button";
import { useFormContext } from "react-hook-form";
import type { FormSchema } from "@/schemas";

interface FormActionsProps {
  nextIsDisabled?: boolean;
}

const FormActions = ({ nextIsDisabled }: FormActionsProps) => {
  const back = useFormStore((state) => state.back);
  const next = useFormStore((state) => state.next);
  const currentStep = useFormStore((state) => state.currentStep);
  const form = useFormContext<FormSchema>();

  const isClearFormButton = currentStep === STEPS.projectType;

  return (
    <div className="flex w-full items-center justify-between">
      {isClearFormButton ? (
        <ClearFormButton />
      ) : (
        <Button
          variant={"ghost"}
          className="flex cursor-pointer items-center gap-2 text-sm"
          onClick={() => back(form.getValues("overview.type"))}
          type="button"
        >
          <ArrowLeft size={20} />
          Voltar
        </Button>
      )}

      {currentStep === MAX_STEP ? (
        <GenerateResultButton />
      ) : (
        <Button
          variant={"ghost"}
          className="flex cursor-pointer items-center gap-2 text-sm"
          onClick={() => next(form.getValues("overview.type"))}
          disabled={nextIsDisabled}
          type="button"
        >
          Continuar
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
};

export default FormActions;
