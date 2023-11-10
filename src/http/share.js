import { SHARE, ALL } from "@/http/apiHttp";
import { authHttp } from "@/http/httpAxios";

// ------------- one --------------------

export const createShare = async (one) => {
  const response = await authHttp.post(SHARE, one);
  return response.data;
};

export const editShare = async (one) => {
  const response = await authHttp.put(SHARE, one);
  return response.data;
};

export const getShare = async (id) => {
  const response = await authHttp.get(SHARE + "/" + id);
  return response.data;
};
export const getShareByApartmentAndFullName = async (apartment, fullName) => {
  const response = await authHttp.get(SHARE + "/" + apartment + "/" + fullName);
  return response.data;
};

export const deleteShare = async (id) => {
  const response = await authHttp.delete(SHARE + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllShare = async (list) => {
  const response = await authHttp.post(SHARE + ALL, list);
  return response.data;
};

export const updateAllShare = async (list) => {
  const response = await authHttp.put(SHARE + ALL, list);
  return response.data;
};

export const getAllShare = async () => {
  const response = await authHttp.get(SHARE + ALL);
  return response.data;
};

export const deleteAllShare = async () => {
  const response = await authHttp.delete(SHARE + ALL);
  return response.data;
};
// deleteShareByOwnerIdAndOwnershipId ------
export const deleteShareByOwnerIdAndOwnershipId = async (
  ownerId,
  ownershipId
) => {
  const response = await authHttp.delete(
    SHARE + "/" + ownerId + "/" + ownershipId
  );
  return response.data;
};
