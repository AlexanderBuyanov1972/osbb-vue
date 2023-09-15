import axios from "axios";
import { API_BASE, PHOTO, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createPhoto = async (one) => {
  const response = await axios.post(API_BASE + PHOTO, one);
  return response.data;
};

export const updatePhoto = async (one) => {
  const response = await axios.put(API_BASE + PHOTO, one);
  return response.data;
};

export const getPhoto = async (id) => {
  const response = await axios.get(API_BASE + PHOTO + "/" + id);
  return response.data;
};

export const deletePhoto = async (id) => {
  const response = await axios.delete(API_BASE + PHOTO + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllPhoto = async (list) => {
  const response = await axios.post(API_BASE + PHOTO + ApiAll, list);
  return response.data;
};

export const updateAllPhoto = async (list) => {
  const response = await axios.put(API_BASE + PHOTO + ALL, list);
  return response.data;
};
export const getAllPhoto = async () => {
  const response = await axios.get(API_BASE + PHOTO + ALL);
  return response.data;
};

export const deleteAllPhoto = async () => {
  const response = await axios.delete(API_BASE + PHOTO + ALL);
  return response.data;
};
