import { useState } from 'react'
import ReactPlayer from 'react-player'
import './App.css'
import video1 from 'C:/Users/Amine Zatout/Desktop/HTML/tiktok_project/src/video1.mp4';
import video2 from 'C:/Users/Amine Zatout/Desktop/HTML/tiktok_project/src/video2.mp4';
import video3 from 'C:/Users/Amine Zatout/Desktop/HTML/tiktok_project/src/video3.mp4';





function App() {
  const videos = [video1,video2,video3]
  const likeList = [0,0,0]
  const [currentVideo,setCurrentVideo] = useState(0)
  const [likes,setLikes] = useState(likeList)
  
function next() {
  if (currentVideo == videos.length-1) {
    return
  } else {
   setCurrentVideo(currentVideo+1)
   setLikes(likes)
   console.log(currentVideo)
   }
}

function previous() {
  if (currentVideo == 0) {
    return
  } else {
   setCurrentVideo(currentVideo-1)
   setLikes(likes)
   console.log(currentVideo)
   }
}

function like() {
  if (likeList[currentVideo] == 0) {
    console.log("liked")
    var tempArray = likes
    tempArray[currentVideo] = 1
    setLikes(tempArray)
    console.log(likes)
  } else if (likeList[currentVideo] == 1) { /*for some reason, disliking doesnt work, even though the condition is met. i have no idea why that is.*/
    console.log("disliked")
  var tempArray = likes
  tempArray[currentVideo] = 0
  setLikes(tempArray)
  console.log(likes)
  }
}

function dislike() {
  
    console.log("disliked")
  var tempArray = likes
  tempArray[currentVideo] = 0
  setLikes(tempArray)
  console.log(likes)
  
}

  return (

    <>
<ReactPlayer 
    
    controls ={true}
    width='100%'
    url={videos[currentVideo]}
    type = 'audio/mp3'
/>  

<button onClick={() => next()}>next</button>
<button onClick={() => previous()}>previous</button>
{likes[currentVideo] == 0 ? <button onClick={() => like()}>like</button> :likes[currentVideo] == 1 ? <button onClick={() => dislike()}>dislike</button>: null}
    </>
  )
}

export default App
