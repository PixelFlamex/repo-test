import React from "react";
import "./Cart.css"

function CartComponent(props) {
    const { title, price, qte, thumbnail, i, editCart, dlCart} = props;

    function changeQte(e) {
        const value = e.target.value;
        editCart(value, i);
    };
    return (

        <div className="cartComp">
            <img className="img" src={thumbnail} alt="" />
            <section>
                <div>{title}</div>
                <div>qte : {qte}</div>
                <div>total : {(price * qte).toFixed(2)} $</div>
                <input type="number" min="0" onChange={changeQte} value={qte} />
                <button
                    onClick={() => {
                        dlCart(i);
                    }}
                >
                    Delete
                </button>
            </section>
        </div>
    ); 
}

export default CartComponent;