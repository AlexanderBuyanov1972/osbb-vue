<template>
  <div class="main">
    <h2>Адресс собственности.</h2>

    <div class="address">
      <div class="zipCode">
        <block-error-message
          :field="address.zipCode"
          messageFalse="Укажите индекс."
          messageTrue="Индекс (XXXXX)."
          @valid="(value) => handlerZipCode(value)"
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
          @valid="(value) => handlerCountry(value)"
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
          @valid="(value) => handlerRegion(value)"
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
          @valid="(value) => handlerCity(value)"
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
          @valid="(value) => handlerStreet(value)"
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
          @valid="(value) => handlerHouse(value)"
        />
        <input-simple
          v-model="address.house"
          placeholder="Дом."
          :readonly="true"
        />
      </div>

      <div class="entrance">
        <block-error-message
          :field="address.entrance"
          messageFalse="Укажите номер подъезда."
          messageTrue="Подъезд."
          @valid="(value) => handlerEntrance(value)"
        />
        <input-simple v-model="address.entrance" placeholder="Подъезд." />
      </div>

      <div class="floor">
        <block-error-message
          :field="address.floor"
          messageFalse="Укажите этаж."
          messageTrue="Этаж."
          @valid="(value) => handlerFloor(value)"
        />
        <input-simple v-model="address.floor" placeholder="Этаж." />
      </div>

      <block-error-message
        :field="address.apartment"
        messageFalse="Укажите номер квартиры."
        messageTrue="Квартира."
        @valid="(value) => handlerApartment(value)"
      />
      <input-simple v-model="address.apartment" placeholder="Квартира." />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "block-edit-address",
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
    ...mapActions({
      fetchAddress: "address/fetchAddress",
    }),
    emitAddress() {
      this.$emit("isValidAddress", this.isValidAddress);
      this.$emit("address", this.address);
    },
    handlerZipCode(value) {
      this.validZipCode = value;
      this.emitAddress();
    },
    handlerCountry(value) {
      this.validCountry = value;
      this.emitAddress();
    },
    handlerRegion(value) {
      this.validRegion = value;
      this.emitAddress();
    },
    handlerCity(value) {
      this.validCity = value;
      this.emitAddress();
    },
    handlerStreet(value) {
      this.validStreet = value;
      this.emitAddress();
    },
    handlerHouse(value) {
      this.validHouse = value;
      this.emitAddress();
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
    ...mapGetters({
      getAddress: "address/getAddress",
    }),
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
  mounted() {
    this.fetchAddress(this.$route.params.id).then(
      () => (this.address = this.getAddress)
    );
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
