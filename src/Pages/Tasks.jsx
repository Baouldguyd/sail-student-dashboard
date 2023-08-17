import React from 'react'
import Sidebar from '../Components/DashboardComponents/Sidebar'
import TasksContent from '../Components/DashboardComponents/TasksContent'

const Tasks = () => {
  return (
    <div className=' flex h-[100vh] w-screen'>
        <Sidebar/>
        <TasksContent/>
    </div>
  )
}

export default Tasks