import axios from "axios";
import { API_BASE, RECORD, ALL , OWNERSHIP, OWNER} from "@/http/apiHttp";

// ------------- one --------------------

export const createRecord = async (one) => {
  const response = await axios.post(API_BASE + RECORD, one);
  return response.data;
};

export const updateRecord = async (one) => {
  const response = await axios.put(API_BASE + RECORD, one);
  return response.data;
};

export const getRecord = async (id) => {
  const response = await axios.get(API_BASE + RECORD + "/" + id);
  return response.data;
};

export const deleteRecord = async (id) => {
  const response = await axios.delete(API_BASE + RECORD + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllRecord = async (list) => {
  const response = await axios.post(API_BASE + RECORD + ALL, list);
  return response.data;
};

export const updateAllRecord = async (list) => {
  const response = await axios.put(API_BASE + RECORD + ALL, list);
  return response.data;
};

export const getAllRecord = async () => {
  const response = await axios.get(API_BASE + RECORD + ALL);
  return response.data;
};

export const deleteAllRecord = async () => {
  const response = await axios.delete(API_BASE + RECORD + ALL);
  return response.data;
};

// other -------------------------

export const getRoomsAndClientsByOwnershipId = async (id) => {
  const response = await axios.get(API_BASE + RECORD + OWNERSHIP + "/" + id);
  return response.data;
};


export const getRecordByApartmentAndFullName = async (apartment, fullName) => {
  const response = await axios.get(API_BASE + RECORD +  "/" + apartment + "/" + fullName);
  return response.data;
};