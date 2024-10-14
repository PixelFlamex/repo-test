import axios from "axios";
import React, {useState} from "react";


function recipePage (props) {
const [upProd,setupProd] = useState();
console.log(upProd)
function update(e) {
    const {target} = e
    const {value,name} = target
    
    setupProd({...upProd, [name]: value})
}
async function createrecipe() {
    try {
        const res = await axios.post("http://localhost:3002/recipe/create",upProd,{
            headers: {
                token: window.localStorage.token,
            },
        })
        if (!res) {
            return alert ("no response")
        }
        alert ("recipe added")
    } catch (error) {
        console.log(error)
    }
}
return <div>

    <input type="text" name="recipeinstructions" placeholder="name" onChange={update}></input>
    <button 
        onClick= {
            createrecipe
        }
        >submit recipe
    </button>
</div>   
}
export default recipePage