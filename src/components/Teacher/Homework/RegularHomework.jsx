import React, { useState } from "react";
import HomeworkStatusbar from "./HomeworkStatusbar";

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
                <div className="grid grid-cols-3 mt-12 mb-12">
                  <div>
                    <HomeworkStatusbar
                      text={"Aufgaben"}
                      status={"50%"}
                      icon={
                        <img
                          src="/assets/icons/chevron-right.svg"
                          alt="icon"
                          className={`w-4 h-4 `}
                        />
                      }
                    />
                  </div>
                  <div>
                    <p>Aufgaben</p>
                    <div className="flex">
                      <img
                        src="/assets/icons/chevron-right.svg"
                        alt="icon"
                        className={`w-4 h-4 `}
                      />
                      <div
                        className="h-2 rounded-full bg-black"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p>Aufgaben</p>
                    <div className="flex">
                      <img
                        src="/assets/icons/chevron-right.svg"
                        alt="icon"
                        className={`w-4 h-4 `}
                      />
                      <div
                        className="h-2 rounded-full bg-black"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className={`rounded-button  px-2 py-2 text-sm font-semibold h-fit shadow-sm text-white  bg-teacherDarkBlue  `}
                >
                  Öffnen
                </button>
              </>
            )}
          </div>

          {/* <div className="flex justify-between mt-6">
          <div className="flex w-full">
            <img
              src="/assets/icons/file-check.svg"
              alt="icon"
              className="w-7 h-7 mr-2"
            />
            <div className="w-1/4">
              <div className="overflow-hidden  rounded-full bg-teacherPrimary">
                <div
                  className="h-2 rounded-full bg-black"
                  style={{ width: "50%" }}
                />
              </div>
              <p>10/20</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default RegularHomework;
