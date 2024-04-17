import React, { useState } from "react";
import HomeworkStatusbar from "./HomeworkStatusbar";
import HomeworkDuration from "./HomeworkDuration";

function RegularHomework() {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <div className="bg-teacherTertiary p-4 rounded-main ">
        <div className="flex">
          <div className="pr-4" onClick={() => toggleOpen(!open)}>
            <img
              src="/assets/icons/chevron-right.svg"
              alt="icon"
              className={`w-8 h-8 ${open ? "rotate-90" : ""}`}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between ">
              <div>
                <p className="text-h-sm">
                  Multiplikation Kapitel 4 - Textaufgaben
                </p>
                <p className="text-p-md">Mathematik</p>
              </div>
              <div className="flex">
                <p className="text-p-sm font-semibold mt-1">24.04.2024</p>
                <img
                  src="/assets/icons/calendar.svg"
                  alt="icon"
                  className="w-5 h-5 ml-2"
                />
              </div>
            </div>
            {open && (
              <>
                <div className="grid grid-cols-3 mt-12 mb-8">
                  <div>
                    <HomeworkStatusbar
                      title={"Aufgaben"}
                      text={"13/20 Abgegeben"}
                      status={"50%"}
                      icon={
                        <img
                          src="/assets/icons/user-check.svg"
                          alt="icon"
                          className={`w-5 h-5 `}
                        />
                      }
                    />
                  </div>
                  <div>
                    <HomeworkStatusbar
                      title={"Fehlerquote"}
                      text={"80%"}
                      status={"80%"}
                      icon={
                        <img
                          src="/assets/icons/frown.svg"
                          alt="icon"
                          className={`w-5 h-5 `}
                        />
                      }
                    />
                  </div>
                  <div>
                    <HomeworkDuration
                      title={"Bearbeitungszeit"}
                      text={"40min"}
                      icon={
                        <img
                          src="/assets/icons/calendar-clock.svg"
                          alt="icon"
                          className={`w-5 h-5 `}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className={`rounded-button  px-4 py-2 text-sm h-fit shadow-sm text-white  bg-teacherDarkBlue  `}
                  >
                    Öffnen
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RegularHomework;
