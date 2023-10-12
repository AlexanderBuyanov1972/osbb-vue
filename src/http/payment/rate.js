import axios from "axios";
import { API_BASE, RATE, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createRate = async (one) => {
  const response = await axios.post(API_BASE + RATE, one);
  return response.data;
};

export const updateRate = async (one) => {
  const response = await axios.put(API_BASE + RATE, one);
  return response.data;
};

export const getRate = async (id) => {
  const response = await axios.get(API_BASE + RATE + "/" + id);
  return response.data;
};

export const deleteRate = async (id) => {
  const response = await axios.delete(API_BASE + RATE + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllRate = async (list) => {
  const response = await axios.post(API_BASE + RATE + ALL, list);
  return response.data;
};

export const updateAllRate = async (list) => {
  const response = await axios.put(API_BASE + RATE + ALL, list);
  return response.data;
};

export const getAllRate = async () => {
  const response = await axios.get(API_BASE + RATE + ALL);
  return response.data;
};

export const deleteAllRate = async () => {
  const response = await axios.delete(API_BASE + RATE + ALL);
  return response.data;
};
// get rate by date -----------------------------------------

export const getRateByDate = async (id) => {
  const response = await axios.get(API_BASE + RATE + "/" + id);
  return response.data;
};