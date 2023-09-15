import { LazyLoadImage } from "react-lazy-load-image-component";
import IMDB from "../assets/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import tomato from "../assets/icons/PngItem_1381056 1.svg";
import Play from "../assets/icons/Play.svg";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[1rem] md:pt-[2rem] lg:pt-[93px] grid md:grid-cols-2 lg:grid-cols-3 text-white">
        <div className="grid gap-[16px]">
          <h1 className="font-bold leading-[30px] text-[24px] md:leading-[56px] md:text-[48px]">
            John Wick 3: Parabellum
          </h1>
          <div className="flex gap-[34px] items-center">
            <div className="flex items-center gap-[10px]">
              <LazyLoadImage src={IMDB} alt="imdb" width={35} height={17} />
              <p className="text-[12px] leading-[12px] text-white font-normal">
                860/100
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <LazyLoadImage src={tomato} alt="rate" width={16} height={17} />
              <p className="text-[12px] leading-[12px] text-white font-normal">
                97%
              </p>
            </div>
          </div>
          <p className="font-medium leading-[18px] text-[14px] text-white md:pr-[102px]">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="px-[16px] py-[6px] rounded-[6px] bg-[#BE123C] flex items-center w-[70%] md:w-[47%]">
            <LazyLoadImage src={Play} width={20} height={20} />
            <span className="ml-[8px]">WATCH TRAILER</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
