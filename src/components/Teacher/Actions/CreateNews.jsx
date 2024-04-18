import ButtonArrow from "./ButtonArrow";
import NewspaperSVG from "../../../assets/icons/newspaper.svg?react";

function CreateNews() {
  return (
    <>
      <div className="bg-teacherTertiary rounded-teacher flex justify-between items-center min-h-14">
        <div className="flex items-center ">
          <NewspaperSVG className="w-6 h-6 ml-4" />
          <p className="text-h-md ml-4">
            Benachrichtigung für Klasse erstellen
          </p>
        </div>
        <div className="mr-4">
          <ButtonArrow />
        </div>
      </div>
    </>
  );
}

export default CreateNews;
