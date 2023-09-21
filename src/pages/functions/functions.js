import {
  arrayTypeRoom,
  arrayNumberRooms,
  arrayLoggia,
  arrayGender,
  arrayFamilyStatus,
  arrayQuestionnaire,
  arrayAnswer,
} from "@/pages/functions/arraysOfData";

// ------------ show fields objects  arrays ---------------

export const showGender = (value) => {
  try {
    return arrayGender.find((el) => el.value == value).name;
  } catch (error) {
    return "";
  }
};
export const showFamilyStatus = (value) => {
  try {
    return arrayFamilyStatus.find((el) => el.value == value).name;
  } catch (error) {
    return "";
  }
};
export const showLoggia = (value) => {
  try {
    return arrayLoggia.find((el) => el.value === value).name;
  } catch (error) {
    return "";
  }
};
export const showNumberRooms = (value) => {
  try {
    return arrayNumberRooms.find((el) => el.value == value).name;
  } catch (error) {
    return "";
  }
};
export const showTypeRoom = (value) => {
  try {
    return arrayTypeRoom.find((el) => el.value == value).name;
  } catch (error) {
    return "";
  }
};
export const showTypeAnswer = (value) => {
  try {
    return arrayAnswer.find((el) => el.value == value).name;
  } catch (error) {
    return "";
  }
};

// ------------ get Element of array by --------------------

export const getElementArrayByValue = (array, value) => {
  try {
    return array.find((el) => el.value == value);
  } catch (error) {
    return array[0];
  }
};

export const getElementArrayByName = (array, name) => {
  try {
    return array.find((el) => el.name == name);
  } catch (error) {
    return array[0];
  }
};

// ------------------ get Name Element of array by Value -------

export const getNameByValue = (array, value) => {
  try {
    return array.find((el) => el.value === value).name;
  } catch (error) {
    return "";
  }
};

// ------------------ get Value Element of array by Name -------

export const getValueByName = (array, name) => {
  try {
    return array.find((el) => el.name === name).value;
  } catch (error) {
    return "";
  }
};

// получение строки адресса из объекта
export const mapAddressToLineAddress = (address) => {
  return (
    address.zipCode +
    ",  " +
    address.country +
    ",  " +
    address.region +
    ",  " +
    address.city +
    ",  " +
    address.street +
    ",  дом № " +
    address.house +
    ",  подъезд № " +
    address.entrance +
    ",  кв. № " +
    address.apartment
  );
};
// получение строки ФИО из объекта
export const mapOwnerToLineFullNamesOwner = (fio) => {
  return fio.lastName + " " + fio.firstName + " " + fio.secondName;
};

// слияние двух массивов и удаление одинаковых сообщений.

export const mergingTwoArraysAndRemovingIdenticalMessages = (arr1, arr2) => {
  let result = [...arr1];
  arr2.forEach((el) => {
    if (!result.includes(el)) result.unshift(el);
  });
  return result;
};

// подсветка незаполненых полей

export const checkFilling = (field) => {
  return field == undefined || field == null || field == "" || field == 0
    ? ["item", "danger"]
    : ["item"];
};
