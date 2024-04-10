import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

const OverviewHomework = ({ step, questions }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <div className="pl-4 pr-4 py-2 bg-gray/40 w-full text-black rounded-md ">
        <div className="flex" onClick={() => toggleOpen(!open)}>
          <ChevronRightIcon className={`w-6 mr-2 ${open ? "rotate-90" : ""}`} />
          <PencilSquareIcon className={"w-6 mr-2"} />
          <p className="font-bold text-h-sm">Alle Fragen</p>
        </div>

        {open && (
          <div className="mt-6 text-black">
            {questions.map((item, index) => (
              <div key={index} className="mt-4">
                <p className="text-h-sm mt-2 ">{item.question}</p>
                <p className="text-p-lg ">{item.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default OverviewHomework;
