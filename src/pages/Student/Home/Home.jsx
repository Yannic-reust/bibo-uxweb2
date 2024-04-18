import ManiDude from "../../../assets/images/Mani_Dude.svg?react";
import PalettSVG from "../../../assets/icons/palette.svg?react";

function Home() {
  return (
    <>
      <div className="bg-studentTertiary min-h-screen">
        <div className=" mx-auto md:py-12 py-6 px-12 lg:px-8">
          <div className="grid gird-cols-1 md:grid-cols-2 gap-8 p-16">
            <div className="bg-white rounded-student p-8">
              <div className="rounded-full bg-studentPrimary w-16 h-16 flex justify-center items-center">
                <div className="p-8">
                  <PalettSVG className="w-10 h-10" />
                </div>
              </div>
              <ManiDude className="w-full h-96" />
            </div>
            <div className="bg-white rounded-student space-y-8">
              <div className="bg-black rounded-student">asd 2</div>
              <div className="bg-black  rounded-student">asd 3</div>
              <div className="bg-black  rounded-student">asd 4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
