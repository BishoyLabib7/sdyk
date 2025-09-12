import axios from "axios";

const BASE_URL = "https://sydeek-api-qwtjg.sevalla.app/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request

  // headers: {
  //   "Content-Type": "application/json",
  // },
});
