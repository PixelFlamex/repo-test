import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [Time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString({hour12: "false"})), 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  var timeNow = new Date().toLocaleTimeString()
  

  return (
    <>
    <div id="clockbox" className="clock">
      <div id="clockscreen" className='screen'>
      <h1>{Time}</h1>
      </div>
    </div>




    </>
  )
}

export default App
