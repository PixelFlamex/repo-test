import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import HomePage from "./Pages/HomePage";
import EditPage from "./Pages/EditPage.jsx";
import ProductPage from "./Pages/ProductPage"
import CartComponent from "./Components/CartComponent.jsx";
import CreatePage from "./Pages/CreatePage.jsx";
import DeletePage from "./Pages/DeletePage.jsx";
import Auth from "./Pages/Auth.jsx";
import { Contexts } from "./Contexts/Context";
import RouteProtection from "./Pages/RouteProtection.jsx";

function App() {
  const navigate = useNavigate();
  const { cart, setCart,calcTotal,addToCart,editCart,deleteFromCart,productList,setProductsList} = Contexts();



  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>

                <button
          onClick={() => {
            navigate("/createProduct");
          }}
        >
          add product
        </button>

        <button
          onClick={() => {
            navigate("/editProduct");
          }}
        >
          edit product
        </button>

        
      </div>
      <div className="cart">

          <h4>cart</h4>
          <div>total : {calcTotal()} $</div>
          <div>
            {cart || cart.length > 0
                ? cart.map((product, i) => {
                  const { title, price, qte, thumbnail} = product;
                  return (
                    <CartComponent
                      key={i}
                      i={i}
                      title={title}
                      price={price}
                      qte={qte}
                      thumbnail={thumbnail}
                      editCart={editCart}
                      dlCart={deleteFromCart} />
                  )
                })
            : null}
          </div>
      </div>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="product/:id" element={<ProductPage />}/>
        <Route path="createProduct" element={<RouteProtection><CreatePage/></RouteProtection>}/>
        <Route path="editProduct/:id" element={<RouteProtection><EditPage/></RouteProtection>}/>
        <Route path="deleteProduct" element={<RouteProtection><DeletePage/></RouteProtection>}/>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App
