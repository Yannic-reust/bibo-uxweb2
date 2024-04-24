function HomeworkStatusbar({ status, icon, title, text }) {
  return (
    <>
      <p>{title}</p>
      <div className="flex mt-2">
        {icon}

        <div className="ml-2  w-4/6">
          <div className="overflow-hidden mt-1.5 w-full h-2 rounded-full bg-teacherPrimary">
            <div
              className="h-2 rounded-full bg-black"
              style={{ width: status }}
            />
          </div>
          <p className="mt-2 text-p-sm">{text}</p>
        </div>
      </div>
    </>
  );
}

export default HomeworkStatusbar;
