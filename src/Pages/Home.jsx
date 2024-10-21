import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {

    return (
        <>
            <div className="partOne sm:flex mt-10">
                <div className="mainbox sm:w-3/5  mx-6 my-2 sm:mr-2">
                    <div className="box1 ml-5 text-xl">Construction Company</div>
                    <div className="heading1 sm:text-7xl text-5xl sm:ml-10">WHERE <span className="text-orange-600 sm:text-8xl text-6xl">DREAMS</span></div>
                    <div className="heading1 sm:text-7xl text-5xl sm:ml-10">COME <span className="text-orange-600 sm:text-8xl text-6xl">ALIVE</span></div>
                    <div className=' flex '>
                        <hr className='w-11/12 border-2 border-black' />
                    </div>
                </div>
                <div className="sideBar sm:w-2/5  sm:mx-6 mr-1 ml-4 my-2 sm:ml-0 mt-6 flex sm:block flex-nowrap  sm:mt-20">
                    <img src="https://i.ibb.co/t2198cQ/helmet-removebg-preview.png" alt="helmet-removebg-preview" border="0" className=" ml-2 mb-7"></img>
                    <div>
                        <div className=" heading1 sm:text-4xl text-xl  sm:ml-0">TRANSFORMING <span className="text-orange-600 sm:text-5xl text-2xl">VISIONS</span></div>
                        <br />
                        <div className=" heading1 sm:text-4xl text-xl ml-5 sm:ml-0">INTO <span className="text-orange-600 sm:text-5xl text-2xl">REALITY</span></div>
                    </div>
                </div>
            </div>
            <div className="partTwo sm:w-7/12 mx-10 sm:text-2xl text-xl">
                <span className="roboto-condensed sm:text-3xl text-2xl">DIMANSN</span> ARCHITECTS UNDERSTANDS THAT BEING AN ARCHITECT IS NOT CONFINED TO DESIGNING BUILDINGS; ARCHITECTURE IS ABOUT CREATING PLACES THAT ENHANCE, INSPIRE, AND SERVE THEIR PURPOSE. BACKED BY A DEVOTED TEAM SPEARHEADED BY ER. BHARGAV CHAUHAN, AN ARCHITECT AND PROJECT CONSULTANT REGISTERED WITH THE GOVERNMENT, WE ARE HERE TO HELP YOU EVERY STEP OF THE WAY, FROM THE CONCEPTION OF YOUR IDEAS TO THE CONSTRUCTION OF ALL YOUR DREAM PROJECTS.
            </div>
            <div className=' flex justify-center'>
                <hr className='w-10/12 border-1 border-black' />
            </div>
            <div className="partthree flex justify-center">
            </div>
            <div className="w-full sm:flex justify-center items-center my-8">
                <div className="sm:w-3/5">
                    <div className="partFourHeading flex justify-center items-center text-2xl sm:ml-3 font-mono sm:text-6xl">What Makes Us Stand Out?</div>
                    <div className="mx-4 mt-4 partFourHeading flex justify-center items-center text-sm sm:ml-3 font-mono">TO BE A PROMINENT ARCHITECTURAL PRACTICE THAT IS CLIENT-ORIENTED, INNOVATIVE, AND FOCUSED ON QUALITY. WE DREAM OF AN ARCHITECTURALLY INSPIRED WORLD THAT WILL BE PERFECTLY COORDINATED IN EVERY PLACE.</div>
                </div>
                <div className="partFour sm:w-2/5 flex justify-around sm:block">
                    <div className="FourBox w-1/3 sm:flex sm:w-full  sm:ml-3 mx-2">
                        <div>
                            <img src="https://i.ibb.co/kMC5gG2/png-transparent-customer-service-business-call-centre-customer-company-text-service-removebg-preview.png" alt=" customer" className="w-full sm:h-28" />
                        </div>
                        <div className="text-lg sm:text-3xl sm:ml-3">Customer-oriented</div>
                    </div>
                    <div className="FourBox w-1/3 sm:flex sm:w-full  sm:ml-8 mx-2">
                        <div>
                            <img src="https://i.ibb.co/q0RTzvK/png-transparent-quality-control-computer-icons-quality-assurance-quality-miscellaneous-service-logo.png" alt="quality" className="w-full sm:h-28" />
                        </div>
                        <div className="text-lg sm:text-3xl sm:ml-3">Quality and Integrity</div>
                    </div>
                    <div className="FourBox w-1/3 sm:flex sm:w-full sm:ml-11 mx-2">
                        <div>
                            <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full sm:h-28 " />
                        </div>
                        <div className="text-lg sm:text-3xl sm:ml-3">All Under One Roof</div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center'>
                <hr className='w-10/12 border-1 border-black' />
            </div>
            {/* <div>
                <div className="partFiveHeading">Our Services</div>
                <div className="partFive">
                    <div className="FiveBox">Govt. Approved Building Planning</div>
                    <div className="FiveBox">Site Management</div>
                    <div className="FiveBox">3D Elevation Design</div>
                    <div className="FiveBox">Interior designing</div>
                    <div className="FiveBox">Structural Engineering</div>
                    <div className="FiveBox">Project Management Services</div>
                </div>
            </div> */}
            <div className="w-full flex justify-center"><div className="mt-3 w-8/12 text-lg sm:text-xl font-bold">OUR AIM IS TO PROVIDE EVOLUTIONARY AND EVERLASTING ARCHITECTURAL SERVICES THAT ADD VALUE TO CLIENTS AND SOCIETY. WE AIM TO MAKE THE PROCESS OF DESIGNING AND BUILDING PLEASANT AND CONSTRUCTIVE.</div></div>
            <div className="w-full flex justify-center my-4">
                <Carousel className="w-1/2">
                    <div>
                        <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full" />
                        <p className="legend">Govt. Approved Building Planning</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full" />
                        <p className="legend">Site Management</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full" />
                        <p className="legend">3D Elevation Design</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full" />
                        <p className="legend">Interior designing</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full" />
                        <p className="legend">Structural Engineering</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/hHHG4Q5/png-transparent-computer-icons-symbol-mergers-and-acquisitions-business-acquisition-symbol-miscellan.png" alt="all at once" className="w-full" />
                        <p className="legend">Project Management Services</p>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Home
