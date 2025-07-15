import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useFormStore } from "@/store/useFormStore";

const ClearFormButton = () => {
  const reset = useFormStore((state) => state.reset);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex cursor-pointer items-center gap-2 text-sm"
          type="button"
        >
          <ArrowLeft size={20} />
          Recomeçar
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja realmente recomeçar?</AlertDialogTitle>

          <AlertDialogDescription>
            Todos os dados inseridos no formulário serão perdidos.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>

          <AlertDialogAction onClick={() => reset()}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearFormButton;
