import axios from "axios";
import {
  API_BASE,
  PAYMENT,
  ALL,
  BALANCE,
  DEBT,
  DETAILS,
  PRINT,
  ALL_IN_ONE,
} from "@/http/apiHttp";

// one ----------------------------------

export const createPayment = async (one) => {
  const response = await axios.post(API_BASE + PAYMENT, one);
  return response.data;
};

export const getPaymentComing = async (id) => {
  const response = await axios.get(API_BASE + PAYMENT + "/" + id);
  return response.data;
};

export const deletePaymentComing = async (id) => {
  const response = await axios.delete(API_BASE + PAYMENT + "/" + id);
  return response.data;
};

// all ----------------------------------

export const createAllPayment = async (list) => {
  const response = await axios.post(API_BASE + PAYMENT + ALL, list);
  return response.data;
};

export const getAllPayment = async () => {
  const response = await axios.get(API_BASE + PAYMENT + ALL);
  return response.data;
};

export const deleteAllPayment = async () => {
  const response = await axios.delete(API_BASE + PAYMENT + ALL);
  return response.data;
};

// get total summa of osbb -----------------------

export const getBalance = async () => {
  const response = await axios.get(API_BASE + PAYMENT + BALANCE);
  return response.data;
};
// get list debt by rooms after osbb -----------------------

export const getBalanceHouse = async () => {
  const response = await axios.get(API_BASE + PAYMENT + BALANCE + ALL);
  return response.data;
};
// get debt by apartment ---------
export const getDebtByApartment = async (apartment) => {
  const response = await axios.get(API_BASE + PAYMENT + DEBT + "/" + apartment);
  return response.data;
};
// get details debt by apartment ---------
export const getDetailsDebtByApartment = async (apartment) => {
  const response = await axios.get(
    API_BASE + PAYMENT + DEBT + DETAILS + "/" + apartment
  );
  return response.data;
};

// print ---------------------------------------------------
// печатать одну квитанцию по конкретному помещению за последний месяц
export const printPdfDebtByApartment = async (object) => {
  const response = await axios.post(API_BASE + PAYMENT + DEBT + PRINT, object);
  return response.data;
};
// печатать квитанции для всех помещений за послений месяц
export const printPdfListDebtByApartment = async () => {
  const response = await axios.get(API_BASE + PAYMENT + DEBT + PRINT + ALL);
  return response.data;
};
// печатать квитанции для всех помещений за послений месяц в одном файле (для разноски по квартирам)
export const printAllToOnePdfDebtAllApartment = async () => {
  const response = await axios.get(
    API_BASE + PAYMENT + DEBT + PRINT + ALL_IN_ONE
  );
  return response.data;
};
// debt details --------------------
// печатать одну детализированную распечатку долга по конкретной квартире за всё время
export const printPdfDebtDetailsByApartment = async (apartment) => {
  const response = await axios.get(
    API_BASE + PAYMENT + DEBT + PRINT + DETAILS + "/" + apartment
  );
  return response.data;
};
// печатать детализированную распечатку долга за всё время для всех квартир на разных файлах
export const printPdfDebtDetailsAllApartment = async () => {
  const response = await axios.get(API_BASE + PAYMENT + DEBT + PRINT + DETAILS);
  return response.data;
};
