import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASEURL || "http://localhost:1000/";

const Axios = axios.create({
  baseURL,
});

export default Axios;
