import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./Pages/Reset"
import Landing from "./Pages/Landing"
import Signin from './Pages/Signin'
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Attendance from "./Pages/Attendance";
import ProgramDuration from "./Pages/ProgramDuration";
import CourseContent from "./Pages/CourseContent";
import Settings from "./Pages/UserSettings";
import EditProfile from "./Pages/EditProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Reset />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coursecontent" element={<CourseContent />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/programduration" element={<ProgramDuration />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/editprofile" element={<EditProfile/>}/>

        
      </Routes>
    </BrowserRouter>
    
  )
}


export default App
