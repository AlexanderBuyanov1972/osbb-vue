import axios from "axios";
import {
  API_BASE,
  OWNERSHIP,
  ROOM,
  ALL,
  APARTMENT,
  SUMMA_AREA_ROOMS,
  SUMMA_AREA_APARTMENT,
  SUMMA_AREA_NON_RESIDENTIAL_ROOM,
  COUNT_ROOMS,
  COUNT_APARTMENT,
  COUNT_NON_RESIDENTIAL_ROOM,
} from "@/http/apiHttp";

// ------------- one --------------------

export const createOwnership = async (one) => {
  const response = await axios.post(API_BASE + OWNERSHIP, one);
  return response.data;
};

export const updateOwnership = async (one) => {
  const response = await axios.put(API_BASE + OWNERSHIP, one);
  return response.data;
};

export const getOwnership = async (id) => {
  const response = await axios.get(API_BASE + OWNERSHIP + "/" + id);
  return response.data;
};

export const deleteOwnership = async (id) => {
  const response = await axios.delete(API_BASE + OWNERSHIP + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllOwnership = async (list) => {
  const response = await axios.post(API_BASE + OWNERSHIP + ALL, list);
  return response.data;
};

export const updateAllOwnership = async (list) => {
  const response = await axios.put(API_BASE + OWNERSHIP + ALL, list);
  return response.data;
};
export const getAllOwnership = async () => {
  const response = await axios.get(API_BASE + OWNERSHIP + ALL);
  return response.data;
};

export const deleteAllOwnership = async () => {
  const response = await axios.delete(API_BASE + OWNERSHIP + ALL);
  return response.data;
};

// ------------- summa areas ------------
// Общая площадь жилых и нежилых помещений

export const summaAreaRooms = async () => {
  const response = await axios.get(API_BASE + OWNERSHIP + SUMMA_AREA_ROOMS);
  return response.data;
};

// Площадь квартир
export const summaAreaApartment = async () => {
  const response = await axios.get(API_BASE + OWNERSHIP + SUMMA_AREA_APARTMENT);
  return response.data;
};

// Площадь нежилых помещений
export const summaAreaNonResidentialRoom = async () => {
  const response = await axios.get(
    API_BASE + OWNERSHIP + SUMMA_AREA_NON_RESIDENTIAL_ROOM
  );
  return response.data;
};

// ------------- count rooms -----------------

//  Общее количество помещений
export const countRooms = async () => {
  const response = await axios.get(API_BASE + OWNERSHIP + COUNT_ROOMS);
  return response.data;
};
// Количество квартир
export const countApartment = async () => {
  const response = await axios.get(API_BASE + OWNERSHIP + COUNT_APARTMENT);
  return response.data;
};
// Количество нежилых помещений
export const countNonResidentialRoom = async () => {
  const response = await axios.get(
    API_BASE + OWNERSHIP + COUNT_NON_RESIDENTIAL_ROOM
  );
  return response.data;
};
//--------------- apartment -----------------------

export const getOwnershipByApartment = async (apartment) => {
  const response = await axios.get(
    API_BASE + OWNERSHIP + APARTMENT + "/" + apartment
  );
  return response.data;
};

export const getRoomByApartment = async (apartment) => {
  const response = await axios.get(
    API_BASE + OWNERSHIP + ROOM + "/" + apartment
  );
  return response.data;
};
