import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";
import axios from "axios";

import { store } from "@/redux/store";
import { logIn, logOut } from "@/redux/features/authSlice";

// import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from "@/constants/api.constant";
// import { PERSIST_STORE_NAME } from "@/constants/app.constant";
// import deepParseJson from "@/utils/deepParseJson";
// import store, { signOutSuccess } from "../store";

const unauthorizedCode = [401, 403];
const isServer = typeof window === "undefined";
export const baseURL = process.env.BASE_URI || "http://localhost:8000/";
// export const baseURL =
//   process.env.BASE_URI || "https://dev-usmed-api.appskeeper.in/api/v1/";

// console.log('process.env.BASE_URI', process.env.BASE_URI);
export const BaseService = axios.create({
  timeout: 60000,
  baseURL: baseURL,
  // baseURL: 'http://localhost:8000/',
});

BaseService.interceptors.request.use(
  async (config) => {
    // console.log('config-headers', config.headers);
    const tokena = config.headers.Authorization?.toString()?.split(" ")[1];

    if (isServer) {
      const { cookies } = await import("next/headers");

      let token = cookies().get("accessToken")?.value;
      // console.log("access", token);

      token = tokena ? tokena : token;
      if (token) {
        config.headers["Authorization"] = `${"Bearer "}${token}`;
      }
    } else {
      const accessToken = Cookies.get("accessToken");

      accessToken
        ? (config.headers["Authorization"] = `${"Bearer "}${accessToken}`)
        : "";
    }

    config.headers["X-Api-Source-Token"] =
      "yWvBKRotGWtJgqSPgKeSgSVa/XnrPbWSv1vbKld7P0BQfy2HC9tXnp5Y?b7MPDN531vofyf!l/4DadnQ3hy3AlHQHUSox85L!aLAF?STH/uDv58hNnlf11z30192R!wW";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    const originalRequest = error.config;

    if (
      response &&
      unauthorizedCode.includes(response.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const accessToken = "";
      // if (isServer) {
      //   const { cookies } = await import("next/headers");
      //   const { redirect } = await import("next/navigation");
      //   const token = cookies().get("accessToken")?.value;
      //   await axios.post(
      //     `${baseURL}auth/logout`,
      //     {
      //       accessToken: token,
      //     },
      //     {
      //       withCredentials: true,
      //     }
      //   );
      //   store.dispatch(logOut());
      //   console.log("hi there");
      //   redirect("/signin");

      //   return BaseService(originalRequest);
      // } else {
      await axios.post(`${baseURL}auth/logout`, null, {
        withCredentials: true,
      });
      store.dispatch(logOut());
      // return BaseService(originalRequest);
      // }

      // console.log('accessToken', accessToken);
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
