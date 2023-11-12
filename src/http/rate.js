import { authHttp } from "@/http/httpAxios";
import { RATE, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createRate = async (one) => {
  const response = await authHttp.post(RATE, one);
  return response.data;
};

export const updateRate = async (one) => {
  const response = await authHttp.put(RATE, one);
  return response.data;
};

export const getRate = async (id) => {
  const response = await authHttp.get(RATE + "/" + id);
  return response.data;
};

export const deleteRate = async (id) => {
  const response = await authHttp.delete(RATE + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllRate = async (list) => {
  const response = await authHttp.post(RATE + ALL, list);
  return response.data;
};

export const updateAllRate = async (list) => {
  const response = await authHttp.put(RATE + ALL, list);
  return response.data;
};

export const getAllRate = async () => {
  const response = await authHttp.get(RATE + ALL);
  return response.data;
};

export const deleteAllRate = async () => {
  const response = await authHttp.delete(RATE + ALL);
  return response.data;
};
// get rate by date -----------------------------------------

export const getRateByDate = async (id) => {
  const response = await authHttp.get(RATE + "/" + id);
  return response.data;
};
