<template>
  <div class="main" @mousemove="emitAddress">
    <h2>Адресс собственности.</h2>

    <div class="address">
      <div class="zipCode">
        <block-error-message
          :field="addressSend.zipCode"
          messageFalse="Укажите индекс."
          messageTrue="Индекс (XXXXX)."
          @valid="(value) => (validZipCode = value)"
        />
        <input-simple
          v-model="addressSend.zipCode"
          placeholder="Индекс"
          :readonly="true"
        />
      </div>

      <div class="country">
        <block-error-message
          :field="addressSend.country"
          messageFalse="Укажите страну."
          messageTrue="Страна."
          @valid="(value) => (validCountry = value)"
        />
        <input-simple
          v-model="addressSend.country"
          placeholder="Страна"
          :readonly="true"
        />
      </div>

      <div class="region">
        <block-error-message
          :field="addressSend.region"
          messageFalse="Укажите регион."
          messageTrue="Регион."
          @valid="(value) => (validRegion = value)"
        />
        <input-simple
          v-model="addressSend.region"
          placeholder="Регион"
          :readonly="true"
        />
      </div>

      <div class="city">
        <block-error-message
          :field="addressSend.city"
          messageFalse="Укажите город."
          messageTrue="Город."
          @valid="(value) => (validCity = value)"
        />
        <input-simple
          v-model="addressSend.city"
          placeholder="Город"
          :readonly="true"
        />
      </div>

      <div class="street">
        <block-error-message
          :field="addressSend.street"
          messageFalse="Укажите название улицы."
          messageTrue="Улица."
          @valid="(value) => (validStreet = value)"
        />
        <input-simple
          v-model="addressSend.street"
          placeholder="Улица"
          :readonly="true"
        />
      </div>

      <div class="house">
        <block-error-message
          :field="addressSend.house"
          messageFalse="Укажите номер дома."
          messageTrue="Дом."
          @valid="(value) => (validHouse = value)"
        />
        <input-simple
          v-model="addressSend.house"
          placeholder="Дом."
          :readonly="true"
        />
      </div>

      <div class="floor">
        <block-error-message
          :field="addressSend.floor"
          messageFalse="Укажите этаж."
          messageTrue="Этаж."
          @valid="(value) => (validFloor = value)"
        />
        <input-simple v-model="addressSend.floor" placeholder="Этаж." />
      </div>

      <block-error-message
        :field="addressSend.apartment"
        messageFalse="Укажите номер квартиры."
        messageTrue="Квартира."
        @valid="(value) => (validApartment = value)"
      />
      <input-simple v-model="addressSend.apartment" placeholder="Квартира." />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-edit-address",
  props: {
    address: Object,
  },
  data() {
    return {
      addressSend: { ...this.address },
      validZipCode: false,
      validCountry: false,
      validRegion: false,
      validCity: false,
      validStreet: false,
      validHouse: false,
      validFloor: false,
      validApartment: false,
    };
  },
  methods: {
    emitAddress() {
      this.$emit("isValidAddress", this.isValidAddress);
      this.$emit("address", this.addressSend);
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
