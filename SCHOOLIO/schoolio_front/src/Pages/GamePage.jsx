import { useEffect, useState } from "react";
import { getUserInfosApi, edituserApi } from "../Utils/ApiUtils";
import RouteProtection from "./RouteProtection.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import axios from "axios";
import React from 'react';
import { useTimer } from 'react-timer-hook';

function GamePage() {
    const [Profile,setProfile] = useState()
    const [ProfileID,setProfileID] = useState()
    const [inGame,setInGame] = useState(0)
    const [numbers,setNumbers] = useState(["","",""])
    const [points,setpoints] = useState(0)
    const [newHigh,setnewHigh] = useState(0)

    const navigate = useNavigate();

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60); // 60 seconds timer
    
    var {seconds} = useTimer({ expiryTimestamp:time, onExpire: () => {setInGame(0),editUser(points)} })
    
    
    function setTimer() {
     seconds = useTimer({ expiryTimestamp:time, onExpire: () => {setInGame(0),editUser(points)} });
     
    }
    
    

    useEffect(() => {
        getUserInfo()
        play()
    },[])

    async function getUserInfo() {
        try {
            const userId = window.localStorage.id;
            const res = await getUserInfosApi(userId);
            console.log("response is",res)
            setProfile(res)
            console.log("profile is",Profile)
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserInfo() {
        try {
            const userId = window.localStorage.id
            const res = await getUserInfosApi(userId);
             console.log("response is",res)
             await setProfile(res)
            setProfileID(userId)
            console.log("profile is",Profile,userId)
        } catch (error) {
            console.log(error);
        }
    }

    const editUser = async (amount) => {
        try {
            var editProfile = Profile
            editProfile.points = editProfile.points + amount
            if (amount > editProfile.highscore) {
                editProfile.highscore = amount
                setnewHigh(1)
            }
            setProfile(editProfile)
            const edit = await edituserApi(ProfileID, Profile);
            console.log("new point amount",Profile.points)
            return alert("points changed");
        } catch (error) {
            console.log(error);
        }
    };
    function play() {
        if (inGame == 0) {
            setInGame(1)
            
        }
    randomize()

    }

    function randomize() {
        var newArray = numbers
        newArray[0]=""
        newArray[1]=Math.floor(Math.random() * 11)
        newArray[2]= newArray[1] * Math.floor(Math.random() * 10)
    }

    const editChange1 = (e) => {
        const { target } = e;
        var { value } = target;
        var newArray = numbers
        newArray[0] = value
        setNumbers(newArray);
        if (numbers[0] * numbers[1] == numbers[2]) {
            console.log ("win")
            setpoints(points + 10)
            randomize()
        }
        console.log(numbers)
    };

    const editChange2 = (e) => {
        const { target } = e;
        var { value } = target;
        var newArray = numbers
        if (value == "") {
            value = 0
        }
        newArray[1] = value
        setNumbers(newArray);
        console.log(numbers)
    };

    const editChange3 = (e) => {
        const { target } = e;
        var { value } = target;
        var newArray = numbers
        if (value == "") {
            value = 0
        }
        newArray[2] = value
        setNumbers(newArray);
        console.log(numbers)
    };



    return <>
    <div className="mainWindow">
        <div className="timerBubble">
    {inGame == 1 ? <h1>{seconds}</h1> : <div><h1 className="endText">Time's Up !</h1><h1 className="endText1">Final Score: {points}</h1></div>}
        </div>
    <button className="backButton" onClick={() => navigate("/*")}>Back</button>
    
    { inGame == 0 ? <button className="playButton" onClick={() => window.location.reload()}>Play Again ?</button> : 
    <div className="game">
        
        <div className="inputs">
        <input type="number" onChange={editChange1}></input>
        <h1 className="plusSign">+</h1>
        <input type="number" value={numbers[1]}onChange={editChange2} disabled></input>
        <h1 className="equalSign">=</h1>
        <input type="number" value={numbers[2]}onChange={editChange3} disabled></input>
        </div>
        <h1>points : {points}</h1>
    </div> }
    { newHigh == 1 ? <h1>NEW HIGH SCORE !</h1> : <></>}
    </div>
    </>
}


export default GamePage;