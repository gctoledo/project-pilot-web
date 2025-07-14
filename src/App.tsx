import { useState } from "react";
import Home from "./components/home";
import FirstStep from "./components/first-step";

export type FormValues = {
  type?: "frontend" | "backend" | "fullstack";
};

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<FormValues>({});

  const MIN_STEP = 0;
  const MAX_STEP = 3;

  const next = (newData: Partial<FormValues>) => {
    setData((data) => ({ ...data, ...newData }));

    setCurrentStep((prev) => Math.min(prev + 1, MAX_STEP));
  };

  const back = () => setCurrentStep((prev) => Math.max(prev - 1, MIN_STEP));

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      {currentStep === 0 && <Home setCurrentStep={setCurrentStep} />}

      {currentStep === 1 && <FirstStep onNext={next} defaultValues={data} />}
    </div>
  );
};

export default App;
