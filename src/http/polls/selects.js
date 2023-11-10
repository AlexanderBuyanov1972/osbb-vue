import { authHttp } from "@/http/httpAxios";
import { ALL, APARTMENT, SELECT, TITLE, FULL_NAME } from "@/http/apiHttp";

// select *****************************
export const getAllQuestionnaireByTitleAndFullName = async (
  title,
  fullName
) => {
  const response = await authHttp.get(
    SELECT + TITLE + FULL_NAME + "/" + title + "/" + fullName
  );
  return response.data;
};

export const getAllQuestionnaireByTitleAndFullNameAndApartment = async (
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

export const getAllQuestionnaireByTitleAndByApartment = async (
  title,
  apartment
) => {
  const response = await authHttp.get(
    SELECT + TITLE + APARTMENT + "/" + title + "/" + apartment
  );
  return response.data;
};

export const getAllQuestionnaireByTitle = async (title) => {
  const response = await authHttp.get(SELECT + TITLE + "/" + title);
  return response.data;
};

export const getAllTitleOfQuestionnaire = async () => {
  const response = await authHttp.get(SELECT + TITLE + ALL);
  return response.data;
};
