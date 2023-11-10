import axios from "axios";
import { API_BASE } from "@/http/apiHttp";
import { getAccessToken, getRefreshToken } from "@/http/localStorage";
import { refresh } from "@/http/auth";

export const http = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-type": "application/json",
  },
});

export const authHttp = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-type": "application/json",
  },
});

export const authRefreshHttp = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-type": "application/json",
  },
});

// authorization request
authHttp.interceptors.request.use((config) => {
  if (config.headers) config.headers.Authorization = getAccessToken();
  return config;
});

// authorization refresh request
authRefreshHttp.interceptors.request.use((config) => {
  if (config.headers) config.headers.Authorization = getRefreshToken();
  return config;
});
// refresh request
authHttp.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await refresh();
        return authHttp.request(originalRequest);
      } catch (error) {
        console.log("User not authorized.");
      }
    }
    throw error;
  }
);
