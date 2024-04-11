import ButtonArrow from "./ButtonArrow";

function NewMessage() {
  const BOX_CLASSES = "bg-teacherSecondary p-4 rounded-main";
  const NAV_ICON_CLASSES = "w-14 h-14 ";

  return (
    <>
      <div className="bg-teacherTertiary rounded-main flex items-center justify-between min-h-14">
        <div className="flex">
          <img
            src="/assets/icons/mail-warning.svg"
            alt="icon"
            className="w-6 h-6 ml-4"
          />
          <p className="text-h-md ml-4">
            <span className="mr-2">Du hast</span>
            <span className="text-teacherAccent">1 ungelesene Nachricht</span>
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
