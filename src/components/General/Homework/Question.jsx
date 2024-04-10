import React, { useState } from "react";
import Button from "../../General/Button";
import Dropdown from "../../General/Dropdown";
import { CameraIcon } from "@heroicons/react/24/outline";

const Question = ({
  title,
  onEmailChange,
  onImageNameChange,
  onAnswerChange,
}) => {
  const [emailValue, setEmailValue] = useState("");
  const [imageName, setImageName] = useState("");
  const [answer, setAnswer] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    onEmailChange(e.target.value);
  };

  const handleImageNameChange = (e) => {
    setImageName(e.target.value);
    onImageNameChange(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    onAnswerChange(e.target.value);
  };

  return (
    <>
      <div className="mt-4">
        <p className="mb-2 font-medium">Frage {title}</p>
      </div>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          value={emailValue}
          onChange={handleEmailChange}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex mt-2">
        <div className="w-8 h-9 bg-white flex justify-center items-center  mr-2 rounded-md">
          <CameraIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="image"
          id="image"
          value={imageName}
          onChange={handleImageNameChange}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="image.png"
          disabled
        />
      </div>
      <div className="mt-4">
        <p className="mb-2 font-medium">Antwort</p>
        <div className="mt-2">
          <input
            type="text"
            name="answer"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};

export default Question;
