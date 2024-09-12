import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:5000",
    baseURL: "https://api.tibetskaya.kz",
    timeout: 1000 * 30,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
});

export default api;
