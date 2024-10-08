import axios from "axios";
import React, {useEffect, useState} from "react";
import { Contexts } from "../Contexts/Context";
import Product from "../Components/productImage.jsx";

function HomePage(props) {
const {productList,setProductList} = Contexts();




    useEffect(() => {
        findProducts();
    }, []);


    async function findProducts() {
        try {
            const ressource = await axios.get("http://localhost:3000/product/list");
            if (!ressource) {
                return alert("no response from API");
            }
            if (!ressource.data) {
                return alert("no Data received");
            }
            let productArray = ressource.data
            console.log(...productArray)
            if (!ressource.data || !ressource.data.length) {
                return alert("no products found");
            }
            setProductList(productArray);
            
            console.log (productList);

        } catch (error) {
            console.log(error);
        }
    }


    return (

        <>
        <h1 className="nav">Test Shop</h1>
        <section className="secCont">
            <div className="prodsContainer">

                {productList || productList.length > 0
                    ? productList.map((product,i) => {
                        const { title, price, description, thumbnail, category, _id } = product;
                        return (
                            <Product
                                name={title}
                                price={price}
                                desc={description}
                                image={thumbnail}
                                cat={category}

                                index={i}
                                id={_id}
                            ></Product>
                        );
                
                    
                    
                    
                    
                    
                    
                    })
                
                
                
                
                
                : null}
    
            </div>


        </section>

        
        </>

    )


}


export default HomePage;
