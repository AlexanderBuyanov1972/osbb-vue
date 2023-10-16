import { createOwnership } from "@/http/ownership/ownership";
import { createOwner } from "@/http/owner/owner";
import { createShare } from "@/http/share";
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
    additionalInformation:"нет",
  };
};

export const generateOwnership = () => {
  return {
    bill: "6200190000",
    typeRoom: "APARTMENT",
    totalArea: 10.01,
    livingArea: 10.01,
    documentConfirmsRightOwn: "нет",
    numberRooms: 1,
    loggia: false,
    gasSupply: "централизованное",
    gasMeter: "счётчик №",
    waterSupply: "централизованное",
    waterMeter: "счётчик №",
    sewerage: "централизованная",
    heatSupply: "централизованное",
    heatMeter: "нет",
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
  for (let curAp = 1; curAp <= 84; curAp++) {
    let owner = generateOwner();
    let ownership = generateOwnership();
    let responseOwner = await createOwner(owner);
    let responseOwnership = await createOwnership(ownership);
    if (responseOwner.data !== null && responseOwnership.data !== null) {
      await createShare({
        value: 1.0,
        owner: responseOwner.data,
        ownership: responseOwnership.data,
      });
    }
    if (responseOwner.data !== null && responseOwnership.data !== null) {
      await createRecord({
        owner: responseOwner.data,
        ownership: responseOwnership.data,
      });
    }
  }
};
