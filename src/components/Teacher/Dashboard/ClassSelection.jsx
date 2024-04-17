function ClassSelection({ onClick }) {
  return (
    <>
      <div className="mx-auto md:py-24 py-16 px-12 lg:px-8">
        <div className="flex items-center flex-col">
          <div className="h-36 w-36 bg-teacherPrimary rounded-full" />
          <button
            type="button"
            onClick={onClick}
            className={`rounded-button bg-teacherPrimary w-fit mt-4   px-4 py-2 text-sm font-semibold  shadow-sm bg-gray/80 text-white`}
          >
            Klasse 2024 5A
          </button>
        </div>
        <div className="flex items-center flex-col mt-24">
          <div className="h-36 w-36 bg-teacherPrimary rounded-full" />
          <button
            type="button"
            onClick={onClick}
            className={`rounded-button bg-teacherPrimary w-fit mt-4   px-4 py-2 text-sm font-semibold  shadow-sm bg-gray/80 text-white`}
          >
            Klasse 2024 5B
          </button>
        </div>
      </div>
    </>
  );
}

export default ClassSelection;
