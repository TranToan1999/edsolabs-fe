import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}`,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosClient;
