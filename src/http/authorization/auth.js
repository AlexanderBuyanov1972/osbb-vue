import axios from "axios";
import { API_BASE, REGISTRATION, LOGIN, LOGOUT } from "@/http/apiHttp";

export const registration = async (one) => {
  const response = await axios.post(API_BASE + REGISTRATION, one);
  return response.data;
};

export const login = async (one) => {
  const response = await axios.post(API_BASE + LOGIN, one);
  return response.data;
};

export const logout = async () => {
  const response = await axios.get(API_BASE + LOGOUT);
  return response.data;
};
