import React, { useState } from "react";
import { registerWeb, loginWeb} from "../Utils/ApiUtils.js";

function Auth(props) {
    const [loginInfos, setLoginInfos] = useState({});
    const [registerInfos, setRegisterInfos] = useState({});

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
            const { token, message } = res;
            if (!token) {
                return alert(res);
            }
            window.localStorage.setItem("token", token);
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
            <section>
                <h2>login</h2>
                <input type="text" name="email" placeholder="Email" onChange={loginInputs} />
                <input type="password" name="password" placeholder= "Password" onChange={loginInputs} />
                <button
                    onClick={() => {
                        login();
                    }}
                >
                    login
                </button>
            </section>
            <section>
                <h2>Register</h2>
                <input type="text" name="email"  placeholder="Email" onChange={registerInputs} />
                <input type="password" name="password" placeholder= "Password" onChange={registerInputs} />
                <input type="text" name="username"  placeholder="Username" onChange={registerInputs} />
                
                <button
                    onClick={() => {
                        register();
                    }}
                >
                    register
                </button>
            </section>
        </div>
    );
}

export default Auth;
