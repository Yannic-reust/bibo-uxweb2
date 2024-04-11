// HomeworkStep1.js
import React, { useState } from "react";
import Button from "../../General/Button";
import Dropdown from "../../General/Dropdown";
import { useDispatch } from "react-redux";
import { setHomeworkPart1 } from "../../../store/createHomework/createHomeworkState";

const HomeworkStep1 = ({ step }) => {
  const [formData, setFormData] = useState({
    subject: "",
    title: "",
    taskType: "",
    deadline: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveData = () => {
    dispatch(setHomeworkPart1(formData));
  };

  if (step === 1) {
    saveData();
  }

  return (
    <>
      <div className="mt-2">
        <p className="mb-2 font-medium">Aus Archiv auswählen</p>
        <Button text={"Auswählen"} />
      </div>

      <div className="flex">
        <div className="mt-6 mr-0 md:mr-6">
          <p className="mb-2 font-medium">Fach</p>
          <Dropdown
            items={["Math", "Deutsch", "Englisch", "Sport"]}
            title={"Auswählen"}
            onChange={handleChange}
            name="subject"
          />
        </div>
        <div className="mt-6 ">
          <p className="mb-2 font-medium">Aufgaben Type</p>
          <Dropdown
            items={["MC", "Text"]}
            title={"Auswählen"}
            onChange={handleChange}
            name="taskType"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 font-medium">Title</p>
        <input
          type="text"
          name="title"
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Super Coole Aufgabe"
          onChange={handleChange}
        />
      </div>
      <div className="mt-6">
        <p className="mb-2 font-medium">Frist</p>
        <Dropdown
          title={"Datum"}
          items={["11.04", "12.04", "13.04", "14.04"]}
          onChange={handleChange}
          name="deadline"
        />
      </div>
    </>
  );
};

export default HomeworkStep1;
