
import { Route, Routes, useNavigate } from "react-router-dom";
import CreatePage from "./Pages/CreatePage.jsx";
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
            navigate("/createrecipe");
          }}
        >
          add Recipe
        </button>

        <button
          onClick={() => {
            navigate("/editrecipe");
          }}
        >
          edit Recipe
        </button>
        
        <button
          onClick={() => {
            navigate("/deleterecipe");
          }}
        >
          delete Recipe
        </button>
        
      </div>


      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="createrecipe" element={<RouteProtection><CreatePage/></RouteProtection>}/>
        <Route path="editrecipe" element={<RouteProtection><EditPage/></RouteProtection>}/>
        <Route path="deleterecipe" element={<RouteProtection><DeletePage/></RouteProtection>}/>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App
