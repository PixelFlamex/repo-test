import RouteProtection from "./Pages/RouteProtection.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import HomePage from "./Pages/HomePage.jsx";
import GamePage from "./Pages/GamePage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import StorePage from "./Pages/StorePage.jsx";
import Auth from "./Pages/Auth.jsx";
import axios from "axios";
import './App.css'

function App() {
  const navigate = useNavigate();

  
  /*useEffect to get user data and display name and coins in the corners*/
  

  return (
    <>
    <h1 className='title'>Schoolio</h1>
    

    
      <Routes>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="game" element={<RouteProtection><GamePage/></RouteProtection>}/>
        <Route path="profile" element={<RouteProtection><ProfilePage/></RouteProtection>}/>
        <Route path="store" element={<RouteProtection><StorePage/></RouteProtection>}/>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App
