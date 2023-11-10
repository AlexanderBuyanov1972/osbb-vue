import { authHttp } from "@/http/httpAxios";
import { RECORD, ALL, OWNERSHIP } from "@/http/apiHttp";

// ------------- one --------------------

export const createRecord = async (one) => {
  const response = await authHttp.post(RECORD, one);
  return response.data;
};

export const updateRecord = async (one) => {
  const response = await authHttp.put(RECORD, one);
  return response.data;
};

export const getRecord = async (id) => {
  const response = await authHttp.get(RECORD + "/" + id);
  return response.data;
};

export const deleteRecord = async (id) => {
  const response = await authHttp.delete(RECORD + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllRecord = async (list) => {
  const response = await authHttp.post(RECORD + ALL, list);
  return response.data;
};

export const updateAllRecord = async (list) => {
  const response = await authHttp.put(RECORD + ALL, list);
  return response.data;
};

export const getAllRecord = async () => {
  const response = await authHttp.get(RECORD + ALL);
  return response.data;
};

export const deleteAllRecord = async () => {
  const response = await authHttp.delete(RECORD + ALL);
  return response.data;
};

// other -------------------------

export const getRoomsAndClientsByOwnershipId = async (id) => {
  const response = await authHttp.get(RECORD + OWNERSHIP + "/" + id);
  return response.data;
};

export const getRecordByApartmentAndFullName = async (apartment, fullName) => {
  const response = await authHttp.get(
    RECORD + "/" + apartment + "/" + fullName
  );
  return response.data;
};

// deleteRecordByOwnerIdAndOwnershipId ------------
export const deleteRecordByOwnerIdAndOwnershipId = async (
  ownerId,
  ownershipId
) => {
  const response = await authHttp.delete(
    RECORD + "/" + ownerId + "/" + ownershipId
  );
  return response.data;
};
