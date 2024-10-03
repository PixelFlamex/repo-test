import { ChangeEvent,useEffect, useState, useRef } from 'react'
import './App.css'
import sanfran from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/sanfran.jpg"
import grapes from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/rubyseedlessgrapes.jpg"
import apple from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/green-apply.jpg"
import banana from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/banane.jpg"
import hamburger from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/hamburger.jpg"
import brian from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/images.jpeg"
import ImageComp from './Components/ImageComp'

function App() {
  const [search,setSearch] = useState("")
  const [list,setList] = useState([])
  var images = [sanfran,grapes,apple,banana,hamburger,brian]
  var imageList = [{name:"San Fransisco",image:sanfran},{name:"Some Grapes",image:grapes},
                   {name:"An Apple",image:apple},{name:"A Banana",image:banana},
                   {name:"Hamburger",image:hamburger},{name:"some guy idk",image:brian}]

useEffect(() => {
setList(imageList)
},[])
const handleChange = (e) => {
  setSearch(e.target.value);
  console.log(search)
  var tempArray = list
  var filterArray = tempArray.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
  setList(filterArray)
};

  return (
    <>
    <h3>could not finish this one, the search state updating is delayed and searching itself wont work. i could not find an answer online.</h3>
  <input type='text' name='inpoot'  value={search} onChange={handleChange}/>
  <button onClick={() => update()}>submit</button>
  <div className="imgContainer">
  {list || list.length > 0
                    ? list.map((Image,i) => {
                        
                        return (
                            <ImageComp
                                index={i}
                                key={i}
                            ></ImageComp>
                        );
                    }): null}
  </div>
    </>
  )
}

export default App

/*state that corresponds to the displayed elements, when checking, make an aray variable and add all things that pass the test. then update state with array */
