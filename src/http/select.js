import axios from "axios";
import { API_BASE, SELECT, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createSelect = async (one) => {
  const response = await axios.post(API_BASE + SELECT, one);
  return response.data;
};

export const updateSelect = async (one) => {
  const response = await axios.put(API_BASE + SELECT, one);
  return response.data;
};

export const getSelect = async (id) => {
  const response = await axios.get(API_BASE + SELECT + "/" + id);
  return response.data;
};

export const deleteSelect = async (id) => {
  const response = await axios.delete(API_BASE + SELECT + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllSelect = async (list) => {
  const response = await axios.post(API_BASE + SELECT + ApiAll, list);
  return response.data;
};

export const updateAllSelect = async (list) => {
  const response = await axios.put(API_BASE + SELECT + ALL, list);
  return response.data;
};
export const getAllSelect = async () => {
  const response = await axios.get(API_BASE + SELECT + ALL);
  return response.data;
};

export const deleteAllSelect = async () => {
  const response = await axios.delete(API_BASE + SELECT + ALL);
  return response.data;
};
