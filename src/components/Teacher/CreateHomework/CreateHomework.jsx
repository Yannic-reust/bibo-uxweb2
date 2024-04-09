import Button from "../../General/Button";
import HomeworkStep1 from "../../General/Homework/HomeworkStep1";
import HomeworkStep2 from "../../General/Homework/HomeworkStep2";
import { useState } from "react";

const CreateHomework = ({}) => {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="container mx-auto md:py-12 py-6 px-8 lg:px-4">
        <p className="text-h-md my-4">Erstellen</p>
        <div className="mt-2 flex">
          <div>
            <Button text={"Button Text"} theme="dark" />
          </div>

          <div className="ml-2">
            <Button text={"Button Text"} theme="dark" />
          </div>
        </div>

        <div className="w-full bg-gray/60 mt-2 rounded-md px-4 py-2">
          {step == 0 && <HomeworkStep1 />}
          {step == 1 && <HomeworkStep2 />}
          <div className="flex justify-between mt-12 pb-2">
            {step >= 1 && (
              <Button text="Zurück" onClick={() => setStep(step - 1)} />
            )}
            {step == 0 && <Button text="Abbrechen" />}

            <div className="flex items-center">
              <p className="mr-2">Schritt {step + 1}/3</p>
              <Button
                text="Weiter"
                onClick={() => setStep(step + 1)}
                theme={"dark"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default CreateHomework;
