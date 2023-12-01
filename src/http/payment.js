import { authHttp } from "@/http/httpAxios";
import {
  PAYMENT,
  ALL,
  BALANCE,
  DEBT,
  DETAILS,
  BILL,
  APARTMENT,
} from "@/http/apiHttp";

// one ----------------------------------

export const createPayment = async (one) => {
  const response = await authHttp.post(PAYMENT, one);
  return response.data;
};

export const getPaymentComing = async (id) => {
  const response = await authHttp.get(PAYMENT + "/" + id);
  return response.data;
};

export const deletePaymentComing = async (id) => {
  const response = await authHttp.delete(PAYMENT + "/" + id);
  return response.data;
};

// all ----------------------------------

export const createAllPayment = async (list) => {
  const response = await authHttp.post(PAYMENT + ALL, list);
  return response.data;
};

export const getAllPayment = async () => {
  const response = await authHttp.get(PAYMENT + ALL);
  return response.data;
};

export const deleteAllPayment = async () => {
  const response = await authHttp.delete(PAYMENT + ALL);
  return response.data;
};

// get total summa of osbb -----------------------

export const getBalance = async () => {
  const response = await authHttp.get(PAYMENT + BALANCE);
  return response.data;
};
// get list debt by rooms after osbb -----------------------

export const getBalanceHouse = async () => {
  const response = await authHttp.get(PAYMENT + BALANCE + ALL);
  return response.data;
};
// get debt by apartment ---------
export const getDebtByApartment = async (apartment) => {
  const response = await authHttp.get(
    PAYMENT + DEBT + APARTMENT + "/" + apartment
  );
  return response.data;
};
// get debt by bill ---------
export const getDebtByBill = async (bill) => {
  const response = await authHttp.get(PAYMENT + DEBT + BILL + "/" + bill);
  return response.data;
};
// get details debt by apartment ---------
export const getDetailsDebtByApartment = async (apartment) => {
  const response = await authHttp.get(
    PAYMENT + DEBT + DETAILS + "/" + apartment
  );
  return response.data;
};
