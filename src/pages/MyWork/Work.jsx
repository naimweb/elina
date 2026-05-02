import { BsSend } from "react-icons/bs";
function Work() {
   const data = [
    {
      id: 1,
      image: "./frontend.png",
      title: "Frontend project",
      category: "Web Design",
    },
    {
      id: 2,
      image: "./app.png",
      title: "Geo based app",
      category: "Mobile App",
    },
    {
      id: 3,
      image: "./web.webp  ",
      title: "Photography site",
      category: "Web Design",
    },
    {
      id: 4,
      image: "./img4.jpg",
      title: "UI/UX designing",
      category: "UI/UX Design",
    },
  ];
  return (
       <>
          <div>
              <div className="text-center">
                 <p>My portfolio</p>
                 <h1 className="font-bold text-5xl mt-5">My latest work</h1>
                 <p className="w-[35%] font-mono mt-6 mx-auto">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
              </div>
             
             {/* .... */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto mt-10">

        {data.map((item) => (
          <div 
            key={item.id}
            className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition duration-300"
          >

            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Bottom card */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-xl p-4 flex items-center justify-between shadow-lg">

              <div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>

              {/* Arrow button */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition">
                <BsSend />
              </div>

            </div>

          </div>
        ))}

      </div>
          </div>
       </>
  )
}

export default Work