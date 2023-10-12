import axios from "axios";
import { API_BASE, VEHICLE, ALL } from "@/http/apiHttp";

// one --------------------------------------------

export const createVehicle = async (one) => {
  const response = await axios.post(API_BASE + VEHICLE, one);
  return response.data;
};

export const updateVehicle = async (one) => {
  const response = await axios.put(API_BASE + VEHICLE, one);
  return response.data;
};

export const getVehicle = async (id) => {
  const response = await axios.get(API_BASE + VEHICLE + "/" + id);
  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await axios.delete(API_BASE + VEHICLE + "/" + id);
  return response.data;
};

// all -------------------------------------------------

export const createAllVehicle = async (list) => {
  const response = await axios.post(API_BASE + VEHICLE + ALL, list);
  return response.data;
};

export const updateAllVehicle = async (list) => {
  const response = await axios.put(API_BASE + VEHICLE + ALL, list);
  return response.data;
};
export const getAllVehicle = async () => {
  const response = await axios.get(API_BASE + VEHICLE + ALL);
  return response.data;
};

export const deleteAllVehicle = async () => {
  const response = await axios.delete(API_BASE + VEHICLE + ALL);
  return response.data;
};
