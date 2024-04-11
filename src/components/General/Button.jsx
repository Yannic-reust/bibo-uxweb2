const Button = ({ text, onClick, theme }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`rounded-button  px-4 py-2 text-sm font-semibold  shadow-sm   ${
          theme == "dark" ? "bg-gray/80 text-white" : "bg-white text-black"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
