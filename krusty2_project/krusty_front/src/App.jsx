import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import OrderPage from "./Pages/CreatePage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import EditPage from "./Pages/EditPage.jsx";
import DeletePage from "./Pages/DeletePage.jsx";
import Auth from "./Pages/Auth.jsx";
import RouteProtection from "./Pages/RouteProtection.jsx";
import './App.css'

function App() {
  const navigate = useNavigate();

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
            navigate("/createOrder");
          }}
        >
          add Order
        </button>

        <button
          onClick={() => {
            navigate("/editOrder");
          }}
        >
          edit Order
        </button>
        
        <button
          onClick={() => {
            navigate("/deleteOrder");
          }}
        >
          delete Order
        </button>
        
      </div>


      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="order/:id" element={<OrderPage />}/>
        <Route path="createOrder" element={<RouteProtection><OrderPage/></RouteProtection>}/>
        <Route path="editOrder/:id" element={<RouteProtection><EditPage/></RouteProtection>}/>
        <Route path="deleteOrder/:id" element={<RouteProtection><DeletePage/></RouteProtection>}/>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App
