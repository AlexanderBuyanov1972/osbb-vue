import { authHttp } from "@/http/httpAxios";
import { RECORD, ALL, OWNERSHIP, OWNER } from "@/http/apiHttp";

// one record --------------------

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

// all records ------------------

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

// other records -------------------------
// getAllRecordByOwnershipId -------------
export const getAllRecordByOwnershipId = async (id) => {
  const response = await authHttp.get(RECORD + OWNERSHIP + "/" + id);
  return response.data;
};
// getAllRecordByOwnerId -----------------
export const getAllRecordByOwnerId = async (id) => {
  const response = await authHttp.get(RECORD + OWNER + "/" + id);
  return response.data;
};
// getRecordByApartmentAndFullName -------
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
