import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_DUMMY_JSON_API_URL
});

export default function dummyJsonRequest(method, path = "", payload = {}) {
    const options = {
        method,
        withCredentials: false,
        url: path,
        data: payload,
        json: true,
    };

    return client(options);
}
