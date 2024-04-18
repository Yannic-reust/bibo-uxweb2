import ButtonArrow from "./ButtonArrow";
import MailWarningSVG from "../../../assets/icons/mail-warning.svg?react";

function NewMessage() {
  return (
    <>
      <div className="bg-teacherTertiary rounded-main flex items-center justify-between min-h-14">
        <div className="flex">
          <MailWarningSVG className="w-6 h-6 ml-4" />
          <p className="text-h-md ml-4">
            <span className="mr-2">Du hast</span>
            <span className="text-teacherAccent">
              1 ungelesene Absenzmeldung
            </span>
          </p>
        </div>

        <div className="mr-4">
          <ButtonArrow />
        </div>
      </div>
    </>
  );
}

export default NewMessage;
