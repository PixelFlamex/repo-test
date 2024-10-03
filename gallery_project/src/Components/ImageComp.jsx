import React, {useEffect, useState} from "react";
import sanfran from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/sanfran.jpg"
import grapes from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/rubyseedlessgrapes.jpg"
import apple from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/green-apply.jpg"
import banana from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/banane.jpg"
import hamburger from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/hamburger.jpg"
import brian from "C:/Users/Amine Zatout/Desktop/HTML/gallery_project/images.jpeg"


function ImageComp(props) {
    const {index} = props
    var imageList = [{name:"San Fransisco",image:sanfran},{name:"Some Grapes",image:grapes},
        {name:"An Apple",image:apple},{name:"A Banana",image:banana},
        {name:"Hamburger",image:hamburger},{name:"some guy idk",image:brian}]
var images = [sanfran,grapes,apple,banana,hamburger,brian]
    
return (
        
    <>
    <div>
        <img className="image" src={imageList[index].image}></img>
        <h4>{imageList[index].name}</h4>
    </div>
    </>
    
    )
}

export default ImageComp;