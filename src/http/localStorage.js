export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const LINK = "LINK";
export const ID = "ID";


export const setAccessToken = (value) => {
  localStorage.setItem(ACCESS_TOKEN, value);
};

export const setRefreshToken = (value) => {
  localStorage.setItem(REFRESH_TOKEN, value);
};

export const setLink = (value) => {
  localStorage.setItem(LINK, value);
};

export const setID = (value) => {
  localStorage.setItem(ID, value);
};

export const getAccessToken = () => {
  let token = localStorage.getItem(ACCESS_TOKEN);
  return token !== null && token.length > 7 && token !== undefined ? token : "";
};

export const getRefreshToken = () => {
  let token = localStorage.getItem(REFRESH_TOKEN);
  return token !== null && token.length > 7 && token !== undefined ? token : "";
};

export const getLink = () => {
  let link = localStorage.getItem(LINK);
  return link !== null && link.length > 0 && link !== undefined ? link : "";
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

export const removeLink = () => {
  localStorage.removeItem(LINK);
};
