import axios from "axios";

const ApiUrl = "http://localhost:3002";

export async function getrecipesList() {
    try {
        const res = await axios.get(`${ApiUrl}/recipe/list`);
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



export async function getrecipeInfosApi(id) {
    try {
        const res = await axios.get(`${ApiUrl}/recipe/list/${id}`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function editrecipeApi(id, NewInfos) {
    try {
        const res = await axios.put(`${ApiUrl}/recipe/${id}/edit`, NewInfos, {
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

export async function deleterecipeApi(id) {
    try {
        const res = await axios.delete(`${ApiUrl}/recipe/${id}/delete`,{
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
