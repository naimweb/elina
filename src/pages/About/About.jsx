import { RiCodeSSlashLine } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";


function About() {
  
  return (
    <>
    <div className="mt-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className=" tracking-[4px] uppercase text-sm">
          Introduction
        </h3>
        <h1 className="font-black text-4xl md:text-5xl font-mono mt-2">
          About Me
        </h1>
      </div>

      {/* Main Section */}
      <div className="w-[90%] md:w-[75%] mx-auto flex flex-col md:flex-row gap-14 items-center">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="./user.png"
              alt="user"
              className="w-72 md:w-[400px] rounded-2xl shadow-2xl object-cover hover:scale-105 transition duration-500"
              />
            <div className="absolute -bottom-4.5 -right-6 shadow-lg px-4 py-2 rounded-full text-xs font-bold">
               $Dev 
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 font-mono space-y-6">

          {/* Description */}
          <p className=" leading-relaxed text-base md:text-lg">
            I am an experienced fullStack Developer with over a decade of professional expertise in the field.
            Throughout my career, I have collaborated with prestigious organizations, contributing to their success and growth.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="p-5 rounded-2xl border hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <RiCodeSSlashLine size={24} />
              <h2 className="font-bold mt-3">Languages</h2>
              <p className="text-sm t mt-1">HTML, CSS, JS, React</p>
            </div>

            <div className="p-5 rounded-2xl border  hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <IoLogoFigma size={24} />
              <h2 className="font-bold mt-3">Education</h2>
              <p className="text-sm mt-1">Computer Science</p>
            </div>

            <div className="border rounded-2xl p-5  transition duration-300 hover:-translate-y-4 hover:shadow-6xl hover:border-r-amber-400">
              <BiLogoMongodb size={24} />
              <h2 className="font-bold mt-3">Projects</h2>
              <p className="text-sm  mt-1">5+ Built Projects</p>
            </div>

          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm  mb-3">Tools I Use</h3>

            <div className="flex flex-wrap gap-4">

              <div className="border p-3 rounded-xl hover:scale-110 transition cursor-pointer shadow-sm">
                <RiCodeSSlashLine size={22} />
              </div>

              <div className="border p-3 rounded-xl hover:scale-110 transition cursor-pointer shadow-sm">
                <IoLogoFigma size={22} />
              </div>

              <div className="border p-3 rounded-xl hover:scale-75 transition cursor-pointer shadow-sm">
                <BiLogoMongodb size={22} />
              </div>

              <div className="border p-3 rounded-xl hover:scale-110 transition cursor-pointer shadow-sm">
                <FaGitAlt size={22} />
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </div>
     {/* footer  */}

  
  </>
  )
}

export default About