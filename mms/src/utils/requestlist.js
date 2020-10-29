import axios from "axios";

const baseUrl = "http://47.115.147.246:2004";

const requestlist = axios.create({
  baseURL: baseUrl + "/",
});

export default requestlist;
