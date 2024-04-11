function ButtonArrow() {
  const BOX_CLASSES = "bg-teacherSecondary p-4 rounded-main";
  const NAV_ICON_CLASSES = "w-14 h-14 ";

  return (
    <>
      <div className="bg-teacherAccent rounded-full flex items-center justify-center h-8 w-8">
        <img
          src="/assets/icons/arrow-right.svg"
          alt="icon"
          className="w-5 h-5 text-white"
        />
      </div>
    </>
  );
}

export default ButtonArrow;
