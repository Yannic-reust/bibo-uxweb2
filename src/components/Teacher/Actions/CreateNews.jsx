import ButtonArrow from "./ButtonArrow";

function CreateNews() {
  const BOX_CLASSES = "bg-teacherSecondary p-4 rounded-main";
  const NAV_ICON_CLASSES = "w-14 h-14 ";

  return (
    <>
      <div className="bg-teacherTertiary rounded-main flex justify-between items-center min-h-14">
        <div className="flex items-center ">
          <img
            src="/assets/icons/newspaper.svg"
            alt="icon"
            className="w-6 h-6 ml-4"
          />
          <p className="text-h-md ml-4">News erstellen</p>
        </div>
        <div className="mr-4">
          <ButtonArrow />
        </div>
      </div>
    </>
  );
}

export default CreateNews;
