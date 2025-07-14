import Home from "./components/home";
import ProjectTypeForm from "./components/project-type-form";
import { useFormStore } from "./store/form";

const App = () => {
  const currentStep = useFormStore((state) => state.currentStep);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      {currentStep === 0 && <Home />}

      {currentStep === 1 && <ProjectTypeForm />}
    </div>
  );
};

export default App;
