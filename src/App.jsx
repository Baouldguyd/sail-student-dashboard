import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./Pages/Reset"
import Success from "./Pages/Success"
import Landing from "./Pages/Landing"
import Signin from './Pages/Signin'
import Dashboard from "./Pages/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Reset />} />
      <Route path="/success" element={<Success />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </BrowserRouter>
    
  )
}


export default App
