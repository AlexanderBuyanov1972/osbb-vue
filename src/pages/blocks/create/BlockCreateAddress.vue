<template>
  <div class="main" @mousemove="emitAddress">
    <h2>Адресс собственности.</h2>

    <div class="address">
      <div class="zipCode">
        <block-error-message
          :field="address.zipCode"
          messageFalse="Укажите индекс."
          messageTrue="Индекс (XXXXX)."
          @valid="(value) => (validZipCode = value)"
        />
        <input-simple
          v-model="address.zipCode"
          placeholder="Индекс"
          :readonly="true"
        />
      </div>

      <div class="country">
        <block-error-message
          :field="address.country"
          messageFalse="Укажите страну."
          messageTrue="Страна."
          @valid="(value) => (validCountry = value)"
        />
        <input-simple
          v-model="address.country"
          placeholder="Страна"
          :readonly="true"
        />
      </div>

      <div class="region">
        <block-error-message
          :field="address.region"
          messageFalse="Укажите регион."
          messageTrue="Регион."
          @valid="(value) => (validRegion = value)"
        />
        <input-simple
          v-model="address.region"
          placeholder="Регион"
          :readonly="true"
        />
      </div>

      <div class="city">
        <block-error-message
          :field="address.city"
          messageFalse="Укажите город."
          messageTrue="Город."
          @valid="(value) => (validCity = value)"
        />
        <input-simple
          v-model="address.city"
          placeholder="Город"
          :readonly="true"
        />
      </div>

      <div class="street">
        <block-error-message
          :field="address.street"
          messageFalse="Укажите название улицы."
          messageTrue="Улица."
          @valid="(value) => (validStreet = value)"
        />
        <input-simple
          v-model="address.street"
          placeholder="Улица"
          :readonly="true"
        />
      </div>

      <div class="house">
        <block-error-message
          :field="address.house"
          messageFalse="Укажите номер дома."
          messageTrue="Дом."
          @valid="(value) => (validHouse = value)"
        />
        <input-simple
          v-model="address.house"
          placeholder="Дом"
          :readonly="true"
        />
        </div>

      <div class="entrance">
        <block-error-message
          :field="address.entrance"
          messageFalse="Укажите номер подъезда."
          messageTrue="Подъезд."
          @valid="(value) => (validEntrance = value)"
        />
        <input-simple
          v-model="address.entrance"
          placeholder="Подъезд."
          :readonly="true"
        />
      </div>

      <div class="floor">
        <block-error-message
          :field="address.floor"
          messageFalse="Укажите этаж."
          messageTrue="Этаж."
          @valid="(value) => (validFloor = value)"
        />
        <input-simple v-model="address.floor" placeholder="Этаж" />
      </div>

      <div class="apartment">
        <block-error-message
          :field="address.apartment"
          messageFalse="Укажите номер квартиры."
          messageTrue="Квартира."
          @valid="(value) => (validApartment = value)"
        />
        <input-simple v-model="address.apartment" placeholder="Квартира" />
      </div>
    </div>

    <button-reset @click="reset" :hidden="!isValidAddress">Очистить</button-reset>
  </div>
</template>
<script>
export default {
  name: "block-create-address",
  data() {
    return {
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
      validZipCode: false,
      validCountry: false,
      validRegion: false,
      validCity: false,
      validStreet: false,
      validHouse: false,
      validEntrance: false,
      validFloor: false,
      validApartment: false,
    };
  },
  methods: {
    emitAddress() {
      this.$emit("isValidAddress", this.isValidAddress);
      this.$emit("address", this.address);
    },
    reset() {
      this.address.entrance = "";
      this.address.floor = "";
      this.address.apartment = "";
    },
  },
  computed: {
    isValidAddress() {
      return (
        this.validZipCode &&
        this.validCountry &&
        this.validRegion &&
        this.validCity &&
        this.validStreet &&
        this.validHouse &&
        this.validEntrance &&
        this.validFloor &&
        this.validApartment
      );
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
h2 {
  color: blueviolet;
  margin-bottom: 10px;
  text-align: center;
}
</style>
