"use client"
import React from 'react'
import { SiTwitter,SiFacebook,SiLinkedin,SiInstagram } from "react-icons/si";
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
  const clickResult = () => {
      window.location.href = "/"
  }
  return (
    <nav className='bg-red-600 flex py-4  justify-between fixed top-0 z-10 w-full shadow-2xl flex-row-reverse lg:flex-row md:flex-row'>
        <div>
          <img src="/images/logo-w.png" className='w-[15rem] pl-10 hover:cursor-pointer ' alt="" onClick={clickResult} />
        </div>
        <div className='flex flex-grow-0 gap-10 items-center'>
        <a href="/about" className='hover:text-black hidden lg:block md:block'>About US</a>
        <a href="/games" className='hover:text-black hidden lg:block md:block' >Our Games</a>
        <a href="/team"  className='hover:text-black hidden lg:block md:block'>Our Team</a>
        </div>
        <div className='flex w-64 gap-6 items-center '>
        <a href="/" className='hidden lg:block md:block'><SiTwitter/></a>
        <a href="/"  className='hidden lg:block md:block'><SiFacebook/></a>
        <a href="/" className='hidden lg:block md:block'><SiLinkedin/></a>
        <a href="/" className='hidden lg:block md:block'><SiInstagram/></a>
        <a href="/" className='block lg:hidden md:hidden pl-10'><FaBars/></a>
        </div>
    </nav>
  )
}

export default Navbar