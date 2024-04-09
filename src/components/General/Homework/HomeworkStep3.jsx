import { CalendarIcon } from "@heroicons/react/24/outline";
import OverviewHomework from "./OverviewHomework";

const HomeworkStep3 = ({}) => {
  return (
    <>
      <div className="mt-2">
        <p className="mb-2 font-medium">Fach</p>
        <p className="px-6 py-2 bg-white text-black w-fit rounded-md">
          Mathematik
        </p>
      </div>
      <div className="mt-2">
        <p className="mb-2 font-medium">Title</p>
        <p className="px-6 py-2 bg-white text-black w-fit rounded-md">
          Knifflige Mathematik
        </p>
      </div>
      <div className="mt-2">
        <p className="mb-2 font-medium">Frist</p>
        <div className="pl-4 pr-4 py-2 bg-white text-black w-fit rounded-md flex">
          <CalendarIcon className={"w-6 mr-2"} />
          02.03.2024
        </div>
      </div>
      <div className="mt-8">
        <OverviewHomework />
      </div>
    </>
  );
};

/*ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default HomeworkStep3;
