import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const GenerateResultButton = () => {
  return (
    <Button
      variant={"ghost"}
      className="flex cursor-pointer items-center gap-2 text-sm"
      type="submit"
    >
      Gerar resultado
      <ArrowRight size={20} />
    </Button>
  );
};

export default GenerateResultButton;
