import CreateHomework from "../../../components/Teacher/Homework/CreateHomework";
import RegularHomework from "../../../components/Teacher/Homework/RegularHomework";
function Homework() {
  return (
    <>
      <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
        <div className="flex justify-between">
          <p className="text-h-xl my-4">Offene Hausaufgaben</p>
          <button
            type="button"
            className={`rounded-button  px-2 py-2 text-sm font-semibold h-fit shadow-sm text-white  bg-teacherDarkBlue  `}
          >
            Hausaufgabe erstellen
          </button>
        </div>
        <div className="w-full  bg-teacherSecondary rounded-main mt-8 ">
          <div className="p-8">
            <RegularHomework />
          </div>
        </div>
        {/* <CreateHomework /> */}
      </div>
    </>
  );
}

export default Homework;
