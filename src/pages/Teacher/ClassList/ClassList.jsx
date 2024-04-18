import Student from "../../../components/Teacher/ClassListe/Student";
import SearchSVG from "../../../assets/icons/search.svg?react";

function ClassList() {
  return (
    <>
      <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
        <div className="flex justify-between">
          <p className="text-h-xl my-4">Klassenliste 5A Emmenbrücke</p>
        </div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchSVG className="w-4 h-4" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-1/2 p-1 ps-8 text-sm  border-2 border-black rounded-lg "
              placeholder="Suchen"
              required
            />
          </div>
        </form>
        <div className="w-full  bg-teacherSecondary rounded-main mt-8 ">
          <div className="p-8">
            <div className="mb-4">
              <Student />
            </div>
            <div className="mb-4">
              <Student />
            </div>
            <div className="mb-4">
              <Student />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassList;
