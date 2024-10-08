import axios from "axios";

const ApiUrl = "http://localhost:3000";

export async function getProductsList() {
    try {
        const res = await axios.get(`${ApiUrl}/product/list`);
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

export async function getBookInfosApi(isbn) {
    try {
        const res = await axios.get(`${ApiUrl}/book/${isbn}`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log("🚀 ~ file: ApiMiddleWare.js:7 ~ getBooksListe ~ error:", error);
    }
}

export async function getProductInfosApi(id) {
    try {
        const res = await axios.get(`${ApiUrl}/product/list/${id}`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function editProductApi(id, NewInfos) {
    try {
        const res = await axios.put(`${ApiUrl}/product/${id}/edit`, NewInfos, {
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