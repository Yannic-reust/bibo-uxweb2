import Button from "../../General/Button";
import Dropdown from "../../General/Dropdown";
import { CameraIcon } from "@heroicons/react/24/outline";

const HomeworkStep2 = ({}) => {
  return (
    <>
      <div className="mt-4">
        <p>Frage 1</p>
        <Button text={"Auswählen"} />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex">
        <div className="w-6 h-6 bg-white">
          <CameraIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <button
          type="button"
          className={`rounded-md  px-4 py-2 text-sm font-semibold  shadow-sm bg-gray/80 text-white`}
        >
          weiter Fragen erstellen
        </button>
      </div>
    </>
  );
};

/*ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default HomeworkStep2;
