"use client"
import React, { useState } from 'react'
import { SiTwitter, SiFacebook, SiLinkedin, SiInstagram } from "react-icons/si";
import { FaBars, FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickResult = () => {
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-red-600 flex py-4 justify-between fixed top-0 z-10 w-full shadow-2xl flex-row-reverse md:flex-row lg:flex-row'>
      <div className=''>
        <img 
          src="/images/logo-w.png" 
          className='w-[15rem] pl-10 hover:cursor-pointer pr-5' 
          alt="" 
          onClick={clickResult} 
        />
      </div>
      <div className='flex gap-10 items-center'>
        <div className={`flex-col lg:flex-row md:flex-row ${isMenuOpen ? 'flex' : 'hidden'} lg:flex md:flex gap-10 items-center`}>
          <a href="/about" className='hover:text-black text-white'>About US</a>
          <a href="/games" className='hover:text-black text-white'>Our Games</a>
          <a href="/team" className='hover:text-black text-white'>Our Team</a>
        </div>
        <div className='flex w-64 gap-6 items-center'>
          <a href="/" className='hidden lg:block md:block'><SiTwitter /></a>
          <a href="/" className='hidden lg:block md:block'><SiFacebook /></a>
          <a href="/" className='hidden lg:block md:block'><SiLinkedin /></a>
          <a href="/" className='hidden lg:block md:block'><SiInstagram /></a>
          <button onClick={toggleMenu} className='block lg:hidden md:hidden pl-10'>
            {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
