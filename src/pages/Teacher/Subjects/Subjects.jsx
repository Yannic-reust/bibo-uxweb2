import { CalendarIcon } from "@heroicons/react/24/outline";

function Subjects() {
  return (
    <>
      <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
        <p
          className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm w-min  bg-teacherPrimary`}
        >
          Mathematik
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div>
              <div className="flex">
                <CalendarIcon className={"w-6 mr-2"} />
                <p>Dateinen</p>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
            <div className="w-full bg-teacherSecondary mt-6 rounded-main p-6">
              <button
                type="button"
                className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm  bg-teacherPrimary
               `}
              >
                Aufgabe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subjects;
