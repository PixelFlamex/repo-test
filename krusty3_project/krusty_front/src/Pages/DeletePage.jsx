import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleterecipeApi } from ".././Utils/ApiUtils.js"


function Deleterecipe(props) {
    const [deleteID, setdeleteID] = useState(null);
    

    const deleteChange = (e) => {
        const { target } = e;
        const { value, name } = target;
        setdeleteID({[name]: value });
        console.log(deleteID)
    };

    const deleterecipe = async () => {
        try {

            const deleter = await deleterecipeApi(deleteID.id);
            return alert(deleter);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>delete recipe</h2>
            <><input type="text" name="id" placeholder="recipe ID" onChange={deleteChange} /> <br />

            
            <button onClick={() => deleterecipe()}>delete recipe ?</button></>
        </div>
    );
}

export default Deleterecipe;
