import axios from "axios";

axios.defaults.baseURL = "https://drf-api-o27j.onrender.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;