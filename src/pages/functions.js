import {
  arrayTypeRoom,
  arrayNumberRooms,
  arrayDocumentConfirmsRightOwn,
  arrayLoggia,
  arrayGender,
  arrayFamilyStatus,
} from "@/pages/arraysOfData";

export const getElementByValue = (array, value) => {
  return array.find((el) => el.value === value);
};
export const getElementByName = (array, name) => {
  return array.find((el) => el.name === name);
};
export const getElementById = (array, id) => {
  return array.find((el) => el.id === id);
};

export const mapOwnershipValuesToRead = (ownership, photo) => {
  ownership.numberRooms = getElementByValue(
    arrayNumberRooms,
    ownership.numberRooms
  ).name;
  ownership.typeRoom = getElementByValue(
    arrayTypeRoom,
    ownership.typeRoom
  ).name;
  ownership.documentConfirmsRightOwn = getElementByValue(
    arrayDocumentConfirmsRightOwn,
    ownership.documentConfirmsRightOwn
  ).name;
  ownership.loggia = getElementByValue(arrayLoggia, ownership.loggia).name;
  ownership.photo = photo;
  return ownership;
};

export const mapOwnerValuesToRead = (owner, photo) => {
  owner.gender = getElementByValue(arrayGender, owner.gender).name;
  owner.familyStatus = getElementByValue(
    arrayFamilyStatus,
    owner.familyStatus
  ).name;
  owner.photo = photo;
  return owner;
};

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
    ",  кв. " +
    address.apartment
  );
};

export const mapOwnerToLineFullNamesOwner = (fio) => {
  return fio.lastName + " " + fio.firstName + " " + fio.secondName;
};
