import Navbar from '@/components/navbar'
import HeroProd3 from '@/components/ourgamecomp/HeroProd3'
import HeroPage from '@/components/ourgamecomp/Heropage'
import ReqProd3 from '@/components/ourgamecomp/ReqProd3'
import GamesHero1 from '@/components/ourgamecomp/hero1'
import HeroProduct2 from '@/components/ourgamecomp/hero2'
import ReqProd2 from '@/components/ourgamecomp/reqProd2'
import RequirementsProd1 from '@/components/ourgamecomp/requirementsProd1'
import ReviewProd2 from '@/components/ourgamecomp/review2'
import ReviewProd1 from '@/components/ourgamecomp/reviewProd1'
import ReviewProd3 from '@/components/ourgamecomp/reviewProd3'
import React from 'react'

const GamesPage = () => {
  return (
    <div>
            <Navbar/>
            <HeroPage/>
            <GamesHero1/>
            <ReviewProd1 />
            <RequirementsProd1 />
            <HeroProduct2/>
            <ReviewProd2/>
            <ReqProd2/>
            <HeroProd3/>
            <ReviewProd3/>
            <ReqProd3/>
    </div>
  )
}

export default GamesPage