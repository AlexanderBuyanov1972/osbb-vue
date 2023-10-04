import axios from "axios";
import { API_BASE, SHARE, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createShare = async (one) => {
  const response = await axios.post(API_BASE + SHARE, one);
  return response.data;
};

export const editShare = async (one) => {
  const response = await axios.put(API_BASE + SHARE, one);
  return response.data;
};

export const getShare = async (id) => {
  const response = await axios.get(API_BASE + SHARE + "/" + id);
  return response.data;
};
export const getShareByApartmentAndFullName = async (apartment, fullName) => {
  const response = await axios.get(
    API_BASE + SHARE + "/" + apartment + "/" + fullName
  );
  return response.data;
};

export const deleteShare = async (id) => {
  const response = await axios.delete(API_BASE + SHARE + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllShare = async (list) => {
  const response = await axios.post(API_BASE + SHARE + ALL, list);
  return response.data;
};

export const updateAllShare = async (list) => {
  const response = await axios.put(API_BASE + SHARE + ALL, list);
  return response.data;
};

export const getAllShare = async () => {
  const response = await axios.get(API_BASE + SHARE + ALL);
  return response.data;
};

export const deleteAllShare = async () => {
  const response = await axios.delete(API_BASE + SHARE + ALL);
  return response.data;
};
// deleteShareByOwnerIdAndOwnershipId ------
export const deleteShareByOwnerIdAndOwnershipId = async (
  ownerId,
  ownershipId
) => {
  const response = await axios.delete(
    API_BASE + SHARE  + "/" + ownerId + "/" + ownershipId
  );
  return response.data;
};
