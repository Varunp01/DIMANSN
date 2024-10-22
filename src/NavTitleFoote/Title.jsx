import { Outlet, Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Title() {

  return (
    <>
      <div className="title md:hidden text-black bg-slate-100 px-3 py-2">
        <div className="flex w-full">
          <div className="navContact w-1/2 flex items-center justify-around righteous-regular text-3xl">
            <Link to="/">DIMANSN</Link>
          </div>
          <div className="navContact w-1/2 flex items-center justify-around text-xl ">
            <div className="bg-orange-500 hover:bg-orange-600 px-2 py-2 rounded-xl cursor-pointer">
              <Link to="/contact">CONTACT US</Link>
            </div>
          </div>
        </div>
        <div className="navContact flex items-center justify-around text-md">
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer"><Link to="/">HOME</Link></div>
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer"><Link to="/about">ABOUT US</Link></div>
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer"><Link to="/services">SERVICES</Link></div>
        </div>
      </div>
      
      <div className="title  hidden md:flex text-black h-20 px-3 py-2 bg-[#d4d4d4b2]">
        <div className="navContact md:w-1/5 flex items-center justify-around text-3xl righteous-regular">
        <Link to="/">DIMANSN</Link>
        </div>
        <div className="navContact md:w-3/5 flex items-center justify-center text-lg">
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><Link to="/">HOME</Link></div>
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><Link to="/about">ABOUT US</Link></div>
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><Link to="/services">SERVICES</Link></div>
        </div>
        <div className="navContact md:w-1/5 flex items-center justify-around text-xl">
          <div className="bg-orange-400 hover:bg-orange-600 px-2 py-2 rounded-xl cursor-pointer"><Link to="/contact">CONTACT US</Link></div>
        </div>
      </div>
    </>
  )
}

export default Title