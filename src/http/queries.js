import { authHttp } from "@/http/httpAxios";
import { QUERIES, APARTMENT, HEAT_SUPPLY, REPORT } from "@/http/apiHttp";

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
