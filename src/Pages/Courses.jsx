import React from 'react'
import Sidebar from '../Components/DashboardComponents/Sidebar'
import Content from '../Components/CoursesComponents/Content'


const Courses = () => {
  return (
    <div className=' flex h-[100vh] w-screen'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Courses
