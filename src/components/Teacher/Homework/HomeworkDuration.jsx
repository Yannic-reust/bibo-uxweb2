import React, { useState } from "react";

function HomeworkDuration({ icon, title, text }) {
  return (
    <>
      <p>{title}</p>
      <div className="flex mt-2">
        {icon}

        <p className="ml-1">⌀ {text}</p>
      </div>
    </>
  );
}

export default HomeworkDuration;
