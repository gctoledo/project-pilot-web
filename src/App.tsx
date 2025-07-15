import BackendForm from "./components/backend-form";
import DescriptionForm from "./components/description-form";
import FrontendForm from "./components/frontend-form";
import Home from "./components/home";
import ProjectLevelForm from "./components/project-level-form";
import ProjectTypeForm from "./components/project-type-form";
import Review from "./components/review";
import { STEPS } from "./store/slices/stepSlice";
import { useFormStore } from "./store/useFormStore";

const App = () => {
  const currentStep = useFormStore((state) => state.currentStep);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {currentStep === STEPS.initial && <Home />}

        {currentStep === STEPS.projectType && <ProjectTypeForm />}

        {currentStep === STEPS.level && <ProjectLevelForm />}

        {currentStep === STEPS.frontend && <FrontendForm />}

        {currentStep === STEPS.backend && <BackendForm />}

        {currentStep === STEPS.description && <DescriptionForm />}

        {currentStep === STEPS.review && <Review />}
      </div>
    </div>
  );
};

export default App;
