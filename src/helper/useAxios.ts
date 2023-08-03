import { cookieCutter } from "cookie-cutter";
import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://localhost:8000";

const useAxios = () => {
  let authTokens = "";
  if (cookieCutter?.get("accessToken" || "")) {
    authTokens = cookieCutter.get("accessToken" || "");
  }

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user: any = jwt_decode(authTokens);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.get(`${baseURL}/auth/refresh/`);

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    cookieCutter.set("accessToken", response.data);
    req.headers.Authorization = `Bearer ${response.data.accessToken}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
