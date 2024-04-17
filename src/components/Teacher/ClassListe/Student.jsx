function Student() {
  return (
    <>
      <div className="bg-teacherTertiary w-full rounded-main flex justify-between py-6 px-8">
        <div className="">
          <p className="text-h-md">Manni Fred, 11</p>
          <button
            type="button"
            className={`rounded-button mt-2 px-2 py-2 text-sm font-semibold h-fit shadow-sm text-white  bg-teacherDarkBlue  `}
          >
            Übersicht
          </button>
        </div>
        <div className="text-right text-h-md">
          <p>Lindenweg 6, 6020 Emmenbrücke</p>
          <p>Tel +41 41 901 23 45</p>
        </div>
      </div>
    </>
  );
}

export default Student;
