import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/useFormStore";
import { MAX_STEP } from "@/store/slices/stepSlice";

interface FormActionsProps {
  onBack?: () => void;
  onNext?: () => void;
}

const FormActions = ({ onBack, onNext }: FormActionsProps) => {
  const back = useFormStore((state) => state.back);
  const next = useFormStore((state) => state.next);
  const currentStep = useFormStore((state) => state.currentStep);

  return (
    <div className="flex w-full items-center justify-between">
      <Button
        variant={"ghost"}
        className="flex cursor-pointer items-center gap-2 text-sm"
        onClick={onBack || back}
        type="button"
      >
        <ArrowLeft size={20} />
        Voltar
      </Button>

      {currentStep === MAX_STEP ? (
        <Button
          variant={"ghost"}
          className="flex cursor-pointer items-center gap-2 text-sm"
          type="submit"
        >
          Gerar sugestão
          <ArrowRight size={20} />
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          className="flex cursor-pointer items-center gap-2 text-sm"
          onClick={onNext || next}
          type="submit"
          disabled={currentStep === MAX_STEP}
        >
          Continuar
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
};

export default FormActions;
