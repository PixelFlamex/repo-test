import { useEffect, useState } from "react";
import { getUserInfosApi, edituserApi } from "../Utils/ApiUtils";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from 'react';


function ProfilePage() {
    const [currentPic,setCurrentPic] = useState(0)
    const [Profile,setProfile] = useState()
    const [ProfileID,setProfileID] = useState()
    const [currentPicID,setCurrentPicID] = useState(0)
    const [name,setName] = useState("name")
    const [points,setPoints] = useState()
    const [highscore,setHighscore] = useState()

    useEffect(() => {
        getUserInfo()
        
    },[])

    const navigate = useNavigate();

    async function getUserInfo() {
        try {
            const userId = window.localStorage.id
            const res = await getUserInfosApi(userId);
             console.log("response is",res)
             setProfile(res)
             setCurrentPicID(res.currentPic)
             setName(res.username)
             setPoints(res.points)
             setHighscore(res.highscore)
             console.log(currentPicID)
            setProfileID(userId)
            console.log("profile is",Profile,userId)
        } catch (error) {
            console.log(error);
        }
    }

    const editUser = async (PicID) => {
        try {
            var editProfile = Profile
            editProfile.currentPic = editProfile.currentPic + PicID
            setProfile(editProfile)
            const edit = await edituserApi(ProfileID, Profile);
            setCurrentPicID(Profile.currentPic)
            console.log("profile pic id",Profile.currentPic,currentPicID)
            return alert("profile pic applied");
        } catch (error) {
            console.log(error);
        }
    };


    var profilePics = [0,1,2,3]
    //have images already stored in files, depending on state with image number, change source of img element, all file names will be stored in an array,
    //the state is gonna corespond to the index of the wanted image in the array, and so put its filename as the source of the img element

    return (
        <>
        <div className="mainWindow">
        <h1 className="username">{name}'s Profile</h1>
        <img className="profilePic" src={`Pictures/pic_${currentPicID}.png`}></img>
      {/*  <button onClick={() => editUser(1)}>next</button> <button onClick={() => editUser(-1)}>previous</button>  */}
        <div className="stats">
            <h2 className="stat">HighScore : {highscore}</h2>
            <h2 className="stat">Points : {points}</h2>
        </div>
        <button className="backButton" onClick={() => navigate("/*")}>Back</button>
        </div>
        </>
    )
}




export default ProfilePage;