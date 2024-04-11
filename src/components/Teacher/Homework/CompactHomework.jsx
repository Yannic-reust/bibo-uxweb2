function CompactHomework() {
  const BOX_CLASSES = "bg-teacherSecondary p-4 rounded-main";
  const NAV_ICON_CLASSES = "w-14 h-14 ";
  return (
    <>
      <div className="bg-teacherTertiary p-4 rounded-main ">
        <div className="flex justify-between">
          <div>
            <p className="text-h-sm">Multiplikation Kapitel 4 - Textaufgaben</p>
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
        <div className="flex justify-between mt-6">
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
          <div>
            <button
              type="button"
              className="rounded-button bg-teacherAccent px-4 py-2 text-p-sm  text-white shadow-sm "
            >
              Öffnen
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompactHomework;
