import Herobar from '@/components/homepagecomp/hero'
import MiniAbout from '@/components/homepagecomp/miniAbout'
import Navbar from '@/components/navbar'
import React from 'react'
import MiniTeam from '@/components/homepagecomp/miniTeam'
import TestimoniesBar from '@/components/homepagecomp/TestimoniesBar'
const Homepage = () => {
  return (
    <div className='h-full'>
      <div >
      <Navbar/>
      </div>
      <div >
      <Herobar/>
      </div>
      <div>
        <MiniAbout/>
      </div>
      <div>
        <MiniTeam />
      </div>
      <div>
        <TestimoniesBar/>
      </div>
    </div>
  )
}

export default Homepage