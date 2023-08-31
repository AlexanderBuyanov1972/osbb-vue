import axios from "axios";
import { API_BASE, PASSWORD, ALL } from "@/http/apiHttp";


// ------------- one --------------------

export const createPassword = async (one) => {
  const response = await axios.post(API_BASE + PASSWORD, one);
  return response.data;
};

export const updatePassword = async (one) => {
  const response = await axios.put(API_BASE + PASSWORD, one);
  return response.data;
};


export const getPassword = async (id) => {
  const response = await axios.get(API_BASE + PASSWORD + "/" + id);
  return response.data;
};

export const deletePassword = async (id) => {
    const response = await axios.delete(API_BASE + PASSWORD + "/" + id);
    return response.data;
  };

// -------------- all ------------------

export const createAllPassword = async (list) => {
  const response = await axios.post(API_BASE + PASSWORD + ApiAll, list);
  return response.data;
};

export const updateAlPassword = async (list) => {
  const response = await axios.put(API_BASE + PASSWORD + ALL, list);
  return response.data;
};
export const getAllPassword = async () => {
  const response = await axios.get(API_BASE + PASSWORD + ALL);
  return response.data;
};

export const deleteAllPassword = async () => {
  const response = await axios.delete(API_BASE + PASSWORD + ALL);
  return response.data;
};
