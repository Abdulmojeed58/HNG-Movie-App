import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { GrClose } from "react-icons/gr";

import Logo from "../assets/images/tv.png";

const Sidebar = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: any;
}) => {
  return (
    <div
      className={`${
        isActive ? "active" : "notActive"
      } border border-[#0000004D] h-screen py-[52px] fixed top-0 left-0 bottom-0 lg:static flex flex-col justify-between rounded-tr-[45px] rounded-br-[45px] bg-white z-30`}
    >
      <div className="flex justify-between items-center px-[24px]">
        <Link to="/" className="flex gap-[24px] items-center justify-center">
          <LazyLoadImage src={Logo} alt="logo" width={50} height={50} />
          <h1 className="text-black leading-[24px] text-[24px] font-bold hidden md:block">
            MovieBox
          </h1>
        </Link>
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsActive((prev: boolean) => !prev)}
        >
          <GrClose className="text-[1.5rem]" />
        </button>
      </div>
      <div className="grid gap-[1rem]">
        <Link to="/" className="link">
          <GoHome />
          <span>Home</span>
        </Link>
        <Link
          to=""
          className="link bg-[#BE123C1A] border-r-[3px] border-[#BE123C]"
        >
          <BiCameraMovie />
          <span>Movie</span>
        </Link>
        <Link to="" className="link">
          <MdOndemandVideo />
          <span>Tv Series</span>
        </Link>
        <Link to="" className="link">
          <HiOutlineCalendar />
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[75%] border grid gap-[9px] border-[#BE123CB2] bg-[#F8E7EB66] rounded-[20px] p-[17px] pt-[42px]">
          <p className="text-[15px] font-semibold text-[#333333CC]">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[12px] font-medium text-[#666666]">
            50k people are playing now
          </p>
          <button className="text-[#BE123C] font-medium text-[12px] w-[112px] h-[30] bg-[#BE123C33] rounded-[30px] py-[6px] px-[17px] mx-auto">
            Start playing
          </button>
        </div>
      </div>
      <Link to="/" className="link text-[#666666]">
        <TbLogout />
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;
