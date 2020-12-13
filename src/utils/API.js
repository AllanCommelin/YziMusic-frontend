import axios from "axios";

const instance = axios.create({
    baseURL: "https://127.0.0.1:8000/api",
    responseType: "json"
});

instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.put['Content-Type'] = 'application/json';
instance.defaults.headers.get['Content-Type'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.delete['Content-Type'] = 'application/json';

export default instance