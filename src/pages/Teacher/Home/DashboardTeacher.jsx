import CompactHomework from "../../../components/Teacher/Homework/CompactHomework";

function DashboardTeacher() {
  const BOX_CLASSES = "bg-teacherSecondary p-4 rounded-main";
  const NAV_ICON_CLASSES = "w-14 h-14 ";
  return (
    <>
      <div className="mx-auto md:py-24 py-16 px-12 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className={`${BOX_CLASSES} col-span-7 `}>
            <p className="text-h-md">Offene Aufgaben</p>
            <CompactHomework />
          </div>
          <div className={`${BOX_CLASSES} col-span-5 `}>
            <p className="text-h-md">Aktionen</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTeacher;
