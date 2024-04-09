import Button from "../../General/Button";
import Dropdown from "../../General/Dropdown";

const HomeworkStep1 = ({}) => {
  return (
    <>
      <div className="mt-4">
        <p>Aus Archiv auswählen</p>
        <Button text={"Auswählen"} />
      </div>

      <div className="mt-4">
        <p>Fach</p>
        <Dropdown />
      </div>

      <div className="mt-4">
        <p>Title</p>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      <div className="mt-4">
        <p>Frist</p>
        <Dropdown />
      </div>
    </>
  );
};

/*ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default HomeworkStep1;
