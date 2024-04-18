import BiboSmallSVG from "../../../assets/images/bibo_small.svg?react";

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

const routes = [
  { name: "Home", route: "/student" },
  { name: "Agenda", route: "/student/agenda" },
  { name: "Fächer", route: "/student/subjects" },
];

const SideNav = ({}) => {
  return (
    <div className="bg-white w-32 h-screen relative flex flex-col justify-between">
      <div className="flex w-full justify-center mt-8">
        <BiboSmallSVG className="w-16 h-16" />
      </div>
      <div className="space-y-2">
        {routes.map((item, index) => (
          <div key={index} className={` w-36 h-20     `}>
            <a
              href={item.route}
              className={`w-full h-full flex items-center p-4 rounded-r-[22px] ${
                currentRoute == item.route
                  ? "justify-end w-40 bg-studentPrimary"
                  : "justify-start w-36 bg-studentSecondary"
              }`}
            >
              <p className="text-white h-fit text-p-sm font-semibold">
                {item.name}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div>
        <div
          className={`bg-studentPrimary w-36 h-20 rounded-r-[22px] flex items-center p-4 ${
            currentRoute == "/student/absence"
              ? "justify-end w-40 bg-studentPrimary"
              : "justify-start w-36 bg-studentSecondary"
          } `}
        >
          <p className="text-white h-fit text-p-sm font-semibold">Absenzen</p>
        </div>
      </div>
      <div></div>
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
