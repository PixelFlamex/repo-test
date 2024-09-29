import { useState,useEffect, useRef } from 'react'
import './App.css'


var save1 = false
var save2 = false
var save3 = false

var image1 = "static-assets-upload14641565987009143133.png"
var name1 = "spongebob"
var desc1 = "spongedescription"

var image2 = "bob003.jpg"
var name2 = "squidward"
var desc2 = "spongedescription"

var image3 = "mr__krabs_and_pinhead_larry_faceswap_2_by_crispykrillin_dcu58ny-fullview.jpg"
var name3 = "Mr.krabs"
var desc3 = "spongedescription"

function App() {
  const [editMode1, setEditMode1] = useState(false)
  const [editMode2, setEditMode2] = useState(false)
  const [editMode3, setEditMode3] = useState(false)

  const imginput1 = useRef();
  const nameinput1 = useRef();
  const descinput1 = useRef();

  const imginput2 = useRef();
  const nameinput2 = useRef();
  const descinput2 = useRef();

  const imginput3 = useRef();
  const nameinput3 = useRef();
  const descinput3 = useRef();

  var fReader = new FileReader();

function Save1() {
 
  image1 = (fReader.readAsDataURL(imginput1.target.files[0]));
  name1 = nameinput1.current.value
  desc1 = descinput1.current.value
  save1= false
  setEditMode1(false)
}

function SetEdit1() {
  console.log("set")
  save1 = true
  setEditMode1(true)
}

function Save2() {
 
  
  name2 = nameinput2.current.value
  desc2 = descinput2.current.value
  save2= false
  setEditMode2(false)
}

function SetEdit2() {
  console.log("set")
  save2 = true
  setEditMode2(true)
}

function Save3() {
 
  
  name3 = nameinput3.current.value
  desc3 = descinput3.current.value
  save3= false
  setEditMode3(false)
}

function SetEdit3() {
  console.log("set")
  save3 = true
  setEditMode3(true)
}

/*delete functions not working for some reason ?*/
function delete1() {
  setEditMode1(true)
  image1 = ""
  name1 = ""
  desc1 = ""
  save1= false
  setEditMode1(false)
}

function delete2() {
  image2 =""
  name2 = ""
  desc2 = ""
  save2= false
  setEditMode2(false)
}

function delete3() {
  image3 =""
  name3 = ""
  desc3 = ""
  save3= false
  setEditMode3(false)
}

  return (
    <>
    <h1>i could not get the image changing to work due to a problem with the browsers security,solutions found online did not work either</h1>
        <div className='charaList'>
          <div className='chara'>
        {editMode1 == true ? <input ref={imginput1} type="file"/> : <img src={image1}></img>}
        {editMode1 == true ? <input ref={nameinput1} type="text" placeholder="New Name" /> : <span> {name1} </span>}
        {editMode1 == true ? <input ref={descinput1} type="text" placeholder="New description" /> : <span> {desc1} </span>}
        {save1 == true ? <button onClick={() => Save1()}>Save</button> : <button onClick={() => SetEdit1()}>edit</button>}
        <button onClick={() => delete1()}>delete</button>
          </div>

          <div className='chara'>
        {editMode2 == true ? <input ref={imginput2} type="file"/> : <img src={image2}></img>}
        {editMode2 == true ? <input ref={nameinput2} type="text" placeholder="New Name" /> : <span> {name2} </span>}
        {editMode2 == true ? <input ref={descinput2} type="text" placeholder="New description" /> : <span> {desc2} </span>}
        {save2 == true ? <button onClick={() => Save2()}>Save</button> : <button onClick={() => SetEdit2()}>edit</button>}
        <button onClick={() => delete2()}>delete</button>
          </div>

          <div className='chara'>
        {editMode3 == true ? <input ref={imginput3} type="file"/> : <img src={image3}></img>}
        {editMode3 == true ? <input ref={nameinput3} type="text" placeholder="New Name" /> : <span> {name3} </span>}
        {editMode3 == true ? <input ref={descinput3} type="text" placeholder="New description" /> : <span> {desc3} </span>}
        {save3 == true ? <button onClick={() => Save3()}>Save</button> : <button onClick={() => SetEdit3()}>edit</button>}
        <button onClick={() => delete3()}>delete</button>
          </div>
        </div>
    </>
  )
}

export default App
