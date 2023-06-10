import axios from "axios";

const settings = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const apiInstance = axios.create({
    baseURL: "http://13.50.233.192:8080",
    ...settings,
});

export const authApi = {
    authentication(values) {
        return apiInstance.post(`authentication`, {email: values.email, password: values.password});
    },
};