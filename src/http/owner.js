import axios from "axios";
import { API_BASE, OWNER, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createOwner = async (one) => {
  const response = await axios.post(API_BASE + OWNER, one);
  return response.data;
};

export const updateOwner = async (one) => {
  const response = await axios.put(API_BASE + OWNER, one);
  return response.data;
};

export const getOwner = async (id) => {
  const response = await axios.get(API_BASE + OWNER + "/" + id);
  return response.data;
};

export const deleteOwner = async (id) => {
  const response = await axios.delete(API_BASE + OWNER + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllOwner = async (list) => {
  const response = await axios.post(API_BASE + OWNER + ALL, list);
  return response.data;
};

export const updateAllOwner = async (list) => {
  const response = await axios.put(API_BASE + OWNER + ALL, list);
  return response.data;
};
export const getAllOwner = async () => {
  const response = await axios.get(API_BASE + OWNER + ALL);
  return response.data;
};
export const deleteAllOwner = async () => {
  const response = await axios.delete(API_BASE + OWNER + ALL);
  return response.data;
};
