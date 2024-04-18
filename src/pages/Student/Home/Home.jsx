import ManiDude from "../../../assets/images/Mani_Dude.svg?react";
import PalettSVG from "../../../assets/icons/palette.svg?react";
import BadgeMaskSVG from "../../../assets/badge/mask_badge.svg?react";
import MedalSVG from "../../../assets/badge/medal_badge.svg?react";
import RocketSVG from "../../../assets/badge/rocket_badge.svg?react";
import PlusSVG from "../../../assets/icons/plus.svg?react";
import CrownSVG from "../../../assets/icons/crown.svg?react";
import ArrowRightSVG from "../../../assets/icons/arrow-right.svg?react";

function Home() {
  return (
    <>
      <div className="bg-studentTertiary min-h-screen">
        <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
          <div className="grid gird-cols-1 md:grid-cols-2 gap-8 p-16">
            <div>
              <div className="bg-white rounded-student p-8">
                <div className="rounded-full bg-studentPrimary w-16 h-16 flex justify-center items-center">
                  <div className="p-8">
                    <PalettSVG className="w-10 h-10" />
                  </div>
                </div>
                <ManiDude className="w-full h-96" />
              </div>
              <div className="bg-white rounded-student p-8 mt-8">
                <p className="text-p-lg font-semibold">Abzeichen</p>
                <div className="grid grid-cols-6 mt-6 px-4">
                  <BadgeMaskSVG className={`w-20 h-20 mx-2`} />
                  <RocketSVG className={`w-20 h-20 mx-2`} />
                  <MedalSVG className={`w-22 h-22 -mt-1 mx-2`} />
                  <BadgeMaskSVG className={`w-20 h-20 mx-2`} />
                  <PlusSVG className={`w-20 h-20 mx-2`} />
                  <PlusSVG className={`w-20 h-20 mx-2`} />
                </div>
              </div>
            </div>

            <div className=" rounded-student space-y-8">
              <div className="">Hoi Mani</div>
              <div className="bg-white p-8  rounded-student flex items-center flex-col">
                <div className="flex">
                  <CrownSVG className={`w-14 h-14 mx-2`} />
                </div>
                <p>2 / 9 Hausaufgaben sind erledigt!</p>
                <a
                  className={`rounded-button mt-2 px-2 py-2 text-sm font-semibold h-fit shadow-sm text-white w-fit  bg-studentPrimary flex  `}
                >
                  <span>Zu den Hausaufgaben</span>
                  <ArrowRightSVG className={`w-6 h-6 ml-2`} />
                </a>
              </div>
              <div className="bg-white p-8  rounded-student divide-y-2 space-y-8">
                <p className="font-bold -mb-2">Mitteilungen</p>
                <p className="pt-8 px-4">
                  Am 20. März gehen wir wandern! Mitnehmen: gute Schuhe,
                  Wasserfeste Kleidung, Wasser und Znüni, Sonnenschutz.
                </p>
                <p className="pt-8 px-4">
                  Am 26. April gehen wir wandern! Mitnehmen: gute Schuhe,
                  Wasserfeste Kleidung, Wasser und Znüni, Sonnenschutz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
