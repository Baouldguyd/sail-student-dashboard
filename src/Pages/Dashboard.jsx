import React from 'react'
import Contentpage from '../Components/DashboardComponents/Contentpage';
import Sidebar from '../Components/DashboardComponents/Sidebar';

const Dashboard = () => {
  return (
    <div className=' flex h-[100vh] w-screen'>
      <Sidebar/>
      <Contentpage />
    </div>
  )
}

export default Dashboard;