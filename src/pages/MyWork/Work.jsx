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
      image: "./web.webp",
      title: "Photography site",
      category: "Web Design",
    },
    {
      id: 4,
      image: "./uiUx.png",
      title: "UI/UX designing",
      category: "UI/UX Design",
    },
  ];

  return (
    <>
      <div className="min-h-screen transition-colors duration-300 ">

        {/* Heading */}
        <div className="text-center mt-[11%] px-4">
          <h1 className="font-bold text-4xl md:text-5xl">
            My Latest Work
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-gray-600 dark:text-gray-300">
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto mt-12">

          {data.map((item) => (
            <div
              key={item.id}
              className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>

              {/* Bottom card */}
              <div className="absolute bottom-4 left-4 right-4 
                bg-white/80 dark:bg-black/60 
                backdrop-blur-md rounded-xl p-4 
                flex items-center justify-between 
                shadow-md border border-gray-200 dark:border-gray-700
              ">

                <div>
                  <h2 className="font-bold text-lg">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.category}
                  </p>
                </div>

                {/* Button */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 hover:bg-blue-500 hover:text-white transition">
                  <BsSend />
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Work;