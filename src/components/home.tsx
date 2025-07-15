import { useFormStore } from "@/store/useFormStore";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { STEPS } from "@/store/slices/stepSlice";
import Logo from "./logo";

const Home = () => {
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl text-center"
    >
      <span className="text-primary text-[2em] font-bold">
        &#123; <Logo /> &#125;
      </span>

      <p className="mt-2 text-sm">
        Quer iniciar um{" "}
        <span className="text-primary font-bold">novo projeto</span> mas não tem
        ideia do que fazer?
      </p>

      <p className="text-sm">
        Gaste menos tempo pensando em ideias e use esse tempo codando.
      </p>

      <p className="text-primary mt-1 font-bold">
        O resto nós cuidamos pra você! 🚀
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
