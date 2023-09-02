<template>
  <div class="main">
    <h2>Создать собственность.</h2>
    <div class="ownership">
      <input-simple v-model="ownership.typeRoom" placeholder="Тип помещения" />
      <input-simple
        v-model="ownership.areaRoomThatIsInProperty"
        placeholder="Площадь помещения"
      />
      <input-simple
        v-model="ownership.documentConfirmsRightOwn"
        placeholder="Документ права собственности"
      />
      <input-simple
        v-model="ownership.numberRooms"
        placeholder="Кол-во комнат"
      />
      <input-simple v-model="ownership.loggia" placeholder="Балкон" />
    </div>
    <h2>Создать адресс собственности.</h2>
    <div class="address">
      <input-simple
        v-model="address.zipCode"
        placeholder="Индекс"
        :readonly="true"
      />
      <input-simple
        v-model="address.country"
        placeholder="Страна"
        :readonly="true"
      />
      <input-simple
        v-model="address.region"
        placeholder="Регион"
        :readonly="true"
      />
      <input-simple
        v-model="address.city"
        placeholder="Город"
        :readonly="true"
      />
      <input-simple
        v-model="address.street"
        placeholder="Улица"
        :readonly="true"
      />
      <input-simple
        v-model="address.house"
        placeholder="Дом"
        :readonly="true"
      />
      <input-simple v-model="address.floor" placeholder="Этаж" />
      <input-simple v-model="address.apartment" placeholder="Квартира" />
    </div>
    <h2>Создать собственника.</h2>
    <div class="owner">
      <input-simple v-focus v-model="owner.lastName" placeholder="Фамилия" />
      <input-simple v-model="owner.firstName" placeholder="Имя" />
      <input-simple v-model="owner.secondName" placeholder="Отчество" />
      <select-simple
        :array="[
          { id: 1, name: 'Пол', value: 'Gender' },
          { id: 2, name: 'Мужской', value: 'MALE' },
          { id: 3, name: 'Женский', value: 'FEMALE' },
        ]"
        @select="(value) => (owner.gender = value)"
        placeholder="Пол"
      />
      <input-simple v-model="owner.email" placeholder="E-mail" />
      <input-simple v-model="owner.phoneNumber" placeholder="Телефон" />
    </div>
    <h2>Создать паспорт собственника.</h2>
    <div class="password">
      <input-simple v-model="password.passwordID" placeholder="Паспорт ID" />
      <input-simple v-model="password.numberEntry" placeholder="Номер записи" />
      <input-simple v-model="password.dateIssue" placeholder="Дата выдачи" />
      <input-simple
        v-model="password.issuingAuthority"
        placeholder="Орган выдачи"
      />
      <input-simple
        v-model="password.registrationNumberCardPayerTaxes"
        placeholder="ИНН"
      />
    </div>
    <button-simple @click="createOwnership">Создать</button-simple>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ownership: {
        typeRoom: null,
        areaRoomThatIsInProperty: null,
        documentConfirmsRightOwn: null,
        numberRooms: null,
        loggia: null,
        address: {},
      },
      address: {
        zipCode: "51931",
        country: "Украина",
        region: "Днепропетровская область",
        city: "Каменское",
        street: "Свободы",
        house: "51",
        floor: "",
        apartment: "",
      },
      owner: {
        firstName: "",
        secondName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        password: {},
      },
      password: {
        passwordID: "",
        numberEntry: "",
        dateIssue: "",
        issuingAuthority: "",
        registrationNumberCardPayerTaxes: "",
      },
    };
  },
  methods: {
    createOwnership() {
      this.ownership.address = this.address;
      this.owner.password = this.password;
      this.ownership.owners = [this.owner];
      console.log(this.ownership);
      return this.ownership;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  color: red;
  font-size: 1.2em;
}
</style>
