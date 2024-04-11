import { CalendarIcon } from "@heroicons/react/24/outline";
import OverviewHomework from "./OverviewHomework";
import { useSelector } from "react-redux";

const HomeworkStep3 = ({ step }) => {
  const data = useSelector((state) => state.createHomework.value);
  console.log(data);

  return (
    <>
      <div className="mt-2">
        <p className="mb-2 font-medium">Fach</p>
        <p className="px-6 py-2 bg-white text-black w-fit rounded-main">
          {data.subject}
        </p>
      </div>
      <div className="mt-2">
        <p className="mb-2 font-medium">Title</p>
        <p className="px-6 py-2 bg-white text-black w-fit rounded-main">
          {data.title}
        </p>
      </div>
      <div className="mt-2">
        <p className="mb-2 font-medium">Frist</p>
        <div className="pl-4 pr-4 py-2 bg-white text-black w-fit rounded-main flex">
          <CalendarIcon className={"w-6 mr-2"} />
          {data.deadline}
        </div>
      </div>
      <div className="mt-8">
        <OverviewHomework step={step} questions={data.questions} />
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
