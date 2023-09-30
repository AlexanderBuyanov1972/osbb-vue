import axios from "axios";
import { API_BASE, ADDRESS, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createAddress = async (one) => {
  const response = await axios.post(API_BASE + ADDRESS, one);
  return response.data;
};

export const updateAddress = async (one) => {
  const response = await axios.put(API_BASE + ADDRESS, one);
  return response.data;
};

export const getAddress = async (id) => {
  const response = await axios.get(API_BASE + ADDRESS + "/" + id);
  return response.data;
};

export const deleteAddress = async (id) => {
  const response = await axios.delete(API_BASE + ADDRESS + "/" + id);
  return response.data;
};

export const getAddressByStreetHouseApartment = async (
  street,
  house,
  apartment
) => {
  const response = await axios.get(
    API_BASE + ADDRESS + "/" + street + "/" + house + "/" + apartment
  );
  return response.data;
};

// -------------- all ------------------

export const createAllAddress = async (list) => {
  const response = await axios.post(API_BASE + ADDRESS + ALL, list);
  return response.data;
};

export const updateAllAddress = async (list) => {
  const response = await axios.put(API_BASE + ADDRESS + ALL, list);
  return response.data;
};

export const getAllAddress = async () => {
  const response = await axios.get(API_BASE + ADDRESS + ALL);
  return response.data;
};

export const deleteAllAddress = async () => {
  const response = await axios.delete(API_BASE + ADDRESS + ALL);
  return response.data;
};
