import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteorderApi, getorderInfosApi } from ".././Utils/ApiUtils.js"


function Deleteorder(props) {
    
    const { id } = useParams();
    useEffect(() => {
        if (!id) {
            return;
        }
        getorderInfos();
    }, []);

    const deleteorder = async () => {
        try {
            const deleter = await deleteorderApi(id);
            return alert(deleter);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>delete order</h2>
            {orders ? <><input type="text" name="title" placeholder={orders.title ? orders.title : "title"} onChange={deleteChange} /> <br />
            <input type="number" name="price" placeholder={orders.price ? orders.price : "price"} onChange={deleteChange} /> <br />
            <input type="text" name="category" placeholder={orders.category ? orders.category : "category"} onChange={deleteChange} /> <br />
            
            <button onClick={() => deleteorder()}>delete order</button></> : null}
        </div>
    );
}

export default Deleteorder;
