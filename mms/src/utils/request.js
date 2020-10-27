import axios from "axios";

const baseUrl = "http://47.115.147.246:2004";

const request = axios.create({
  baseURL: baseUrl + "/",
});

export default request;
