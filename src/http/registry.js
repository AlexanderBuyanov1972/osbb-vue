import axios from "axios";
import {
  API_BASE,
  REGISTRY,
  OWNER,
  OWNERSHIP,
  CHARACTERISTICS,
} from "@/http/apiHttp";

export const getRegistryOwners = async () => {
  const response = await axios.get(API_BASE + REGISTRY + OWNER);
  return response.data;
};

export const getRegistryOwnerships = async () => {
  const response = await axios.get(API_BASE + REGISTRY + OWNERSHIP);
  return response.data;
};

export const getBuildingCharacteristics = async () => {
  const response = await axios.get(API_BASE + REGISTRY + CHARACTERISTICS);
  return response.data;
};
