import { faker } from "@faker-js/faker";

export const generateJson = () => {
  const countApartment = 37;
  let result = [];

  for (let i = 0; i < countApartment; i++) {
    let owners = [];
    for (let j = 0; j < (i % 3) + 1; j++) {
      let owner = {
        firstName: faker.person.lastName() + "",
        secondName: faker.person.lastName() + "",
        lastName: faker.person.lastName() + "",
        gender: faker.helpers.arrayElement(["MALE", "FEMALE"]),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number("+38 (097) ### ## ##"),
        dateBirth: faker.date.birthdate({ min: 16, max: 85, mode: "age" }) + "",
        shareInRealEstate: faker.number.float({ precision: 0.1 }),
        familyStatus: faker.helpers.arrayElement(["MARRIED", "SINGLE"]),
        passport: {
          numberPassport: faker.finance.accountNumber(9) + "",
          numberEntry:
            faker.number.int({ min: 10000000, max: 50000000 }) +
            "-" +
            faker.finance.accountNumber(4),
          dateIssue: faker.date.birthdate({
            min: 1960,
            max: 2022,
            mode: "year",
          }),
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

        entrance: Math.floor(i / 12) + 1 + "",
        floor: Math.floor(i / 3) + 1 + "",

        apartment: i + 1 + "",
      },
    };
    ownership.owners = owners;
    result.push(ownership);
  }

  console.log(result);
};
