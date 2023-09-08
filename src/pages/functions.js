import {
  arrayTypeRoom,
  arrayNumberRooms,
  arrayDocumentConfirmsRightOwn,
  arrayLoggia,
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

export const mapValue = (ownership, photo) => {
  let send = { ...ownership };
  send.numberRooms = getElementByValue(
    arrayNumberRooms,
    ownership.numberRooms
  ).name;
  send.typeRoom = getElementByValue(
    arrayTypeRoom,
    ownership.typeRoom
  ).name;
  send.documentConfirmsRightOwn = getElementByValue(
    arrayDocumentConfirmsRightOwn,
    ownership.documentConfirmsRightOwn
  ).name;
  send.loggia = getElementByValue(arrayLoggia, ownership.loggia).name;
  send.photo = photo;
  return send;
};
