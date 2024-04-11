const Button = ({ text, onClick, theme }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm   ${
          theme == "primary"
            ? "bg-teacherPrimary text-white"
            : "bg-teacherSecondary text-black"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
