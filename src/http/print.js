import axios from "axios";
import {
  API_BASE,
  QUESTIONNAIRES,
  PAYMENT,
  RESULT,
  PRINT,
  DEBT,
  DETAILS,
  ALL_IN_ONE,
  ALL,
  BALANCE,
} from "@/http/apiHttp";

// print questionnaire result --------------------------------
export const printResultQuestionnaire = async (title) => {
  const response = await axios.get(
    API_BASE + PRINT + QUESTIONNAIRES + RESULT + "/" + title
  );
  return response.data;
};

// print payment debt ------------------
// печатать одну квитанцию по конкретному помещению за последний месяц
export const printPdfDebtByApartment = async (object) => {
  const response = await axios.post(API_BASE + PRINT + PAYMENT + DEBT, object);
  return response.data;
};

// печатать квитанции для всех помещений за послений месяц
export const printPdfListDebtByApartment = async () => {
  const response = await axios.get(API_BASE + PRINT + PAYMENT + DEBT + ALL);
  return response.data;
};
// печатать квитанции для всех помещений за послений месяц в одном файле (для разноски по квартирам)
export const printAllToOnePdfDebtAllApartment = async () => {
  const response = await axios.get(
    API_BASE + PRINT + PAYMENT + DEBT + ALL_IN_ONE
  );
  return response.data;
};
// debt details --------------------
// печатать одну детализированную распечатку долга по конкретной квартире за всё время
export const printPdfDebtDetailsByApartment = async (apartment) => {
  const response = await axios.get(
    API_BASE + PRINT + PAYMENT + DEBT + DETAILS + "/" + apartment
  );
  return response.data;
};
// печатать детализированную распечатку долга за всё время для всех квартир на разных файлах
export const printPdfDebtDetailsAllApartment = async () => {
  const response = await axios.get(API_BASE + PRINT + PAYMENT + DEBT + DETAILS);
  return response.data;
};

// balance
// печатать debt balance
export const printPdfBalanceHouse = async () => {
  const response = await axios.get(API_BASE + PRINT + PAYMENT + DEBT + BALANCE);
  return response.data;
};
