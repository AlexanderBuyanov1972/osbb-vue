import axios from "axios";
import {
  API_BASE,
  ALL,
  APARTMENT,
  SELECT,
  TITLE,
  FULLNAME,
} from "@/http/apiHttp";

// select *****************************
export const getAllQuestionnaireByTitleAndFullName = async (
  title,
  fullName
) => {
  const response = await axios.get(
    API_BASE + SELECT + TITLE + FULLNAME + "/" + title + "/" + fullName
  );
  return response.data;
};
export const getAllQuestionnaireByTitleAndByApartment = async (
  title,
  apartment
) => {
  const response = await axios.get(
    API_BASE + SELECT + TITLE + APARTMENT + "/" + title + "/" + apartment
  );
  return response.data;
};

export const getAllQuestionnaireByTitle = async (title) => {
  const response = await axios.get(API_BASE + SELECT + TITLE + "/" + title);
  return response.data;
};

export const getAllTitleOfQuestionnaire = async () => {
  const response = await axios.get(API_BASE + SELECT + TITLE + ALL);
  return response.data;
};
