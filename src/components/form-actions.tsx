import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/useFormStore";
import { MAX_STEP, STEPS } from "@/store/slices/stepSlice";
import ClearFormButton from "./clear-form-button";
import GenerateResultButton from "./generate-result-button";

const FormActions = () => {
  const back = useFormStore((state) => state.back);
  const next = useFormStore((state) => state.next);
  const currentStep = useFormStore((state) => state.currentStep);

  const isClearFormButton = currentStep === STEPS.projectType;

  return (
    <div className="flex w-full items-center justify-between">
      {isClearFormButton ? (
        <ClearFormButton />
      ) : (
        <Button
          variant={"ghost"}
          className="flex cursor-pointer items-center gap-2 text-sm"
          onClick={() => back()}
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
          onClick={() => next()}
        >
          Continuar
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
};

export default FormActions;
