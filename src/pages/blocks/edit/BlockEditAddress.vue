<template>
  <div class="main">
    <line-header text="Адресс собственности" :style="{ color: 'brown' }" />

    <div class="address">
      <div class="zipCode">
        <block-error-message
          :field="address.zipCode"
          messageFalse="Укажите индекс"
          messageTrue="Индекс (XXXXX)"
          @valid="(value) => (validZipCode = value)"
        />
        <input-simple
          v-model.trim="address.zipCode"
          placeholder="Индекс"
          :readonly="true"
        />
      </div>

      <div class="country">
        <block-error-message
          :field="address.country"
          messageFalse="Укажите страну"
          messageTrue="Страна"
          @valid="(value) => (validCountry = value)"
        />
        <input-simple
          v-model.trim="address.country"
          placeholder="Страна"
          :readonly="true"
        />
      </div>

      <div class="region">
        <block-error-message
          :field="address.region"
          messageFalse="Укажите регион"
          messageTrue="Регион"
          @valid="(value) => (validRegion = value)"
        />
        <input-simple
          v-model.trim="address.region"
          placeholder="Регион"
          :readonly="true"
        />
      </div>

      <div class="city">
        <block-error-message
          :field="address.city"
          messageFalse="Укажите город"
          messageTrue="Город"
          @valid="(value) => (validCity = value)"
        />
        <input-simple
          v-model.trim="address.city"
          placeholder="Город"
          :readonly="true"
        />
      </div>

      <div class="street">
        <block-error-message
          :field="address.street"
          messageFalse="Укажите название улицы"
          messageTrue="Улица"
          @valid="(value) => (validStreet = value)"
        />
        <input-simple
          v-model.trim="address.street"
          placeholder="Улица"
          :readonly="true"
        />
      </div>

      <div class="house">
        <block-error-message
          :field="address.house"
          messageFalse="Укажите номер дома"
          messageTrue="Дом"
          @valid="(value) => (validHouse = value)"
        />
        <input-simple
          v-model.trim="address.house"
          placeholder="Дом"
          :readonly="true"
        />
      </div>

      <div class="entrance">
        <block-error-message
          :field="address.entrance"
          messageFalse="Укажите номер подъезда"
          messageTrue="Подъезд"
          @valid="(value) => handlerEntrance(value)"
        />
        <input-simple v-model.trim="address.entrance" placeholder="Подъезд" />
      </div>

      <div class="floor">
        <block-error-message
          :field="address.floor"
          messageFalse="Укажите этаж"
          messageTrue="Этаж"
          @valid="(value) => handlerFloor(value)"
        />
        <input-simple v-model.trim="address.floor" placeholder="Этаж" />
      </div>

      <block-error-message
        :field="address.apartment"
        messageFalse="Укажите номер квартиры"
        messageTrue="Квартира"
        @valid="(value) => handlerApartment(value)"
      />
      <input-simple v-model.trim="address.apartment" placeholder="Квартира" />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-update-address",
  props: {
    addressProps: Object,
  },
  data() {
    return {
      address: {},
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
    handlerEntrance(value) {
      this.validEntrance = value;
      this.emitAddress();
    },
    handlerFloor(value) {
      this.validFloor = value;
      this.emitAddress();
    },
    handlerApartment(value) {
      this.validApartment = value;
      this.emitAddress();
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
  updated() {
    this.address = this.addressProps;
  },
  mounted() {
    this.address = this.addressProps;
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
