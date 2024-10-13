import axios from "axios";

const ApiUrl = "http://localhost:3002";

export async function getordersList() {
    try {
        const res = await axios.get(`${ApiUrl}/order/list`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function loginWeb(loginInfos) {
    try {
        const res = await axios.post(`${ApiUrl}/employee/login`, loginInfos);
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
        const res = await axios.post(`${ApiUrl}/employee/register`, registerInfos);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}



export async function getorderInfosApi(id) {
    try {
        const res = await axios.get(`${ApiUrl}/order/list/${id}`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function editorderApi(id, NewInfos) {
    try {
        const res = await axios.put(`${ApiUrl}/order/${id}/edit`, NewInfos, {
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

export async function deleteorderApi(id) {
    try {
        const res = await axios.put(`${ApiUrl}/order/${id}/delete`,{
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
