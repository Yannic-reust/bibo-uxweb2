import Button from "../../General/Button";
import Dropdown from "../../General/Dropdown";
import { useDispatch } from "react-redux";
const HomeworkStep1 = (save) => {
  console.log(save);

  const dispatch = useDispatch();

  const saveData = () => {
    dispatch(toggleVolume());
  };

  return (
    <>
      <div className="mt-2">
        <p className="mb-2 font-medium">Aus Archiv auswählen</p>
        <Button text={"Auswählen"} />
      </div>

      <div className="flex">
        <div className="mt-6 mr-0 md:mr-6">
          <p className="mb-2 font-medium">Fach</p>
          <Dropdown
            items={["Math", "Deutsch", "Englisch", "Sport"]}
            title={"Auswählen"}
          />
        </div>
        <div className="mt-6 ">
          <p className="mb-2 font-medium">Aufgaben Type</p>
          <Dropdown items={["MC", "Text"]} title={"Auswählen"} />
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 font-medium">Title</p>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Super Coole Aufgabe"
        />
      </div>
      <div className="mt-6">
        <p className="mb-2 font-medium">Frist</p>
        <Dropdown
          title={"Datum"}
          items={["11.04", "12.04", "13.04", "14.04"]}
        />
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
