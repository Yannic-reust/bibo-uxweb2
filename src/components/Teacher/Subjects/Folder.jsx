function Folder({ name }) {
  return (
    <>
      <div className="flex items-center p-6 flex-col">
        <img
          src="/assets/icons/folder_big.svg"
          alt="icon"
          className="w-full "
        />
        <p className="text-center text-p-lg font-semibold mt-2">{name}</p>
      </div>
    </>
  );
}

export default Folder;
