import { authHttp } from "@/http/httpAxios";
import {
  QUERIES,
  APARTMENT,
  HEAT_SUPPLY,
  REPORT,
  BILL,
  FULL_NAME,
  PAYMENT,
  NEW_BILL,
  DEBT,
  BALANCE,
} from "@/http/apiHttp";

// возвращает отсортированный лист номер квартиры - тип отопления
export const queryListHeatSupplyForApartment = async () => {
  const response = await authHttp.get(QUERIES + APARTMENT + HEAT_SUPPLY);
  return response.data;
};
// Отчёт о деятельности ОСББ за ноябрь 2023 года
export const queryReport_2023_11 = async () => {
  const response = await authHttp.get(QUERIES + REPORT);
  return response.data;
};
// Список жильцов дома (помещение №, лицевой счёт, ФИО, номер телефона)
export const queryListApartmentBillFullNamePhoneNumber = async () => {
  const response = await authHttp.get(QUERIES + APARTMENT + BILL + FULL_NAME);
  return response.data;
};
// печатать объявление о новых реквизитах по оплате за услуги ОСББ
export const queryNewBill = async () => {
  const response = await authHttp.get(QUERIES + PAYMENT + NEW_BILL);
  return response.data;
};
// печатать долговой баланс дома по помещениям
export const queryBalanceHouse = async () => {
  const response = await authHttp.get(QUERIES + PAYMENT + DEBT + BALANCE);
  return response.data;
};
