import Question from "./Question";
import { useState } from "react";

const HomeworkStep2 = ({}) => {
  const [questions, setQuestions] = useState([
    <Question title={1} />,
    <Question title={2} />,
  ]);

  const addQuestion = () => {
    const newQuestion = <Question title={questions.length + 1} />;
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  return (
    <>
      {questions.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      <div className="mt-4">
        <button
          type="button"
          className={`rounded-md  px-4 py-2 text-sm font-semibold  shadow-sm bg-gray/80 text-white`}
          onClick={() => addQuestion()}
        >
          weiter Fragen erstellen
        </button>
      </div>
    </>
  );
};

/*ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default HomeworkStep2;
