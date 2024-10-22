import { Outlet, Link } from "react-router-dom";
import { IoLinkSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
function Footer() {

  return (
    <>
      <div className="contactBackground flex justify-center w-full items-center lg:text-2xl mx-3 px-3 bg-black">
        <div className="w-full">
          <div className="text-white">Do you want to realize your dream? CALL US today for an appointment, and let's plan everything outstanding together!</div>
          <div className="flex justify-center items-center mx-auto my-6 w-52 sm:w-80 bg-orange-400 hover:bg-orange-600 px-2 py-2 rounded-xl cursor-pointer"><Link to="/contact">CONTACT US</Link></div>
        </div>
      </div>
      <div className="footer w-full flex justify-around items-center flex-wrap sm:flex-nowrap">
        <div className="footerAbout px-3 py-3 sm:w-1/3 w-full">
          <div className="footerLogo flex items-center justify-center righteous-regular text-3xl">
            <Link to="/">DIMANSN</Link>
          </div>
          <div className="footerpara flex items-center justify-center font-roboto text-md">
            Our aim is to make the design and building processes seamless. Our approach is collaborative: We
            consult with our clients and encourage sharing and communicating ideas to better appreciate and
            realize them.
          </div>
        </div>
        <div className="footerLinks px-3 py-3 sm:w-1/3 w-1/2">
          <div className="footerLogo flex items-center justify-center righteous-regular text-xl">
            <IoLinkSharp />
            LINKS
          </div>
          <div className="footerpara flex items-center justify-center font-roboto text-md">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/services">SERVICES</Link></li>
            </ul>
          </div>
        </div>
        <div className="footerLocation px-3 py-3 sm:w-1/3 w-1/2">
          <div className="footerLogo flex items-center justify-center righteous-regular text-xl">
            <IoLocationSharp />
            LOCATION
          </div>
          <div className="footerpara flex items-center justify-center font-roboto text-md">
            Shaitan gali, khatra mahal, andher nagar, shamshan ke samne
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Footer
