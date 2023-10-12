import axios from "axios";
import { API_BASE, USER, ALL } from "@/http/apiHttp";


// ------------- one --------------------

export const createUser = async (one) => {
  const response = await axios.post(API_BASE + USER, one);
  return response.data;
};

export const updateUser = async (one) => {
  const response = await axios.put(API_BASE + USER, one);
  return response.data;
};


export const getUser = async (id) => {
  const response = await axios.get(API_BASE + USER + "/" + id);
  return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(API_BASE + USER + "/" + id);
    return response.data;
  };

// -------------- all ------------------

export const createAllUser = async (list) => {
  const response = await axios.post(API_BASE + USER + ApiAll, list);
  return response.data;
};

export const updateAllUser = async (list) => {
  const response = await axios.put(API_BASE + USER + ALL, list);
  return response.data;
};
export const getAllUser = async () => {
  const response = await axios.get(API_BASE + USER + ALL);
  return response.data;
};

export const deleteAllUser = async () => {
  const response = await axios.delete(API_BASE + USER + ALL);
  return response.data;
};
