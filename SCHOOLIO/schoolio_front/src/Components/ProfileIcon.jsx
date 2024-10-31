function ProfileIcon(props) {
    const {imgID,ownedArray,setSelectedIconProp,selectedIconProp} = props

    return (
        <>
        
        <div className="imgBox">
        {ownedArray.includes(imgID) == true ? <img className="profilePicOwned" src={`Pictures/pic_${imgID}.png`} onClick={() => {setSelectedIconProp(imgID), console.log(selectedIconProp)}}></img> : 
        <img className="profilePicNotOwned" src={`Pictures/pic_${imgID}.png`} onClick={() => {setSelectedIconProp(imgID), console.log(selectedIconProp)}}></img>}
        </div>
        
        </>
    )

}

export default ProfileIcon;