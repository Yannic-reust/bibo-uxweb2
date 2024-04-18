import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import Class from "../../../assets/images/class.png";

import BiboSmallSVG from "../../../assets/images/bibo_small.svg?react";
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

const SideNav = ({}) => {
  return (
    <div className="bg-white w-32 h-screen relative">
      <div className="flex w-full justify-center mt-8">
        <BiboSmallSVG className="w-16 h-16" />
      </div>
      <div>nav</div>
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
