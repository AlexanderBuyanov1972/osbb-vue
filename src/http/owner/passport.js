import { authHttp } from "@/http/httpAxios";
import { PASSPORT, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createPassport = async (one) => {
  const response = await authHttp.post(PASSPORT, one);
  return response.data;
};

export const updatePassport = async (one) => {
  const response = await authHttp.put(PASSPORT, one);
  return response.data;
};

export const getPassport = async (id) => {
  const response = await authHttp.get(PASSPORT + "/" + id);
  return response.data;
};

export const deletePassport = async (id) => {
  const response = await authHttp.delete(PASSPORT + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllPassport = async (list) => {
  const response = await authHttp.post(PASSPORT + ApiAll, list);
  return response.data;
};

export const updateAlPassport = async (list) => {
  const response = await authHttp.put(PASSPORT + ALL, list);
  return response.data;
};
export const getAllPassport = async () => {
  const response = await authHttp.get(PASSPORT + ALL);
  return response.data;
};

export const deleteAllPassport = async () => {
  const response = await authHttp.delete(PASSPORT + ALL);
  return response.data;
};
