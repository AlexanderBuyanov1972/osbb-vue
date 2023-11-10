import { authHttp } from "@/http/httpAxios";
import { ADDRESS, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createAddress = async (one) => {
  const response = await authHttp.post(ADDRESS, one);
  return response.data;
};

export const updateAddress = async (one) => {
  const response = await authHttp.put(ADDRESS, one);
  return response.data;
};

export const getAddress = async (id) => {
  const response = await authHttp.get(ADDRESS + "/" + id);
  return response.data;
};
export const getAddressStart = async () => {
  const response = await authHttp.get(ADDRESS);
  return response.data;
};

export const deleteAddress = async (id) => {
  const response = await authHttp.delete(ADDRESS + "/" + id);
  return response.data;
};

export const getAddressByStreetHouseApartment = async (
  street,
  house,
  apartment
) => {
  const response = await authHttp.get(
    ADDRESS + "/" + street + "/" + house + "/" + apartment
  );
  return response.data;
};

// -------------- all ------------------

export const createAllAddress = async (list) => {
  const response = await authHttp.post(ADDRESS + ALL, list);
  return response.data;
};

export const updateAllAddress = async (list) => {
  const response = await authHttp.put(ADDRESS + ALL, list);
  return response.data;
};

export const getAllAddress = async () => {
  const response = await authHttp.get(ADDRESS + ALL);
  return response.data;
};

export const deleteAllAddress = async () => {
  const response = await authHttp.delete(ADDRESS + ALL);
  return response.data;
};
