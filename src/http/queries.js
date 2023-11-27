import { authHttp } from "@/http/httpAxios";
import { QUERIES, APARTMENT, HEAT_SUPPLY, ALL } from "@/http/apiHttp";

// возвращает отсортированный лист номер квартиры - тип отопления
export const queryListHeatSupplyForApartment = async () => {
  const response = await authHttp.get(QUERIES + APARTMENT + HEAT_SUPPLY);
  return response.data;
};
