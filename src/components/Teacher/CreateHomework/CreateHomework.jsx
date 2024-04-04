import Button from "../../General/Button";
import Dropdown from "../../General/Dropdown";

const CreateHomework = ({}) => {
  return (
    <>
      <div className="container mx-auto md:py-12 py-6 px-8 lg:px-4">
        <p className="text-h-md">Erstellen</p>
        <div className="mt-2 flex">
          <div>
            <Button text={"Button Text"} />
          </div>

          <div className="ml-2">
            <Button text={"Button Text"} />
          </div>
        </div>
        <div className="w-full bg-gray/60 mt-2 rounded-md px-4 py-2">
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

          <div className="flex justify-between mt-12 pb-2">
            <Button text="Abbrechen" />
            <div className="flex items-center">
              <p className="mr-2">Schritt 1/3</p>
              <Button text="Weiter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
/*
ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default CreateHomework;
