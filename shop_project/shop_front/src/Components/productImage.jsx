import React, {useState} from "react";
import "./productImage.css";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../Contexts/Context";

function Product(props) {
    const { name, image, desc, price, cat, index, id } = props;
    const [descShow, setDesc] = useState(false);
    const navigate = useNavigate();
    const {addToCart,editCart,deleteFromCart,calcTotal,products,setProducts} = Contexts()
    return (
        <div className="productCard">
            <h2
                onClick={() => {
                    navigate(`/product/${id}`);
                }}
            >   {name}
            </h2>
            <span>{cat}</span>
            <img src={image} alt=""/>
            <button onClick={() => {
                setDesc(!descShow);
            }}
            >
                show description
            </button>
            {descShow == true ? <div>{desc}</div> : null}
            <div className="pr">{price} $</div>
            <button
                onClick={() => {
                    addToCart(index);
                }}
            > add to cart
            </button>
            <button onClick={() => {navigate(`editProduct/${id}`)}}>Edit Product</button>
        </div>
    );
}

export default Product;
