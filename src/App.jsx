import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./Pages/Reset"
import Success from "./Pages/Success"
import Landing from "./Pages/Landing"
import Signin from './Pages/Signin'
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Reset />} />
      <Route path="/success" element={<Success />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        
      </Routes>
    </BrowserRouter>
    
  )
}


export default App
