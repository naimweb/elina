import { Link, NavLink } from 'react-router-dom'
import { CiDark, CiSun } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from 'react';

function Nav() {

  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 border-b-2 border-blue-500 pb-1 font-semibold"
      : "hover:text-blue-500 transition";

  return (
    <>
      {/* Navbar */}
      <nav className='flex items-center justify-between px-6 md:px-10 py-4 shadow-md sticky top-0 z-50 bg-white dark:bg-[#0D0D0D]'>

        {/* Logo */}
        <Link to="/" className='text-2xl font-bold text-blue-600'>
          ✨Elina
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 text-gray-700 dark:text-white font-medium'>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>

          <NavLink to="/work" className={navStyle}>
            MyWork
          </NavLink>

          <NavLink to="/service" className={navStyle}>
            Service
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>

        </div>

        {/* Right Side */}
        <div className='flex items-center gap-4 md:gap-6'>

          {/* Theme Toggle */}
          {
            dark ? (
              <CiSun
                className='text-2xl cursor-pointer text-white'
                onClick={() => setDark(false)}
              />
            ) : (
              <CiDark
                className='text-2xl cursor-pointer'
                onClick={() => setDark(true)}
              />
            )
          }

          {/* Contact Button */}
          <Link
            to="/contact"
            className='hidden md:flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'
          >
            Contact <BsSend />
          </Link>

          {/* Mobile Menu Icon */}
          <HiOutlineMenuAlt2
            className='text-3xl md:hidden cursor-pointer dark:text-white'
            onClick={() => setOpen(true)}
          />

        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className='p-5 flex flex-col gap-6 text-gray-700 dark:text-white font-medium'>

          {/* Close Button */}
          <button
            className='text-right text-2xl'
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Nav Links */}
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500"
            }
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/work"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500"
            }
          >
            MyWork
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500"
            }
          >
            Service
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500"
            }
          >
            Contact
          </NavLink>

        </div>
      </div>

      {/* Overlay */}
      {
        open && (
          <div
            className='fixed inset-0 bg-black/40 z-40'
            onClick={() => setOpen(false)}
          />
        )
      }
    </>
  )
}

export default Nav