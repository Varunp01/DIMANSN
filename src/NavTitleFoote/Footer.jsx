import { IoLinkSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
function Footer() {

  return (
    <>
      <div className="contactBackground flex justify-center w-full bg-black">
        <div className="text-white">Do you want to realize your dream? Call us today for an appointment, and let's plan everything outstanding together!</div>
      </div>
      <div className="footer w-full flex justify-around items-center flex-wrap sm:flex-nowrap">
        <div className="footerAbout px-3 py-3 sm:w-1/3 w-full">
          <div className="footerLogo flex items-center justify-center righteous-regular text-3xl">
            DIMANSN
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
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
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
    </>
  )
}

export default Footer
