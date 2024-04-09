const Button = ({ text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="rounded-md bg-gray/60 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
