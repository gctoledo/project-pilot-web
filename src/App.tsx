import FrontendForm from "./components/frontend-form";
import Home from "./components/home";
import ProjectTypeForm from "./components/project-type-form";
import Review from "./components/review";
import { STEPS } from "./store/slices/stepSlice";
import { useFormStore } from "./store/useFormStore";

const App = () => {
  const currentStep = useFormStore((state) => state.currentStep);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      {currentStep === STEPS.initial && <Home />}

      {currentStep === STEPS.projectType && <ProjectTypeForm />}

      {currentStep === STEPS.frontend && <FrontendForm />}

      {currentStep === STEPS.review && <Review />}
    </div>
  );
};

export default App;
