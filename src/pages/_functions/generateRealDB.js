import { createOwnership } from "@/http/ownership";
import { createOwner } from "@/http/owner/owner";
import { createRecord } from "@/http/record";

export const generatePassport = () => {
  return {
    numberPassport: "нет",
    numberEntry: "нет",
    dateIssue: "1900-01-01",
    issuingAuthority: "нет",
    registrationNumberCardPayerTaxes: "нет",
  };
};

export const generatePlaceWork = () => {
  return {
    businessName: "нет",
    address: "нет",
    numberPhone: "нет",
    position: "нет",
    addition: "нет",
  };
};

export const generateVehicle = () => {
  return {
    typeVehicle: "NO",
    numberVehicle: "нет",
    yearOfIssue: "нет",
    typeColor: "NO",
    typeManufacturer: "NO",
  };
};

export const generatePhoto = () => {
  return { name: "avatar", url: "@/photos/owners/avatar.png" };
};

export const generateOwner = () => {
  return {
    firstName: "нет",
    secondName: "нет",
    lastName: "нет",
    gender: "NO",
    email: "нет",
    phoneNumber: "нет",
    dateBirth: "1900-01-01",
    familyStatus: "NO",
    beneficiary: "NO",
    passport: generatePassport(),
    vehicle: generateVehicle(),
    placeWork: generatePlaceWork(),
    photo: generatePhoto(),
    additionalInformation: "нет",
  };
};

export const generateOwnership = () => {
  return {
    bill: "6200190000",
    typeRoom: "APARTMENT",
    totalArea: 0.01,
    livingArea: 0.01,
    documentConfirmsRightOwn: "СПВ ААА № 000000 от 00.00.0000",
    numberRooms: 1,
    loggia: false,
    gasSupply: "централизованное",
    gasMeter: "счётчик №",
    waterSupply: "централизованное",
    waterMeter: "счётчик №",
    sewerage: "централизованная",
    heatSupply: "CENTER",
    heatMeter: "нет",
    additionalInformation: "нет",
    address: {
      zipCode: "51931",
      country: "Украина",
      region: "Днепропетровская область",
      city: "Каменское",
      street: "Свободы",
      house: "51",
      entrance: "нет",
      floor: "нет",
      apartment: "",
    },
  };
};

export const generateSvobody51 = async () => {
  for (let curAp = 1; curAp <= 74; curAp++) {
    let owner = generateOwner();
    let ownership = generateOwnership();
    let responseOwner = await createOwner(owner);
    let responseOwnership = await createOwnership(ownership);

    if (responseOwner.data !== null && responseOwnership.data !== null) {
      await createRecord({
        owner: responseOwner.data,
        ownership: responseOwnership.data,
        share: 1.0,
      });
    }
  }
};
