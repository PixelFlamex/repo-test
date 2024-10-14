import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function RouteProtection({ children }) {
    const token = window.localStorage.token;
    const navigate = useNavigate();
    return <div> {token ? children : <Navigate to={"/auth"} />}</div>;
}

export default RouteProtection;
