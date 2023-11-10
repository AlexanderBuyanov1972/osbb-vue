import { authHttp } from "@/http/httpAxios";
import { QUESTIONNAIRES, RESULT } from "@/http/apiHttp";

// all ---------------------------------------------------

export const createAllQuestionnaire = async (list) => {
  const response = await authHttp.post(QUESTIONNAIRES, list);
  return response.data;
};

export const updateAllQuestionnaire = async (list) => {
  const response = await authHttp.put(QUESTIONNAIRES, list);
  return response.data;
};
export const getAllQuestionnaire = async () => {
  const response = await authHttp.get(QUESTIONNAIRES);
  return response.data;
};

export const deleteAllQuestionnaireByTitle = async (title) => {
  const response = await authHttp.delete(QUESTIONNAIRES + "/" + title);
  return response.data;
};
export const deleteAllQuestionnaireByOwnerIdAndOwnershipId = async (
  ownerId,
  ownershipId
) => {
  const response = await authHttp.delete(
    QUESTIONNAIRES + "/" + ownerId + "/" + ownershipId
  );
  return response.data;
};

// result --------------------------------------------------

export const getResultQuestionnaire = async (title) => {
  const response = await authHttp.get(QUESTIONNAIRES + RESULT + "/" + title);
  return response.data;
};
