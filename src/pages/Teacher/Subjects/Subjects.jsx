import Folder from "../../../components/Teacher/Subjects/Folder";

function Subjects() {
  const subjects = [
    "Math",
    "M + U",
    "Englisch",
    "Deutsch",
    "BG",
    "Sport",
    "Musik",
  ];

  return (
    <>
      <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
        <div className="flex justify-between">
          <p className="text-h-xl my-4">Fächer</p>
          <button
            type="button"
            className={`rounded-button  px-2 py-2 text-sm  h-fit shadow-sm text-white  bg-teacherDarkBlue  `}
          >
            Fach hinzufügen
          </button>
        </div>
        <div className="w-full  bg-teacherSecondary rounded-student mt-8 p-8">
          <div className="p-8 rounded-teacher bg-teacherTertiary grid grid-cols-5">
            {subjects.map((item, index) => (
              <div className="p-4" key={index}>
                <Folder name={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Subjects;
