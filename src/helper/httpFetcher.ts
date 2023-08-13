import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";
import axios from "axios";
import { env } from "@/env.mjs";
// import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from "@/constants/api.constant";
// import { PERSIST_STORE_NAME } from "@/constants/app.constant";
// import deepParseJson from "@/utils/deepParseJson";
// import store, { signOutSuccess } from "../store";

const unauthorizedCode = [401];

export const BaseService = axios.create({
  timeout: 60000,
  //   baseURL: env.BASE_URI,
  baseURL: "http://localhost:8000/",
});

BaseService.interceptors.request.use(
  (config) => {
    let accessToken = Cookies.get("accessToken");

    // let accessToken = (persistData as any).auth.session.token;

    // if (!accessToken) {
    //   const { auth } = store.getState();
    //   accessToken = auth.session.token;
    // }

    if (accessToken) {
      config.headers["Authorization"] = `${"Bearer "}${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response && unauthorizedCode.includes(response.status)) {
      //   store.dispatch(signOutSuccess());
    }

    return Promise.reject(error);
  }
);

const ApiService = {
  fetchData<Response = unknown, Request = Record<string, unknown>>(
    param: AxiosRequestConfig<Request>
  ) {
    return new Promise<AxiosResponse<Response>>((resolve, reject) => {
      BaseService(param)
        .then((response: AxiosResponse<Response>) => {
          resolve(response);
        })
        .catch((errors: AxiosError) => {
          reject(errors);
        });
    });
  },
};

export default ApiService;
