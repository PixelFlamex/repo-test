import axios from "axios";
import React, {useState} from "react";


function OrderPage (props) {
const [upProd,setupProd] = useState();
console.log(upProd)
function update(e) {
    const {target} = e
    const {value,name} = target
    
    setupProd({...upProd, [name]: value})
}
async function createOrder() {
    try {
        const res = await axios.post("http://localhost:3002/order/create",upProd)
        if (!res) {
            return alert ("no response")
        }
        alert ("order placed")
    } catch (error) {
        console.log(error)
    }
}
return <div>

    <input type="text" name="title" placeholder="name" onChange={update}></input>
    <button 
        onClick= {
            createOrder
        }
        >submit order
    </button>
</div>   
}
export default OrderPage