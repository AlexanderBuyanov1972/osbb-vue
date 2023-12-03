import { authHttp } from "@/http/httpAxios";
import {
  OWNERSHIP,
  ALL,
  APARTMENT,
  SUMMA_AREA_ROOMS,
  SUMMA_AREA_APARTMENT,
  SUMMA_AREA_NON_RESIDENTIAL_ROOM,
  COUNT_ROOMS,
  COUNT_APARTMENT,
  COUNT_NON_RESIDENTIAL_ROOM,
  FULL_NAME,
  BILL,
} from "@/http/apiHttp";

// one ownership --------------------

export const createOwnership = async (one) => {
  const response = await authHttp.post(OWNERSHIP, one);
  return response.data;
};

export const updateOwnership = async (one) => {
  const response = await authHttp.put(OWNERSHIP, one);
  return response.data;
};

export const getOwnership = async (id) => {
  const response = await authHttp.get(OWNERSHIP + "/" + id);
  return response.data;
};

export const deleteOwnership = async (id) => {
  const response = await authHttp.delete(OWNERSHIP + "/" + id);
  return response.data;
};

// all ownerships ------------------

export const createAllOwnership = async (list) => {
  const response = await authHttp.post(OWNERSHIP + ALL, list);
  return response.data;
};

export const updateAllOwnership = async (list) => {
  const response = await authHttp.put(OWNERSHIP + ALL, list);
  return response.data;
};
export const getAllOwnership = async () => {
  const response = await authHttp.get(OWNERSHIP + ALL);
  return response.data;
};

export const deleteAllOwnership = async () => {
  const response = await authHttp.delete(OWNERSHIP + ALL);
  return response.data;
};

// ------------- summa areas ------------
// Общая площадь жилых и нежилых помещений

export const summaAreaRooms = async () => {
  const response = await authHttp.get(OWNERSHIP + SUMMA_AREA_ROOMS);
  return response.data;
};

// Площадь квартир
export const summaAreaApartment = async () => {
  const response = await authHttp.get(OWNERSHIP + SUMMA_AREA_APARTMENT);
  return response.data;
};

// Площадь нежилых помещений
export const summaAreaNonResidentialRoom = async () => {
  const response = await authHttp.get(
    OWNERSHIP + SUMMA_AREA_NON_RESIDENTIAL_ROOM
  );
  return response.data;
};

// ------------- count rooms -----------------

//  Общее количество помещений
export const countRooms = async () => {
  const response = await authHttp.get(OWNERSHIP + COUNT_ROOMS);
  return response.data;
};
// Количество квартир
export const countApartment = async () => {
  const response = await authHttp.get(OWNERSHIP + COUNT_APARTMENT);
  return response.data;
};
// Количество нежилых помещений
export const countNonResidentialRoom = async () => {
  const response = await authHttp.get(OWNERSHIP + COUNT_NON_RESIDENTIAL_ROOM);
  return response.data;
};
//--------------- apartment and fullname -----------------------

export const getAllOwnershipByApartment = async (apartment) => {
  const response = await authHttp.get(OWNERSHIP + APARTMENT + "/" + apartment);
  return response.data;
};

export const getAllBillByApartment = async (apartment) => {
  const response = await authHttp.get(
    OWNERSHIP + APARTMENT + BILL + "/" + apartment
  );
  return response.data;
};

export const getAllApartmentByFullName = async (fullName) => {
  const response = await authHttp.get(OWNERSHIP + FULL_NAME + "/" + fullName);
  return response.data;
};
export const getOwnershipByBill = async (bill) => {
  const response = await authHttp.get(OWNERSHIP + BILL + "/" + bill);
  return response.data;
};

export const getMapApartmentListIdAndBill = async () => {
  const response = await authHttp.get(OWNERSHIP + APARTMENT + BILL);
  return response.data;
};
