import axios from "axios";
import { API_BASE, QUESTIONNAIRES, RESULT} from "@/http/apiHttp";

// all ---------------------------------------------------

export const createAllQuestionnaire = async (list) => {
  const response = await axios.post(API_BASE + QUESTIONNAIRES, list);
  return response.data;
};

export const updateAllQuestionnaire = async (list) => {
  const response = await axios.put(API_BASE + QUESTIONNAIRES, list);
  return response.data;
};
export const getAllQuestionnaire = async () => {
  const response = await axios.get(API_BASE + QUESTIONNAIRES);
  return response.data;
};

export const deleteAllQuestionnaireByTitle = async (title) => {
  const response = await axios.delete(API_BASE + QUESTIONNAIRES + "/" + title);
  return response.data;
};
export const deleteAllQuestionnaireByOwnerIdAndOwnershipId = async (
  ownerId,
  ownershipId
) => {
  const response = await axios.delete(
    API_BASE + QUESTIONNAIRES + "/" + ownerId + "/" + ownershipId
  );
  return response.data;
};

// result --------------------------------------------------

export const getResultQuestionnaire = async (title) => {
  const response = await axios.get(
    API_BASE + QUESTIONNAIRES + RESULT + "/" + title
  );
  return response.data;
};