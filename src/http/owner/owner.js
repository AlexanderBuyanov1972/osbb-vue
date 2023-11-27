import { authHttp } from "@/http/httpAxios";
import { OWNER, ALL, COUNT, FULL_NAME } from "@/http/apiHttp";

// one owner --------------------------

export const createOwner = async (one) => {
  const response = await authHttp.post(OWNER, one);
  return response.data;
};

export const updateOwner = async (one) => {
  const response = await authHttp.put(OWNER, one);
  return response.data;
};

export const getOwner = async (id) => {
  const response = await authHttp.get(OWNER + "/" + id);
  return response.data;
};

export const deleteOwner = async (id) => {
  const response = await authHttp.delete(OWNER + "/" + id);
  return response.data;
};

// all owners ---------------------------

export const createAllOwner = async (list) => {
  const response = await authHttp.post(OWNER + ALL, list);
  return response.data;
};

export const updateAllOwner = async (list) => {
  const response = await authHttp.put(OWNER + ALL, list);
  return response.data;
};
export const getAllOwner = async () => {
  const response = await authHttp.get(OWNER + ALL);
  return response.data;
};
export const deleteAllOwner = async () => {
  const response = await authHttp.delete(OWNER + ALL);
  return response.data;
};

// count owners --------------------------------

export const countOwners = async () => {
  const response = await authHttp.get(OWNER + COUNT);
  return response.data;
};

// owners by full name ----------------------------

export const getOwnerByFullName = async (fullName) => {
  const response = await authHttp.get(OWNER + FULL_NAME + "/" + fullName);
  return response.data;
};
