import { faker } from "@faker-js/faker";
import { createOwner } from "@/http/owner/owner";
import { createOwnership } from "@/http/ownership/ownership";
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
export const generateBill = (arg) => {
  let substr = "6200190400";
  return substr.substring(0, substr.length - (arg + "").length) + arg;
};
// Генерация тарифов -------------------
export const generateJsonRates = () => {
  let list = [];
  let value = 0;
  let count = 1;

  for (let j = 3; j < 4; j++) {
    if (j == 3) value = 4.4;
    for (let i = 10; i <= 12; i++) {
      if (i <= 9) {
        list.push({ id: count, date: "202" + j + "-0" + i + "-01", value });
      } else {
        list.push({ id: count, date: "202" + j + "-" + i + "-01", value });
      }
      count++;
    }
  }
  return list;
};

// Генерация главного джейсона ---------------
export const generateJsonRecords = async () => {
  // общее количество квартир в доме
  const countApartment = 74;
  // общее количество квартир в подъезде
  const countEntrance = 12;
  // общее количество квартир на этаже
  const countFloor = 3;
  //variables
  let currentApartment = 1;
  let currentEntrance = 1;
  let currentFloor = 1;
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
      additionalInformation: "нет",
    };
    // create ownership -------------------------
    let ownership = {
      bill: generateBill(currentApartment),
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
      heatSupply: faker.helpers.arrayElement([
        "CENTER",
        "AUTO_GAZ",
        "AUTO_ELECTRO",
      ]),
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

    let responseOwnership = await createOwnership(ownership);
    if (responseOwnership.data == undefined) return;
    let responseOwner = await createOwner(owner);
    if (responseOwner.data != undefined) {
      // create record ---------------------------
      await createRecord({
        owner: responseOwner.data,
        ownership: responseOwnership.data,
        share: 1.0,
      });
    }
    if (currentApartment % countFloor == 0) {
      currentFloor++;
    }

    if (currentApartment % countEntrance == 0) {
      currentEntrance++;
      currentFloor = 1;
    }
  }
};
// Генерация опроса -----------------------------
export const generateJsonQuestionnaires = () => {
  const list = [];
  const title = "Вопрос о создании ОСББ";
  const byWhom = "Пасько А.А.";
  let questions = [
    "Согласны ли Вы утвердить состав инициативной группы",
    "Согласны ли Вы утвердить Иванова С.С. секретарём сборов",
    "Согласны ли Вы платить взносы в ОСББ",
  ];
  questions.forEach((el) => {
    list.push({ title, byWhom, question: el });
  });

  return list;
};
