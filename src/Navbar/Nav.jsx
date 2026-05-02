import { Link } from 'react-router-dom'
import { CiDark, CiSun } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useState } from 'react';

function Nav() {

  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between px-6 md:px-10 py-4 shadow-md bg-white sticky top-0 z-50'>
    
        <h1 className='text-2xl font-bold text-blue-600'>Elina</h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 text-gray-700 font-medium'>
          <Link to="/home" className='hover:text-blue-500'>Home</Link>
          <Link to="/about" className='hover:text-blue-500'>About</Link>
          <Link to="/work" className='hover:text-blue-500'>MyWork</Link>
          <Link to="/service" className='hover:text-blue-500'>Service</Link>
          <Link to="/contact" className='hover:text-blue-500'>Contact</Link>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-4 md:gap-6'>

          {/* toogle menu with sun,dark */}
          {
            dark ? (
              <CiSun 
                className='text-2xl cursor-pointer' 
                onClick={() => setDark(false)} 
              />
            ) : (
              <CiDark 
                className='text-2xl cursor-pointer' 
                onClick={() => setDark(true)} 
              />
            )
          }

          <button className='hidden md:flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>
            Contact <BsSend />
          </button>

          {/* Hamburger */}
          <HiOutlineMenuAlt2 
            className='text-3xl md:hidden cursor-pointer'
            onClick={() => setOpen(true)}
          />

        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}>

        <div className='p-5 flex flex-col gap-6 text-gray-700 font-medium'>

          <button 
            className='text-right text-2xl'
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <Link onClick={() => setOpen(false)} to="/home">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/work">MyWork</Link>
          <Link onClick={() => setOpen(false)} to="/service">Service</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

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