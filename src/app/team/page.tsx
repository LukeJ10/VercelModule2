import Navbar from '@/components/navbar'
import Arteam from '@/components/teamsPageComp/Arteam'
import DevTeamComp from '@/components/teamsPageComp/DevTeam'
import MarketTeamComp from '@/components/teamsPageComp/MarketingTeam'
import TeamHero from '@/components/teamsPageComp/teamHero'
import React from 'react'

const TeamsPage = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <TeamHero/>
        </div>
        <div>
            <Arteam/>
        </div>
        <div>
            <DevTeamComp/>
        </div>
        <div>
            <MarketTeamComp/>
        </div>
    </div>
  )
}

export default TeamsPage