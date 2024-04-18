import { useState } from "react";
import ClassSelection from "../../../components/Teacher/Dashboard/ClassSelection";
import DasboardTeacher from "../../../components/Teacher/Dashboard/DashboardTeacher";
function Home() {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="mx-auto md:py-24 py-16 px-12 lg:px-8">
        {step == 0 && (
          <div>
            <ClassSelection onClick={() => setStep(step + 1)} />
          </div>
        )}
        {step == 1 && (
          <div>
            <DasboardTeacher />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
