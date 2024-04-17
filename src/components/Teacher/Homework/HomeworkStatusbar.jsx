import React, { useState } from "react";

function HomeworkStatusbar({ status, icon, text }) {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <p>{text}</p>
      <div className="flex">
        {icon}
        <div className="overflow-hidden w-4/6 h-2 rounded-full bg-teacherPrimary">
          <div
            className="h-2 rounded-full bg-black"
            style={{ width: status }}
          />
        </div>
      </div>
    </>
  );
}

export default HomeworkStatusbar;
