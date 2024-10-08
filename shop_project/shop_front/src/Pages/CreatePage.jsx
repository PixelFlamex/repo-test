import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function CreatePage (props) {
const [upProd,setupProd] = useState();
console.log(upProd)
function update(e) {
    const {target} = e
    const {value,name} = target
    
    setupProd({...upProd, [name]: value})
}
async function createProduct() {
    try {
        const res = await axios.post("http://localhost:3000/product/create",upProd)
        if (!res) {
            return alert ("no response")
        }
        alert ("product created")
    } catch (error) {
        console.log(error)
    }
}
return <div>

    <input type="text" name="title" placeholder="name" onChange={update}></input>
    <input type="number" name="price" placeholder="price" onChange={update}></input>
    <input type="text" name="description" placeholder="description" onChange={update}></input>
    <button 
        onClick= {
            createProduct
        }
        >submit product
    </button>
</div>   
}
export default CreatePage