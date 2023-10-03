import { faker } from "@faker-js/faker";
import { createOwner } from "@/http/owner";
import { createOwnership } from "@/http/ownership";
import { createShare } from "@/http/share";
import { createRecord } from "@/http/record";

export const generatePassport = () => {
  return {
    numberPassport: "SELECT",
    numberEntry: "нет",
    dateIssue: "1900-01-01",
    issuingAuthority: "нет",
    registrationNumberCardPayerTaxes: "нет",
  };
};

export const generatePlaceWork = () => {
  return {
    businessName: "SELECT",
    address: "нет",
    numberPhone: "нет",
    position: "нет",
    addition: "нет",
  };
};

export const generateVehicle = () => {
  return {
    typeVehicle: "SELECT",
    numberVehicle: "нет",
    yearOfIssue: "нет",
    typeColor: "NO",
    typeManufacturer: "NO",
  };
};

export const generatePhoto = () => {
  return { name: "avatar", url: "@/photos/owners/avatar.png" };
};

// generate Json ---------------
export const generateJsonEntries = async () => {
  // общее количество квартир вдоме
  const countApartment = 84;
  // общее количество квартир в подъезде
  const countEntrance = 12;
  // общее количество квартир на этаже
  const countFloor = 3;
  //variables
  let currentApartment = 1;
  let currentEntrance = 1;
  let currentFloor = 1;
  // array result
  let result = [];

  for (
    currentApartment = 1;
    currentApartment <= countApartment;
    currentApartment++
  ) {
    // create owner ------------------------
    let owner = {
      firstName: faker.person.lastName() + "",
      secondName: faker.person.lastName() + "",
      lastName: faker.person.lastName() + "",
      gender: faker.helpers.arrayElement(["MALE", "FEMALE"]),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number("+38 (097) ### ## ##"),
      dateBirth:
        faker.date
          .birthdate({ min: 16, max: 85, mode: "age" })
          .toISOString()
          .substring(0, 10) + "",
      familyStatus: faker.helpers.arrayElement(["MARRIED", "SINGLE"]),
      beneficiary: "NO",
      passport: generatePassport(),
      vehicle: generateVehicle(),
      placeWork: generatePlaceWork(),
      photo: generatePhoto(),
    };
    // create ownership -------------------------
    let ownership = {
      typeRoom: faker.helpers.arrayElement([
        "APARTMENT",
        "NON_RESIDENTIAL_ROOM",
      ]),
      totalArea: faker.number.float({ min: 20, max: 100, precision: 0.1 }),
      livingArea: faker.number.float({ min: 30, max: 80, precision: 0.1 }),
      documentConfirmsRightOwn: faker.helpers.arrayElement([
        "Договор купли-продажи",
        "Договор дарения",
        "Свидетельство о приватизации",
        "Договор наследования",
      ]),
      numberRooms: faker.number.int({ min: 1, max: 5 }),
      loggia: faker.helpers.arrayElement([true, false]),
      gasSupply: "централизованное",
      gasMeter: "счётчик №",
      waterSupply: "централизованное",
      waterMeter: "счётчик №",
      sewerage: "централизованная",
      heatSupply: "автономное",
      heatMeter: "нет",
      // адресс
      address: {
        zipCode: "51931",
        country: "Украина",
        region: "Днепропетровская область",
        city: "Каменское",
        street: "Свободы",
        house: "51",
        entrance: currentEntrance + "",
        floor: currentFloor + "",
        apartment: currentApartment + "",
      },
    };

    let responseOwner = await createOwner(owner);
    let responseOwnership = await createOwnership(ownership);
    // create share --------------------
    let share = {
      value: 1.0,
      owner: responseOwner.data,
      ownership: responseOwnership.data,
    };
    await createShare(share);
    // create record ---------------------------
    let record = {
      owner: responseOwner.data,
      ownership: responseOwnership.data,
    };
    await createRecord(record);

    if (currentApartment % countFloor == 0) {
      currentFloor++;
    }

    if (currentApartment % countEntrance == 0) {
      currentEntrance++;
      currentFloor = 1;
    }
  }
};

export const generateJsonQuestionnaires = () => {
  const list = [];
  const title = "Вопрос о создании ОСББ";
  const byWhom = "Горбунков Семён Дмитриевна";
  let questions = [
    "Согласны ли вы утвердить состав инициативной группы",
    "Согласны ли вы утвердить Иванова С.С. секретарём сборов",
    "Есть ли жизнь на Марсе",
  ];
  questions.forEach((el) => {
    list.push({ title, byWhom, question: el });
  });

  return list;
};
