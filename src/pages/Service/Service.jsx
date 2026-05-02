import { SiVorondesign } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { SiTuxedocomputers } from "react-icons/si";
import { SiCairographics } from "react-icons/si";
function Service() {

   const data = [
     {
       id:1,
       icon:<SiVorondesign />,
       title :"web design",
       description:"Web development is the process of building, programming...",
       more:"Read more"
     },
     {
       id:2,
       icon:<IoLogoAndroid />,
       title :"web design",
       description:"Web development is the process of building, programming...",
       more:"Read more"
     },
     {
       id:3,
       icon:<SiTuxedocomputers /> ,
       title :"web design",
       description:"Web development is the process of building, programming...",
       more:"Read more"
     },
     {
       id:4,
       icon:<SiCairographics />,
       title :"web design",
       description:"Web development is the process of building, programming...",
       more:"Read more"
     },
   ]
  return (
     <>
        <div className="text-center mt-[10%] mb-9">
            <p>What i offer</p>
            <h1 className="font-bold text-5xl mt-4">My services</h1>
            <p className="mt-4 w-[52%] mx-auto">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        </div>
        
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] md:w-[80%] mx-auto mt-10">


      {data.map((arr) => {
        console.log(arr.title)

    return (
      <div
      key={arr.id}
      className="group relative p-6 rounded-2xl bg-white border hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden"
>

  {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition"></div>

    {/* Icon */}
    <div className="text-3xl text-blue-500 mb-4">
      {arr.icon}
    </div>

    {/* Title */}
    <h2 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition">
      {arr.title}
    </h2>

    {/* Description */}
    <p className="text-sm text-gray-600 leading-relaxed">
      {arr.description}
    </p>

    {/* Button */}
    <div className="mt-5 flex items-center gap-2 text-blue-500 text-sm font-medium group-hover:gap-3 transition-all">
      {arr.more}
      <span>→</span>
    </div>

  </div>
    )
  })}

</div>
     </>
  )
}

export default Service