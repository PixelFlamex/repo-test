import React, { useState } from "react";

import { editrecipeApi } from ".././Utils/ApiUtils.js"


function Editrecipe(props) {
    const [recipes, setrecipe] = useState(null);
    const [editID, seteditID] = useState(null);

   
    const editChange = (e) => {
        const { target } = e;
        const { value, name } = target;
        seteditID({ ...editID, [name]: value });
    };

    const editChangeR = (e) => {
        const { target } = e;
        const { value, name } = target;
        setrecipe({ ...recipes, [name]: value });
    };
    


    const editrecipe = async () => {
        try {
            const edit = await editrecipeApi(editID.id, recipes);
            return alert(edit);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Edit recipe</h2>
            <><input type="text" name="id" placeholder="recipe ID" onChange={editChange} /> <br />
            <input type="text" name="recipeinstructions" placeholder="New Recipe" onChange={editChangeR} /> <br />
            <button onClick={() => editrecipe()}>edit recipe</button></>
        </div>
    );
}

export default Editrecipe;
