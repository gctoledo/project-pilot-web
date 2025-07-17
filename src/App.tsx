import BackendForm from "./components/backend-form";
import DescriptionForm from "./components/description-form";
import FrontendForm from "./components/frontend-form";
import Home from "./components/home";
import ProjectLevelForm from "./components/project-level-form";
import ProjectTypeForm from "./components/project-type-form";
import Review from "./components/review";
import { STEPS } from "./store/slices/stepSlice";
import { useFormStore } from "./store/useFormStore";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema, type FormSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BackendTechnologies,
  DatabaseTechnologies,
} from "@/types/backend_technologies";
import { FrontendTechnologies } from "@/types/frontend_technologies";
import { ProjectLevel, ProjectType } from "@/types/project_overview";

const App = () => {
  const currentStep = useFormStore((state) => state.currentStep);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      backend: {
        technology: BackendTechnologies.express_js,
        extra_technologies: [],
        database: DatabaseTechnologies.none,
        tests: false,
      },
      frontend: {
        technology: FrontendTechnologies.html_css_js,
        typescript: false,
        extra_technologies: [],
        tests: false,
      },
      overview: {
        type: ProjectType.frontend,
        level: ProjectLevel.junior,
        description: "",
      },
    },
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg">
          {currentStep === STEPS.initial && <Home />}

          <form onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === STEPS.projectType && <ProjectTypeForm />}

            {currentStep === STEPS.level && <ProjectLevelForm />}

            {currentStep === STEPS.frontend && <FrontendForm />}

            {currentStep === STEPS.backend && <BackendForm />}

            {currentStep === STEPS.description && <DescriptionForm />}

            {currentStep === STEPS.review && <Review />}
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
