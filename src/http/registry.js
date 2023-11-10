import { authHttp} from "@/http/httpAxios";
import { REGISTRY, OWNER, OWNERSHIP, CHARACTERISTICS } from "@/http/apiHttp";

export const getRegistryOwners = async () => {
  const response = await authHttp.get(REGISTRY + OWNER);
  return response.data;
};

export const getRegistryOwnerships = async () => {
  const response = await authHttp.get(REGISTRY + OWNERSHIP);
  return response.data;
};

export const getBuildingCharacteristics = async () => {
  const response = await authHttp.get(REGISTRY + CHARACTERISTICS);
  return response.data;
};
