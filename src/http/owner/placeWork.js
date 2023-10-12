import axios from "axios";
import { API_BASE, PLACE_WORK, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createPlaceWork = async (one) => {
  const response = await axios.post(API_BASE + PLACE_WORK, one);
  return response.data;
};

export const updatePlaceWork = async (one) => {
  const response = await axios.put(API_BASE + PLACE_WORK, one);
  return response.data;
};

export const getPlaceWork = async (id) => {
  const response = await axios.get(API_BASE + PLACE_WORK + "/" + id);
  return response.data;
};

export const deletePlaceWork = async (id) => {
  const response = await axios.delete(API_BASE + PLACE_WORK + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllPlaceWork = async (list) => {
  const response = await axios.post(API_BASE + PLACE_WORK + ALL, list);
  return response.data;
};

export const updateAllPlaceWork = async (list) => {
  const response = await axios.put(API_BASE + PLACE_WORK + ALL, list);
  return response.data;
};
export const getAllPlaceWork = async () => {
  const response = await axios.get(API_BASE + PLACE_WORK + ALL);
  return response.data;
};

export const deleteAllPlaceWork = async () => {
  const response = await axios.delete(API_BASE + PLACE_WORK + ALL);
  return response.data;
};
