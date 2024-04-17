import { HomeIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const url = window.location.href;

function cutURL(url) {
  var startIndex = url.indexOf("/", 7); // Find the first occurrence of '/' after 'http://'
  if (startIndex !== -1) {
    return url.substring(startIndex); // Return the substring starting from the first '/'
  } else {
    return url; // If '/' is not found, return the original URL
  }
}

const currentRoute = cutURL(url);

const NAV_ICON_CLASSES = "w-14 h-14 ";

const navItems = [
  {
    name: "Home",
    route: "/teacher",
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
    <div className="bg-white shadow-main w-32 h-screen relative">
      <div className="p-2 flex flex-col items ">
        <div className=" p-2 flex justify-center flex-col items-center pb-8">
          <div className="bg-black/20 rounded-full h-16 w-16" />
          <p className="mt-1 text-black text-p-sm">2024 5A</p>
        </div>
        {navItems.map((item, index) => (
          <a
            href={item.route}
            key={index}
            className={`${
              item.route === currentRoute
                ? "bg-teacherPrimary !text-white"
                : "text-black"
            }  m-1 rounded-main `}
          >
            <div
              className={
                "w-full  flex-col justify-center items-center flex  aspect-square "
              }
            >
              {item.icon}
              <p className="text-center  ">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="absolute bottom-20 w-full ">
        <div className="w-full  rounded-main flex-col items-center flex mt-4">
          <EnvelopeIcon className={NAV_ICON_CLASSES} />
          <p className="text-center text-p-sm ">Nachrichten</p>
        </div>
        <div className="w-full  rounded-main flex-col items-center flex mt-6">
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
