import { authHttp } from "@/http/httpAxios";
import { VEHICLE, ALL } from "@/http/apiHttp";

// one --------------------------------------------

export const createVehicle = async (one) => {
  const response = await authHttp.post(VEHICLE, one);
  return response.data;
};

export const updateVehicle = async (one) => {
  const response = await authHttp.put(VEHICLE, one);
  return response.data;
};

export const getVehicle = async (id) => {
  const response = await authHttp.get(VEHICLE + "/" + id);
  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await authHttp.delete(VEHICLE + "/" + id);
  return response.data;
};

// all -------------------------------------------------

export const createAllVehicle = async (list) => {
  const response = await authHttp.post(VEHICLE + ALL, list);
  return response.data;
};

export const updateAllVehicle = async (list) => {
  const response = await authHttp.put(VEHICLE + ALL, list);
  return response.data;
};
export const getAllVehicle = async () => {
  const response = await authHttp.get(VEHICLE + ALL);
  return response.data;
};

export const deleteAllVehicle = async () => {
  const response = await authHttp.delete(VEHICLE + ALL);
  return response.data;
};
