import GamePage from "./GamePage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import StorePage from "./StorePage.jsx";
import Auth from "./Auth.jsx";
import RouteProtection from "./RouteProtection.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { getUserInfosApi } from "../Utils/ApiUtils.js";
function HomePage() {
    const navigate = useNavigate();

    const [points,setPoints] = useState(0)
    const [currentPicID,setCurrentPicID] = useState(-1)
    const [name,setName] = useState("name")
    const [Profile,setProfile] = useState()
    const [ProfileID,setProfileID] = useState()


    async function getUserInfo() {
      try {
          const userId = window.localStorage.id
          const res = await getUserInfosApi(userId);
           console.log("response is",res)
           setProfile(res)
           setCurrentPicID(res.currentPic)
           setPoints(res.points)          
           console.log(currentPicID)
          setProfileID(userId)
          console.log("profile is",Profile,userId)
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
    getUserInfo()
    
},[])

  async function getUserInfo() {
    try {
        const userId = window.localStorage.id
        const res = await getUserInfosApi(userId);
         console.log("response is",res)
         setProfile(res)
         setCurrentPicID(res.currentPic)
         setPoints(res.points)
         console.log(currentPicID)
        setProfileID(userId)
        console.log("profile is",Profile,userId)
    } catch (error) {
        console.log(error);
    }
}

  function disconnect() {
    window.localStorage.removeItem("id")
    window.localStorage.removeItem("token")
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }

    return <>
    
    <div className='infos'>
    <div className='coins'></div>
    <div className='coins'></div>
    </div>

      

      <div className='mainWindow'>
        <div className='buttons'>
        <button className='schoolButton' onClick={() => {navigate("/profile");}} >Profile</button>
        <button className='schoolButton' onClick={() => {navigate("/game");}} >Play</button>
        <button className='schoolButton' onClick={() => {navigate("/store");}} >Store</button>
        </div>
        <button className="disconnect" onClick={() => disconnect()} >Logout</button>
      </div>

      <div className="miniProfile">
      <img className="miniPic" src={`Pictures/pic_${currentPicID}.png`}></img>
      
      </div>

      <Routes>
        <Route path="game" element={<RouteProtection><GamePage/></RouteProtection>}/>
        <Route path="profile" element={<RouteProtection><ProfilePage/></RouteProtection>}/>
        <Route path="store" element={<RouteProtection><StorePage/></RouteProtection>}/>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
      
    </>
}
export default HomePage;