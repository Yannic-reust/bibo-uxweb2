import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import Class from "../../../assets/images/class.png";

import HomeSVG from "../../../assets/icons/home.svg?react";
import FileEditSVG from "../../../assets/icons/file-edit.svg?react";
import FolderClosedSVG from "../../../assets/icons/folder-closed.svg?react";
import Users2SVG from "../../../assets/icons/users-2.svg?react";

const url = window.location.href;

function cutURL(url) {
  var startIndex = url.indexOf("/", 7);
  if (startIndex !== -1) {
    return url.substring(startIndex);
  } else {
    return url;
  }
}

const currentRoute = cutURL(url);

const NAV_ICON_CLASSES = "size-14  ";

const navItems = [
  {
    name: "Home",
    route: "/teacher",
    icon: <HomeSVG className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Aufgaben",
    route: "/teacher/homework",
    icon: <FileEditSVG className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Fächer",
    route: "/teacher/subjects",
    icon: <FolderClosedSVG className={NAV_ICON_CLASSES} />,
  },
  {
    name: "Klassenliste",
    route: "/teacher/classList",
    icon: <Users2SVG className={NAV_ICON_CLASSES} />,
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
          <div className="h-16 w-16 bg-teacherPrimary rounded-full relative">
            <img src={Class} className="w-full opacity-80" />
            <div className="bg-teacherPrimary w-full z-10 aspect-square absolute top-0 left-0 opacity-50 rounded-full" />
          </div>
          <p className="mt-1 text-black text-p-sm">2024 5A</p>
        </div>
        {navItems.map((item, index) => (
          <a
            href={item.route}
            key={index}
            className={`${
              item.route === currentRoute
                ? "bg-teacherPrimary !text-white !stroke-white"
                : "text-black stroke-black"
            }  m-1 rounded-main `}
          >
            <div
              className={
                "w-full  flex-col justify-center items-center flex  aspect-square "
              }
            >
              <div
                className={`${
                  item.route === currentRoute ? "stroke-white" : "stroke-black"
                }  flex items-center w-14`}
              >
                {item.icon}
              </div>

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
