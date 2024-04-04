import { HomeIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const NAV_ICON_CLASSES = "w-9 h-12 text-white";

const SideNav = ({}) => {
  return (
    <div className="bg-gray w-28 h-screen relative">
      <div className="p-2 flex flex-col items ">
        <div className=" p-2 flex justify-center flex-col items-center">
          <div className="bg-white/80 rounded-full h-16 w-16" />
          <p className="mt-1 text-white">2024 5A</p>
        </div>
        <div className="bg-white/20 w-full  rounded-md flex-col items-center flex mt-4">
          <HomeIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Home</p>
        </div>
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <PencilSquareIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Aufgaben</p>
        </div>
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <FolderIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Fächer</p>
        </div>
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <UserGroupIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Klassenliste</p>
        </div>
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <PlusCircleIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Erstellen</p>
        </div>
      </div>
      <div className="absolute bottom-2 w-28">
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <EnvelopeIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Nachrichten</p>
        </div>
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <UserIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-white">Erstellen</p>
        </div>
      </div>
    </div>
  );
};
/*
ContentAccordion.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
  open: PropTypes.bool,
};*/

export default SideNav;
