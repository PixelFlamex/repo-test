import axios from "axios";

const ApiUrl = "http://localhost:3002";



export async function loginWeb(loginInfos) {
    try {
        const res = await axios.post(`${ApiUrl}/user/login`, loginInfos);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function registerWeb(registerInfos) {
    try {
        console.log("function start")
        const res = await axios.post(`${ApiUrl}/user/register`, registerInfos);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function edituserApi(id, NewInfos) {
    try {
        const res = await axios.put(`${ApiUrl}/user/${id}/edit`, NewInfos, {
            headers: {
                token: window.localStorage.token,
            },
        });
        console.log (id)
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserInfosApi(id) {
    try {
        const res = await axios.get(`${ApiUrl}/user/${id}/get`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}





