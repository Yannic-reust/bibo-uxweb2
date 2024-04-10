import React, { useState } from "react";
import Question from "./Question";
import { setHomeworkPart2 } from "../../../store/createHomework/createHomeworkState";
import { useDispatch } from "react-redux";

const HomeworkStep2 = ({ step }) => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([
    { title: 1, email: "", imageName: "", answer: "" },
    { title: 2, email: "", imageName: "", answer: "" },
  ]);

  const addQuestion = () => {
    const newQuestion = {
      title: questions.length + 1,
      email: "",
      imageName: "",
      answer: "",
    };
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const handleEmailChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].email = value;
    setQuestions(updatedQuestions);
  };

  const handleImageNameChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].imageName = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = value;
    setQuestions(updatedQuestions);
  };

  if (step === 2) {
    dispatch(setHomeworkPart2(questions));
  }

  return (
    <>
      {questions.map((question, index) => (
        <div key={index}>
          <Question
            title={question.title}
            emailValue={question.email}
            imageName={question.imageName}
            answer={question.answer}
            onEmailChange={(value) => handleEmailChange(index, value)}
            onImageNameChange={(value) => handleImageNameChange(index, value)}
            onAnswerChange={(value) => handleAnswerChange(index, value)}
          />
        </div>
      ))}

      <div className="mt-4">
        <button
          type="button"
          className={`rounded-md  px-4 py-2 text-sm font-semibold  shadow-sm bg-gray/80 text-white`}
          onClick={() => addQuestion()}
        >
          weitere Frage erstellen
        </button>
      </div>
    </>
  );
};

export default HomeworkStep2;
