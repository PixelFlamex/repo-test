import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editProductApi, getProductInfosApi } from ".././Utils/ApiUtils.js"


function Editproduct(props) {
    const [products, setproduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (!id) {
            return;
        }
        getproductInfos();
    }, []);
    const editChange = (e) => {
        const { target } = e;
        const { value, name } = target;
        setproduct({ ...products, [name]: value });
    };

    const getproductInfos = async () => {
        try {
            const res = await getProductInfosApi(id);
            if (!res) {
                return alert(res);
            }
            
            
            setproduct(res);
        } catch (error) {
            console.log(error);
        }
    };
    const editproduct = async () => {
        try {
            const edit = await editProductApi(id, products);
            return alert(edit);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Edit product</h2>
            {products ? <><input type="text" name="title" placeholder={products.title ? products.title : "title"} onChange={editChange} /> <br />
            <input type="number" name="price" placeholder={products.price ? products.price : "price"} onChange={editChange} /> <br />
            <input type="text" name="category" placeholder={products.category ? products.category : "category"} onChange={editChange} /> <br />
            
            <button onClick={() => editproduct()}>edit product</button></> : null}
        </div>
    );
}

export default Editproduct;
