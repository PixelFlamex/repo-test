import ProfileIcon from "../Components/ProfileIcon";
import { useEffect, useState } from "react";
import { getUserInfosApi, edituserApi } from "../Utils/ApiUtils";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from 'react';

function StorePage() {
    
    const navigate = useNavigate();

    const [Profile,setProfile] = useState()
    const [ProfileID,setProfileID] = useState()
    const [currentPicID,setCurrentPicID] = useState(0)
    const [owned,setOwned] = useState([0])
    const [selectedIcon,setSelectedIcon] = useState(0)
    const [points,setPoints] = useState(0)

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
             setOwned(res.ownedPics)
             setPoints(res.points)
             setSelectedIcon(res.currentPic)
             console.log(currentPicID)
            setProfileID(userId)
            console.log("profile is",Profile,userId)
        } catch (error) {
            console.log(error);
        }
    }

    var profilePics = [0,1,2,3,4,5,6,7,8]

    const buy = async (icon) => {
        try {
            var editProfile = Profile
            if (editProfile.points >= selectedIcon*1000)
            editProfile.points = editProfile.points - selectedIcon*1000
            editProfile.ownedPics.push(icon)
            setProfile(editProfile)
            const edit = await edituserApi(ProfileID, Profile);
            console.log("new icon bought",Profile.ownedPics)
            return alert("icon purchased");
        } catch (error) {
            console.log(error);
        }
    };

    const setPic = async (icon) => {
        try {
            var editProfile = Profile
            editProfile.currentPic = icon
            setProfile(editProfile)
            const edit = await edituserApi(ProfileID, Profile);
            console.log("icon set",icon)
            return alert("icon changed");
        } catch (error) {
            console.log(error);
        }
    };

return (
    <>


    <div className="mainWindow">
        


    <div className="profileBox">
    {profilePics || profilePics.length > 0
                    ? profilePics.map((icon,i) => {
                        const { imageID } = icon;
                        return (
                            <ProfileIcon
                                imgID = {i}
                                ownedArray = {owned}
                                setSelectedIconProp = {setSelectedIcon}
                                selectedIconProp = {selectedIcon}
                            ></ProfileIcon>
                        ); }): null}
    </div>
    <></>
    <button className="backButton" onClick={() => navigate("/*")}>Back</button><h1 className="pointAmount">Points : {points}</h1>
    {owned.includes(selectedIcon) == true ? <button className="changeButton" onClick={() => {setPic(selectedIcon),setTimeout(window.location.reload,2000)}}>Change</button> : <button className="changeButton" onClick={() => buy(selectedIcon)}>Buy</button> }
    </div>
    {owned.includes(selectedIcon) == true ? <div><img className="previewIcon" src={`Pictures/pic_${selectedIcon}.png`}></img><h1 className="price">Owned</h1></div> :
      <div><img className="previewIcon" src={`Pictures/pic_${selectedIcon}.png`}></img><h1 className="price">Price: {selectedIcon*1000}</h1></div>}
      
    </>
)
}



export default StorePage;