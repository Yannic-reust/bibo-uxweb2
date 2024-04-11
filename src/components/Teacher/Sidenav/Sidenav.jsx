import { HomeIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const NAV_ICON_CLASSES = "w-11 h-11 ";

const currentRoute = "/teacher/dashboard";

const navItems = [
  {
    name: "Home",
    route: "/teacher/dashboard",
    icon: <HomeIcon className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Aufgaben",
    route: "/teacher/homework",
    icon: <PencilSquareIcon className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Fächer",
    route: "/teacher/subjects",
    icon: <FolderIcon className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Klassenliste",
    route: "/teacher/classList",
    icon: <UserGroupIcon className={NAV_ICON_CLASSES} />,
  },
];

const bottomNavItems = [
  {
    name: "Nachrichten",
    route: "/teacher/messages",
    icon: <EnvelopeIcon className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Account",
    route: "/teacher/account",
    icon: <UserIcon className={NAV_ICON_CLASSES} />,
  },
];

const SideNav = ({}) => {
  return (
    <div className="bg-white shadow-main w-28 h-screen relative">
      <div className="p-2 flex flex-col items ">
        <div className=" p-2 flex justify-center flex-col items-center pb-8">
          <div className="bg-black/20 rounded-full h-16 w-16" />
          <p className="mt-1 text-black text-p-sm">2024 5A</p>
        </div>
        {navItems.map((item, index) => (
          <a href={item.route} key={index}>
            <div
              className={`${
                item.route === currentRoute
                  ? "bg-teacherPrimary !text-white"
                  : "text-black"
              } m-1  rounded-lg flex-col justify-center items-center flex  aspect-square`}
            >
              {item.icon}
              <p className="text-center  ">{item.name}</p>
            </div>
          </a>
        ))}

        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <PlusCircleIcon
            className={`${NAV_ICON_CLASSES} text-teacherAccent`}
          />
          <p className="text-center text-teacherAccent ">Erstellen</p>
        </div>
      </div>
      <div className="absolute bottom-2 w-28">
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <EnvelopeIcon className={NAV_ICON_CLASSES} />
          <p className="text-center text-p-sm ">Nachrichten</p>
        </div>
        <div className="w-full  rounded-md flex-col items-center flex mt-4">
          <UserIcon className={NAV_ICON_CLASSES} />
          <p className="text-center  text-p-sm">Account</p>
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
