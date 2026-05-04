import { LuMoveRight } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import About from '../About/About'
import Work from '../MyWork/Work'
import Service from '../Service/Service'
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

function Home() {

    
  return (
    <>
    <div className="w-full mt-6 px-4">

      {/* Image */}
      <div className="w-32 sm:w-40 mx-auto">
        <img src="./profile-img.png" alt="" className="w-full" />
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-center text-xl sm:text-2xl mt-4">
          Hi! I'm Eliana Jade 👋
        </h1>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mx-auto font-mono text-center mt-4 w-full sm:w-[90%] md:w-[70%]">
          fullStack web developer based in London.
        </h1>

        <p className="w-full sm:w-[90%] md:w-[60%] mx-auto mt-6 font-mono text-sm sm:text-base text-center text-gray-600">
          I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8">

        {/* Contact button */}
        <div className="flex items-center border px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white cursor-pointer hover:scale-105 transition">
          <Link to = "/contact">Contact me</Link>
          <LuMoveRight className="ml-2" />
        </div>

        {/* Resume button */}
        <div className="flex items-center border px-6 py-3 sm:py-4 rounded-full gap-2 text-[15px] sm:text-[17px] cursor-pointer hover:scale-105 transition">
          <h3>My Resume</h3>
          <MdOutlineFileDownload />
        </div>

      </div>

    </div>

    {/* pages link */}
        <About />
      <Work />
      <Service />
      <Contact />
    
   </>
  )
}

export default Home