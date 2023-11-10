import { authHttp } from "@/http/httpAxios";
import { PLACE_WORK, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createPlaceWork = async (one) => {
  const response = await authHttp.post(PLACE_WORK, one);
  return response.data;
};

export const updatePlaceWork = async (one) => {
  const response = await authHttp.put(PLACE_WORK, one);
  return response.data;
};

export const getPlaceWork = async (id) => {
  const response = await authHttp.get(PLACE_WORK + "/" + id);
  return response.data;
};

export const deletePlaceWork = async (id) => {
  const response = await authHttp.delete(PLACE_WORK + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllPlaceWork = async (list) => {
  const response = await authHttp.post(PLACE_WORK + ALL, list);
  return response.data;
};

export const updateAllPlaceWork = async (list) => {
  const response = await authHttp.put(PLACE_WORK + ALL, list);
  return response.data;
};
export const getAllPlaceWork = async () => {
  const response = await authHttp.get(PLACE_WORK + ALL);
  return response.data;
};

export const deleteAllPlaceWork = async () => {
  const response = await authHttp.delete(PLACE_WORK + ALL);
  return response.data;
};
