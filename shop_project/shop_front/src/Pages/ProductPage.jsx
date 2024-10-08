import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Contexts } from "../Contexts/Context";

function ProductPage(props) {
    const [productDetail, setProductDetail] = useState(null);
    const {productList,setProductList} = Contexts();
    const { id } = useParams();
    
    useEffect(() => {
        if (!id) {
            return;
        }
        findProducts();
    }, []);

    async function findProducts() {
        /*try {
            const ressource = await axios.get(`http://localhost:5173/productsDB/products/${id}`);
            if (!ressource) {
                return alert("no response from API");
            }
            if (!ressource.data) {
                return alert("no Data received");
            }
            setProductDetail(ressource.data);
        } catch (error) {
            console.log(error);
        }*/
            try {
                const ressource = await axios.get(`http://localhost:3000/product/list/${id}`);
                if (!ressource) {
                    return alert("no response from API");
                }
                if (!ressource.data) {
                    return alert("no Data received");
                }
                let productArray = ressource.data
                
                if (!ressource.data) {
                    return alert("no products found");
                }
                setProductDetail(productArray);
                
                console.log (productDetail);
    
            } catch (error) {
                console.log(error);
            }

    }
    return (
        <div>
            <h1>{productDetail ? productDetail.title : null}</h1>
            <h4>{productDetail ? productDetail.price : null}</h4>
            <h4>{productDetail ? id : null}</h4>
        </div>
    );
}

export default ProductPage;