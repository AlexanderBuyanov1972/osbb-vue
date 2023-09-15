import axios from "axios";
import { API_BASE, PASSPORT, ALL } from "@/http/apiHttp";


// ------------- one --------------------

export const createPassport = async (one) => {
  const response = await axios.post(API_BASE + PASSPORT, one);
  return response.data;
};

export const updatePassport = async (one) => {
  const response = await axios.put(API_BASE + PASSPORT, one);
  return response.data;
};


export const getPassport = async (id) => {
  const response = await axios.get(API_BASE + PASSPORT + "/" + id);
  return response.data;
};

export const deletePassport = async (id) => {
    const response = await axios.delete(API_BASE + PASSPORT + "/" + id);
    return response.data;
  };

// -------------- all ------------------

export const createAllPassport = async (list) => {
  const response = await axios.post(API_BASE + PASSPORT + ApiAll, list);
  return response.data;
};

export const updateAlPassport = async (list) => {
  const response = await axios.put(API_BASE + PASSPORT + ALL, list);
  return response.data;
};
export const getAllPassport = async () => {
  const response = await axios.get(API_BASE + PASSPORT + ALL);
  return response.data;
};

export const deleteAllPassport = async () => {
  const response = await axios.delete(API_BASE + PASSPORT + ALL);
  return response.data;
};
