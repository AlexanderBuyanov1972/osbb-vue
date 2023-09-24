import { faker } from "@faker-js/faker";

export const getShareInRealEstate = (value) => {
  if (value % 3 == 0) return 1;
  if (value % 3 == 1) return 0.5;
  return 0.33333;
};

export const generateJsonEntries = () => {
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
    let owners = [];
    for (let j = 0; j < (currentApartment % 3) + 1; j++) {
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

        // shareInRealEstate: faker.number.float({ precision: 0.1 }),

        shareInRealEstate: getShareInRealEstate(currentApartment),

        familyStatus: faker.helpers.arrayElement(["MARRIED", "SINGLE"]),
        passport: {
          numberPassport: faker.finance.accountNumber(9) + "",
          numberEntry:
            faker.number.int({ min: 10000000, max: 50000000 }) +
            "-" +
            faker.finance.accountNumber(4),
          dateIssue: faker.date
            .birthdate({
              min: 1960,
              max: 2022,
              mode: "year",
            })
            .toISOString()
            .substring(0, 10),
          issuingAuthority: faker.number.int({ min: 1000, max: 1500 }) + "",
          registrationNumberCardPayerTaxes:
            faker.finance.accountNumber(10) + "",
        },
      };
      owners.push(owner);
    }

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
    ownership.owners = owners;
    result.push(ownership);

    if (currentApartment % countFloor == 0) {
      currentFloor++;
    }

    if (currentApartment % countEntrance == 0) {
      currentEntrance++;
      currentFloor = 1;
    }
  }

  return result;
};

export const generateJsonQuestionnaires = () => {
  const list = [];
  const title = "Вопрос о создании ОСББ";
  const byWhom = "Гриценко Елена Дмитриевна";
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
