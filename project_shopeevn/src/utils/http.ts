import axios, { AxiosError, type AxiosInstance } from "axios";
import HttpStatusCode from "../constants/httpStatusCode.enum";
import { toast } from "react-toastify";
import {
  clearLs,
  getAccessTokenFromLS,
  setAccesTokenToLS,
  setProfileToLs,
} from "./auth";
import path from "../constants/path";
import { AuthResponse } from "../types/auth.type";

class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = getAccessTokenFromLS();
    this.instance = axios.create({
      baseURL: "https://api-ecom.duthanhduoc.com/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse;
          this.accessToken = data.data.access_token;
          setAccesTokenToLS(this.accessToken);
          setProfileToLs(data.data.user);
        } else if (url === path.logout) {
          this.accessToken = "";
          clearLs();
        }

        return response;
      },
      function (error: AxiosError) {
        if (error.response?.status === HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;
          toast.error(message);
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
