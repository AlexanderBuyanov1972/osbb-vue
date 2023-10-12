import axios from "axios";
import { API_BASE, ROLE, ALL } from "@/http/apiHttp";


// ------------- one --------------------

export const createRole = async (one) => {
  const response = await axios.post(API_BASE + ROLE, one);
  return response.data;
};

export const updateRole = async (one) => {
  const response = await axios.put(API_BASE + ROLE, one);
  return response.data;
};


export const getRole = async (id) => {
  const response = await axios.get(API_BASE + ROLE + "/" + id);
  return response.data;
};

export const deleteRole = async (id) => {
    const response = await axios.delete(API_BASE + ROLE + "/" + id);
    return response.data;
  };

// -------------- all ------------------

export const createAllRole = async (list) => {
  const response = await axios.post(API_BASE + ROLE + ApiAll, list);
  return response.data;
};

export const updateAllRole = async (list) => {
  const response = await axios.put(API_BASE + ROLE + ALL, list);
  return response.data;
};
export const getAllRole = async () => {
  const response = await axios.get(API_BASE + ROLE + ALL);
  return response.data;
};

export const deleteAllRole = async () => {
  const response = await axios.delete(API_BASE + ROLE + ALL);
  return response.data;
};
