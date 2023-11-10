import { http, authHttp, authRefreshHttp } from "@/http/httpAxios";
import {
  REGISTRATION,
  LOGIN,
  LOGOUT,
  CHECK,
  REFRESH,
  USER,
  AUTH,
} from "@/http/apiHttp";
// auth -------------------------------------------------
// create user
export const registration = async (object) => {
  return await http.post(AUTH + REGISTRATION, object);
};
// get tokens
export const login = async (object) => {
  return await http.post(AUTH + LOGIN, object);
};
// delete tokens
export const logout = async () => {
  return await authHttp.get(AUTH + LOGOUT);
};
// check user in database and get tokens
export const check = async (link) => {
  return await http.get(AUTH + CHECK + "/" + link);
};
// update tokens
export const refresh = async () => {
  return await authRefreshHttp.get(AUTH + REFRESH);
};
// user ------------------------------------------
export const updateUser = async (object) => {
  const response = await authHttp.put(USER, object);
  return response.data;
};

export const getUser = async (id) => {
  const response = await authHttp.get(USER + "/" + id);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await authHttp.delete(USER + "/" + id);
  return response.data;
};
