import axios from "axios";
import {
  API_BASE,
  QUESTIONNAIRE,
  ALL,
  GENERATION,
  SELECT,
  TITLE,
  FULLNAME,
} from "@/http/apiHttp";

// select *****************************
export const getQuestionnaireByTitleAndFullname = async (title, fullname) => {
    const response = await axios.get(
      API_BASE + SELECT + TITLE + FULLNAME + "/" + title + "/" + fullname
    );
    return response.data;
  };