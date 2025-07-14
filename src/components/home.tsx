import { useFormStore } from "@/store/useFormStore";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { STEPS } from "@/store/slices/stepSlice";

const Home = () => {
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl text-center"
    >
      <h1 className="mb-3 text-3xl font-bold">
        <span className="text-primary">P</span>roject{" "}
        <span className="text-primary">P</span>ilot
      </h1>

      <p className="text-sm">
        Quer iniciar um novo projeto mas não tem ideia do que fazer? Deixe com a
        gente.
      </p>

      <p className="text-sm">
        Gaste menos tempo criando ideias e escopos de projetos e use esse tempo
        codando.
      </p>

      <Button
        className="mt-5 font-bold"
        onClick={() => setCurrentStep(STEPS.projectType)}
      >
        Começar
      </Button>
    </motion.div>
  );
};

export default Home;
