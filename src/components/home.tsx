import { useFormStore } from "@/store/useFormStore";
import { Button } from "./ui/button";

const Home = () => {
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);

  return (
    <div className="w-full max-w-2xl text-center">
      <h1 className="mb-3 text-3xl font-bold">Project Pilot</h1>

      <p className="text-sm">
        Quer iniciar um novo projeto mas não tem ideia do que fazer? Deixe com a
        gente.
      </p>

      <p className="text-sm">
        Gaste menos tempo criando ideias e escopos de projetos e use esse tempo
        codando.
      </p>

      <Button className="mt-5" onClick={() => setCurrentStep(1)}>
        Começar
      </Button>
    </div>
  );
};

export default Home;
