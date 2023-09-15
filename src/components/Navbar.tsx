import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiSearch } from "react-icons/bi";
import {Link} from 'react-router-dom';


import Logo from '../assets/images/tv.png';
import Menu from '../assets/icons/Menu alt 4.svg';
import { useGlobalContext } from '../store/globalContext';

const Navbar = () => {
    const {handleChange} = useGlobalContext()

    return (
        <div className="flex justify-between items-center">
            <Link to='/' className="flex gap-[24px] items-center">
                <LazyLoadImage src={Logo} alt='logo' width={50} height={50} />
                <h1 className="text-white leading-[24px] text-[24px] font-bold hidden md:block">MovieBox</h1>
            </Link>
            <div className="hidden lg:flex border-[2px] border-[#D1D5DB] rounded-[6px] py-[6px] px-[10px] justify-between items-center w-[525px]">
                <input type="search" placeholder="What do you want to watch?" className="bg-transparent border-none outline-none w-[80%] text-white" onChange={(e)=>handleChange(e.currentTarget.value)} />
                <BiSearch color='white' />
            </div>
            <nav className="flex items-center gap-[27px]">
                <Link to='/' className="font-bold leading-[24px] text-[16px] text-white">Sign up</Link>
                <div className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#BE123C] cursor-pointer">
                    <LazyLoadImage src={Menu} alt="menu" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
