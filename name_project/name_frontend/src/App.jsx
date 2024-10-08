import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [Namelist, setNameList] = useState([])
  const [Name, setName] = useState("")

  useEffect(() => {
    findNames();
}, []);


async function findNames() {
    try {
        const ressource = await axios.get("http://localhost:3001/name/list");
        if (!ressource) {
            return alert("no response from API");
        }
        if (!ressource.data) {
            return alert("no Data received");
        }
        let nameArray = ressource.data
        console.log(...nameArray)
        if (!ressource.data || !ressource.data.length) {
            return alert("no names found");
        }
        setNameList(nameArray);
        
        console.log (Namelist);

    } catch (error) {
        console.log(error);
    }
}

function giveName() {
  setName(Namelist[Math.floor(Math.random() * Namelist.length)])
}

  return (
    <>
    <div>
      <h2>{Name.name}</h2>
      <button onClick={() => giveName()}>Random Name</button>
    </div>
    </>
  )
}

export default App
