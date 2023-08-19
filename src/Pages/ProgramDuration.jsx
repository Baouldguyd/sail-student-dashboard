import React from 'react'
import Sidebar from '../Components/DashboardComponents/Sidebar'
import DurationApp from '../Components/ProgDurationComponent/Duration'

const ProgramDuration = () => {
  return (
    <div className=' flex h-[100vh] w-screen'>
        <Sidebar/>
        <DurationApp/>
    </div>
  )
}

export default ProgramDuration