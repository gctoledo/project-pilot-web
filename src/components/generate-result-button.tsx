import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/useFormStore";

const GenerateResultButton = () => {
  const frontend = useFormStore((state) => state.frontend);
  const type = useFormStore((state) => state.type);

  const handleGenerateResult = () => {
    console.log({
      type,
      frontend,
    });
  };

  return (
    <Button
      variant={"ghost"}
      className="flex cursor-pointer items-center gap-2 text-sm"
      onClick={handleGenerateResult}
    >
      Gerar resultado
      <ArrowRight size={20} />
    </Button>
  );
};

export default GenerateResultButton;
