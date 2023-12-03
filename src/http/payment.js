import { authHttp } from "@/http/httpAxios";
import { PAYMENT, ALL, BALANCE, DEBT, DETAILS } from "@/http/apiHttp";

// PAYMENT ----------------------------------

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

//PAYMENT + ALL ----------------------------------

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

//PAYMENT + BALANCE -----------------------

export const getBalance = async () => {
  const response = await authHttp.get(PAYMENT + BALANCE);
  return response.data;
};

export const getBalanceHouse = async () => {
  const response = await authHttp.get(PAYMENT + BALANCE + ALL);
  return response.data;
};
//PAYMENT + DEBT --------------------------------------------------
export const getDebtById = async (id) => {
  const response = await authHttp.get(PAYMENT + DEBT + "/" + id);
  return response.data;
};

export const getDetailsDebtById = async (id) => {
  const response = await authHttp.get(PAYMENT + DEBT + DETAILS + "/" + id);
  return response.data;
};
