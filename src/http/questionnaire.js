import axios from "axios";
import { API_BASE, QUESTIONNAIRE, ALL } from "@/http/apiHttp";

// ------------- one --------------------

export const createQuestionnaire = async (one) => {
  const response = await axios.post(API_BASE + QUESTIONNAIRE, one);
  return response.data;
};

export const updateQuestionnaire = async (one) => {
  const response = await axios.put(API_BASE + QUESTIONNAIRE, one);
  return response.data;
};

export const getQuestionnaire = async (id) => {
  const response = await axios.get(API_BASE + QUESTIONNAIRE + "/" + id);
  return response.data;
};

export const deleteQuestionnaire = async (id) => {
  const response = await axios.delete(API_BASE + QUESTIONNAIRE + "/" + id);
  return response.data;
};

// -------------- all ------------------

export const createAllQuestionnaire = async (list) => {
  const response = await axios.post(API_BASE + QUESTIONNAIRE + ApiAll, list);
  return response.data;
};

export const updateAllQuestionnaire = async (list) => {
  const response = await axios.put(API_BASE + QUESTIONNAIRE + ALL, list);
  return response.data;
};
export const getAllQuestionnaire = async () => {
  const response = await axios.get(API_BASE + QUESTIONNAIRE + ALL);
  return response.data;
};

export const deleteAllQuestionnaire = async () => {
  const response = await axios.delete(API_BASE + QUESTIONNAIRE + ALL);
  return response.data;
};
