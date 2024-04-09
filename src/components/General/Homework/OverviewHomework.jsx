import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OverviewHomework = ({}) => {
  return (
    <>
      <div className="pl-4 pr-4 py-2 bg-gray/60 w-full text-black rounded-md flex">
        <ChevronRightIcon className={"w-4 mr-2"} />
        <PencilSquareIcon className={"w-6 mr-2"} />
        <p className="font-bold">Alle Fragen</p>
      </div>
    </>
  );
};

/*ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default OverviewHomework;
