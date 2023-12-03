import { authHttp } from "@/http/httpAxios";
import {
  SURVEYS,
  PAYMENT,
  RESULT,
  PRINT,
  DEBT,
  DETAILS,
  ALL_IN_ONE,
  ALL,
  BALANCE,
  NEW_BILL,
} from "@/http/apiHttp";

// print survey result --------------------------------
export const printResultSurvey = async (title) => {
  const response = await authHttp.get(PRINT + SURVEYS + RESULT + "/" + title);
  return response.data;
};

// print payment debt ------------------
// печатать одну квитанцию по конкретному помещению за последний месяц
export const printDebt = async (object) => {
  const response = await authHttp.post(PRINT + PAYMENT + DEBT, object);
  return response.data;
};

// печатать квитанции для всех помещений за послений месяц
export const printAllDebt = async () => {
  const response = await authHttp.get(PRINT + PAYMENT + DEBT + ALL);
  return response.data;
};
// печатать квитанции для всех помещений за послений месяц в одном файле (для разноски по квартирам)
export const printAllInOneDebt = async () => {
  const response = await authHttp.get(PRINT + PAYMENT + DEBT + ALL_IN_ONE);
  return response.data;
};
// debt details --------------------
// печатать одну детализированную распечатку долга по конкретной квартире за всё время
export const printDebtDetailsById = async (id) => {
  const response = await authHttp.get(
    PRINT + PAYMENT + DEBT + DETAILS + "/" + id
  );
  return response.data;
};
// печатать детализированную распечатку долга за всё время для всех квартир на разных файлах
export const printAllDebtDetails = async () => {
  const response = await authHttp.get(PRINT + PAYMENT + DEBT + DETAILS);
  return response.data;
};

// balance
// печатать долговой баланс дома по помещениям
export const printBalanceHouse = async () => {
  const response = await authHttp.get(PRINT + PAYMENT + DEBT + BALANCE);
  return response.data;
};
// печатать объявление о новых реквизитах по оплате за услуги ОСББ
export const printNewBill = async () => {
  const response = await authHttp.get(PRINT + PAYMENT + NEW_BILL);
  return response.data;
};
