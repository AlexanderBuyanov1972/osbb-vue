import { authHttp } from "@/http/httpAxios";
import {
  SURVEYS,
  RESULT,
  ALL,
  APARTMENT,
  SELECT,
  TITLE,
  FULL_NAME,
  ID,
} from "@/http/apiHttp";

// all ---------------------------------------------------

export const createAllSurvey = async (list) => {
  const response = await authHttp.post(SURVEYS, list);
  return response.data;
};
export const updateAllSurvey = async (list) => {
  const response = await authHttp.put(SURVEYS, list);
  return response.data;
};
export const getAllSurvey = async () => {
  const response = await authHttp.get(SURVEYS);
  return response.data;
};
export const deleteAllSurveyByTitle = async (title) => {
  const response = await authHttp.delete(SURVEYS + "/" + title);
  return response.data;
};
export const deleteAllSurveyByOwnerIdAndOwnershipId = async (
  ownerId,
  ownershipId
) => {
  const response = await authHttp.delete(
    SURVEYS + "/" + ownerId + "/" + ownershipId
  );
  return response.data;
};

// result --------------------------------------------------

export const getResultSurvey = async (title) => {
  const response = await authHttp.get(SURVEYS + RESULT + "/" + title);
  return response.data;
};

// select *****************************
export const getAllSurveyByTitleAndFullName = async (title, fullName) => {
  const response = await authHttp.get(
    SELECT + TITLE + FULL_NAME + "/" + title + "/" + fullName
  );
  return response.data;
};

export const getAllSurveyByTitleAndFullNameAndApartment = async (
  title,
  fullName,
  apartment
) => {
  const response = await authHttp.get(
    SELECT +
      TITLE +
      FULL_NAME +
      APARTMENT +
      "/" +
      title +
      "/" +
      fullName +
      "/" +
      apartment
  );
  return response.data;
};

export const getAllSurveyByTitleAndById = async (title, id) => {
  const response = await authHttp.get(
    SELECT + TITLE + ID + "/" + title + "/" + id
  );
  return response.data;
};

export const getAllSurveyByTitle = async (title) => {
  const response = await authHttp.get(SELECT + TITLE + "/" + title);
  return response.data;
};

export const getAllTitleSurvey = async () => {
  const response = await authHttp.get(SELECT + TITLE + ALL);
  return response.data;
};
