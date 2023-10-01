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

export const generatePhotos = () => {
  return { name: "avatar", url: "@/photos/owners/avatar.png" };
};

export const generateSvobody51 = () => {
  let result = [];

  for (let curAp = 1; curAp <= 84; curAp++) {
    // owner ----------------------
    let owner = {
      firstName: "нет",
      secondName: "нет",
      lastName: "нет",
      gender: "NO",
      email: "нет",
      phoneNumber: "нет",
      dateBirth: "1900-01-01",
      shareInRealEstate: 1.0,
      familyStatus: "NO",
      beneficiary: "NO",

      passport: generatePassport(),
      vehicle: generateVehicle(),
      placeWork: generatePlaceWork(),
      photo: generatePhoto(),
    };
    // ownership ------------------
    let ownership = {
      typeRoom: "NO",
      totalArea: 0.01,
      livingArea: 0.01,
      documentConfirmsRightOwn: "нет",
      numberRooms: 0,
      loggia: false,
      gasSupply: "централизованное",
      gasMeter: "счётчик №",
      waterSupply: "централизованное",
      waterMeter: "счётчик №",
      sewerage: "централизованная",
      heatSupply: "автономное",
      heatMeter: "нет",
      // address -------------
      address: {
        zipCode: "51931",
        country: "Украина",
        region: "Днепропетровская область",
        city: "Каменское",
        street: "Свободы",
        house: "51",
        entrance: "нет",
        floor: "нет",
        apartment: curAp + "",
      },
    };
    let record = {};
    record.owner = owner;
    record.ownership = ownership;
    result.push(record);
  }

  return result;
};
