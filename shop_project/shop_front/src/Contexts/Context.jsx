import { useState,useContext,createContext } from "react";
export const Context = createContext(null)
export const Contexts = () => useContext(Context);
function ContextProvider(props) {
    const {children} = props;
    const [productList,setProductList] = useState([])
    const [cart,setCart] = useState([])
    
    function addToCart(index) {
        const newProduct = { ...productList[index], qte: 1};
        setCart([...cart, newProduct]);
    };

    const editCart = (newqte, index) => {
        let tmpCart = [...cart];
        tmpCart[index].qte = parseInt(newqte);
        setCart(tmpCart);
    };

    const deleteFromCart = (i) => {
        let tmpCart = [...cart];
        tmpCart.splice(i, 1);
        setCart(tmpCart);
    };

    const calcTotal = () => {

        let total = 0;
        cart.forEach((product) => {
            total += product.price * product.qte;
        });
        return total.toFixed(2);
    };
    
    
    
    const States = {
        productList,
        cart
    }
    const Setters = {
        setProductList,
        setCart
    }
    const Functions = {
        addToCart,
        editCart,
        deleteFromCart,
        calcTotal
    }



    const value = {...States,...Setters,...Functions};


    return <Context.Provider value={value}>  {children}  </Context.Provider>
}
    export default ContextProvider