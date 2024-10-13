import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editorderApi, getorderInfosApi } from ".././Utils/ApiUtils.js"


function Editorder(props) {
    const [orders, setorder] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (!id) {
            return;
        }
        getorderInfos();
    }, []);
    const editChange = (e) => {
        const { target } = e;
        const { value, name } = target;
        setorder({ ...orders, [name]: value });
    };

    const getorderInfos = async () => {
        try {
            const res = await getorderInfosApi(id);
            if (!res) {
                return alert(res);
            }
            
            
            setorder(res);
        } catch (error) {
            console.log(error);
        }
    };
    const editorder = async () => {
        try {
            const edit = await editorderApi(id, orders);
            return alert(edit);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Edit order</h2>
            {orders ? <><input type="text" name="title" placeholder={orders.title ? orders.title : "title"} onChange={editChange} /> <br />
            
            <button onClick={() => editorder()}>edit order</button></> : null}
        </div>
    );
}

export default Editorder;
