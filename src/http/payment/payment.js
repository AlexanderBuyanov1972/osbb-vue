import axios from "axios";
import {
  API_BASE,
  PAYMENT,
  ALL,
  BALANCE,
  DEBT,
  DETAILS,
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