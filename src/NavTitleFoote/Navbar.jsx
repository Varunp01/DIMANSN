import { FaGlobe } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Navbar() {

  return (
    <>
        <div className="navbar md:flex text-black bg-slate-100 text-xl px-3 py-2">
          <div className="navContact md:w-1/2 flex items-center justify-around lg:justify-normal">
            <div className="navContactPhone lg:px-2 flex items-center"><MdOutlineWifiCalling3 className="mr-1"/>+91 xxxxxxxxxx</div>
            <div className="navContactPhone lg:px-2 flex items-center">||</div>
            <div className="navContactWebsite lg:px-2 flex items-center"><FaGlobe  className="mr-2"/>www.xxx.com</div>
          </div>
          <div className="navSocial md:w-1/2 flex flex-row-reverse  justify-center md:justify-normal items-center">
          <FaFacebook className="mx-8 md:mx-3"/><FaTwitter className="mx-8 md:mx-3"/><FaLinkedin className="mx-8 md:mx-3"/>
          </div>
        </div>
    </>
  )
}

export default Navbar
