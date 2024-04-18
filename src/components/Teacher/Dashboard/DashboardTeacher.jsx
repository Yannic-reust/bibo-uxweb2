import CreateNews from "../../../components/Teacher/Actions/CreateNews";
import NewMessage from "../../../components/Teacher/Actions/NewMessage";
import CompactHomework from "../../../components/Teacher/Homework/CompactHomework";
import Folder from "../../../components/Teacher/Subjects/Folder";
import CalenderSVG from "../../../assets/icons/calendar.svg?react";
import ChevronRightSVG from "../../../assets/icons/chevron-right.svg?react";

function DashboardTeacher() {
  const BOX_CLASSES = "bg-teacherSecondary p-4 rounded-main";
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className={`${BOX_CLASSES} col-span-7 `}>
          <p className="text-h-md">Offene Aufgaben</p>
          <div className="mt-6">
            <CompactHomework />
          </div>
          <div className="mt-6">
            <CompactHomework />
          </div>
          <div className="mt-6">
            <CompactHomework />
          </div>
          <div className="mt-6">
            <CompactHomework />
          </div>
        </div>
        <div className="col-span-5">
          <div className={`${BOX_CLASSES} col-span-5 `}>
            <p className="text-h-md">Aktionen</p>
            <div className="mt-6">
              <NewMessage />
            </div>
            <div className="mt-4">
              <CreateNews />
            </div>
          </div>
          <div className={`${BOX_CLASSES} col-span-5 mt-6`}>
            <div className="flex justify-between">
              <p className="text-h-md">Meist Benutze Fächer</p>
              <button
                type="button"
                className="rounded-button bg-teacherAccent px-4 py-2 text-p-sm  text-white font-normal "
              >
                Alle Fächer
              </button>
            </div>
            <div className=" bg-teacherTertiary p-2 mt-4 rounded-main">
              <div className="grid grid-cols-3 ">
                <Folder name="Mathematik" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="w-full bg-teacherSecondary p-4 rounded-main">
            <div className="flex">
              <ChevronRightSVG className="w-6 h-6 ml-2" />
              <CalenderSVG className="w-6 h-6 ml-4" />
              <p className="text-h-md ml-2">Kalender</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTeacher;
