import HomeworkStep1 from "../../../components/General/Homework/HomeworkStep1";
import HomeworkStep2 from "../../../components/General/Homework/HomeworkStep2";
import HomeworkStep3 from "../../../components/General/Homework/HomeworkStep3";
import { useState } from "react";

function Homework() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
        <p className="text-h-md my-4">Erstellen</p>
        <div className="my-4 flex">
          <div>
            <button
              type="button"
              className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-teacherPrimary
               `}
            >
              Aufgabe
            </button>
          </div>

          <div className="ml-2">
            <button
              type="button"
              className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-teacherSecondary
               `}
            >
              Dateiablage
            </button>
          </div>
        </div>

        <div className="w-full bg-teacherSecondary mt-2  rounded-main px-6 py-4">
          <div className={step == 0 ? "block" : "hidden"}>
            <HomeworkStep1 step={step} />
          </div>
          <div className={step == 1 ? "block" : "hidden"}>
            <HomeworkStep2 step={step} />
          </div>
          <div className={step == 2 ? "block" : "hidden"}>
            {step > 1 && <HomeworkStep3 step={step} />}
          </div>

          <div className="flex justify-between mt-12 pb-2">
            {step >= 1 && (
              <button
                type="button"
                className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-white`}
                onClick={() => setStep(step - 1)}
              >
                Zurück
              </button>
            )}
            {step == 0 && (
              <button
                type="button"
                className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-white`}
              >
                Abrechen
              </button>
            )}

            <div className="flex items-center">
              <p className="mr-2">Schritt {step + 1}/3</p>

              {step < 2 && (
                <button
                  type="button"
                  className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-white`}
                  onClick={() => setStep(step + 1)}
                >
                  Weiter
                </button>
              )}
              {step == 2 && (
                <button
                  type="button"
                  className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-white`}
                  onClick={() => setStep(step + 1)}
                >
                  Erstellen
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homework;
