import RegularHomework from "../../../components/Teacher/Homework/RegularHomework";
import SearchSVG from "../../../assets/icons/search.svg?react";

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
            <div className="mt-4">
              <RegularHomework />
            </div>
            <div className="mt-4">
              <RegularHomework />
            </div>
            <div className="mt-4">
              <RegularHomework />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-8">
            <p className="text-h-lg my-4">Abgeschlossene Hausaufgaben</p>
          </div>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchSVG className="w-4 h-4" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-1/3 p-1 ps-8 text-sm  border-2 border-black rounded-lg "
                placeholder="Suchen"
                required
              />
            </div>
          </form>

          <div className="w-full  bg-teacherSecondary rounded-main mt-4 ">
            <div className="p-8">
              <p className="text-center text-white text-p-lg">
                Keine abgeschlossene Hausaufgaben
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homework;
