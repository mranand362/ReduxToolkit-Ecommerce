import axios from "axios";

const API = axios.create({
  baseURL: "https://reduxtoolkit-ecommerce.onrender.com"
});

export default API;