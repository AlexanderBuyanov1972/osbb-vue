import { authHttp } from "@/http/httpAxios";
import { PHOTO, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createPhoto = async (one) => {
  const response = await authHttp.post(PHOTO, one);
  return response.data;
};

export const updatePhoto = async (one) => {
  const response = await authHttp.put(PHOTO, one);
  return response.data;
};

export const getPhoto = async (id) => {
  const response = await authHttp.get(PHOTO + "/" + id);
  return response.data;
};

export const deletePhoto = async (id) => {
  const response = await authHttp.delete(PHOTO + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllPhoto = async (list) => {
  const response = await authHttp.post(PHOTO + ALL, list);
  return response.data;
};

export const updateAllPhoto = async (list) => {
  const response = await authHttp.put(PHOTO + ALL, list);
  return response.data;
};
export const getAllPhoto = async () => {
  const response = await authHttp.get(PHOTO + ALL);
  return response.data;
};

export const deleteAllPhoto = async () => {
  const response = await authHttp.delete(PHOTO + ALL);
  return response.data;
};
