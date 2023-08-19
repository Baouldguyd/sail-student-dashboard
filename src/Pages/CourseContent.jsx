import React from 'react'
import Content from '../Components/CoursesComponents/Content'
import Sidebar from '../Components/DashboardComponents/Sidebar'

const CourseContent = () => {
  return (
    <div className=' flex h-[100vh] w-screen'>
    <Sidebar/>
    <Content/>


</div>
  )
}

export default CourseContent