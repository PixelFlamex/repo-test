import React, { useState } from "react";
import HomePage from "./HomePage.jsx";
import { registerWeb, loginWeb} from "../Utils/ApiUtils.js";
import { Route, Routes, useNavigate } from "react-router-dom";

function Auth(props) {
    const [loginInfos, setLoginInfos] = useState({});
    const [registerInfos, setRegisterInfos] = useState({});

    const navigate = useNavigate();

    const loginInputs = (e) => {
        const { target } = e;
        const { value, name } = target;
        setLoginInfos({ ...loginInfos, [name]: value });
    };
    const registerInputs = (e) => {
        const { target } = e;
        const { value, name } = target;
        setRegisterInfos({ ...registerInfos, [name]: value });
    };

    async function login() {
        try {
            const res = await loginWeb(loginInfos);
            const { token,id, message } = res;
            if (!token) {
                return alert(res);
            }
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("id", id);
            return alert(message);
        } catch (error) {
            console.log(error);
        }
    }
    async function register() {
        try {
            
            const res = await registerWeb(registerInfos);
            const { data } = res;
            if (!data) {
                return alert(res);
            }
            return alert(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="mainWindowLogin">
            <section className="loginInputs">
                <h2>Login</h2>
                <input type="text" name="email" placeholder="Email" onChange={loginInputs} />
                <input type="password" name="password" placeholder= "Password" onChange={loginInputs} />
                <button
                    onClick={() => {
                        login();
                    }}
                >
                    Login
                </button>
            </section>
            <section className="loginInputs">
                <h2>Register</h2>
                <input type="text" name="email"  placeholder="Email" onChange={registerInputs} />
                <input type="password" name="password" placeholder= "Password" onChange={registerInputs} />
                <input type="text" name="username"  placeholder="Username" onChange={registerInputs} />
                
                <button
                    onClick={() => {
                        register();
                    }}
                >
                    Register
                </button>
                
            </section>
                <button  className="loginBackButton" onClick={() => {navigate("/*")}}>Back</button>
            </div>
        </div>
    );
}

export default Auth;
