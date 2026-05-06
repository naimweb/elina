import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Naim</h1>
          <p className="text-sm text-gray-400">
            Building modern and user-friendly web applications.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
              <FaGithub />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-white font-semibold mb-2">Quick Links</h2>
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Projects</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-2">Subscribe</h2>
          <p className="text-sm text-gray-400 mb-3">
            Get updates and news directly in your inbox.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="bg-green-500 px-4 rounded-r-md hover:bg-green-600 transition">
              Go
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} 
        <span className="text-green-400 dark:text-orange-500"> Naim</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;