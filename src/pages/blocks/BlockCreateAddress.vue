<template>
  <div class="main" @mousemove="emitAddress">
    <h2>Адресс собственности.</h2>

    <div class="address">
      <block-error :field="address.zipCode" message="Укажите индекс." />
      <input-simple
        v-model="address.zipCode"
        placeholder="Индекс"
        :readonly="true"
      />

      <block-error :field="address.country" message="Укажите страну." />
      <input-simple
        v-model="address.country"
        placeholder="Страна"
        :readonly="true"
      />

      <block-error :field="address.region" message="Укажите регион." />
      <input-simple
        v-model="address.region"
        placeholder="Регион"
        :readonly="true"
      />

      <block-error :field="address.city" message="Укажите город." />
      <input-simple
        v-model="address.city"
        placeholder="Город"
        :readonly="true"
      />

      <block-error :field="address.street" message="Укажите название улицы." />
      <input-simple
        v-model="address.street"
        placeholder="Улица"
        :readonly="true"
      />

      <block-error :field="address.house" message="Укажите номер дома." />
      <input-simple
        v-model="address.house"
        placeholder="Дом"
        :readonly="true"
      />

      <block-error :field="address.floor" message="Укажите этаж." />
      <input-simple v-model="address.floor" placeholder="Этаж" />

      <block-error
        :field="address.apartment"
        message="Укажите номер квартиры."
      />
      <input-simple v-model="address.apartment" placeholder="Квартира" />
    </div>

    <button-reset @click="reset" :hidden="!validAddress">Очистить</button-reset>
  </div>
</template>
<script>
export default {
  name: "block-create-address",
  data() {
    return {
      errors: [],
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
    };
  },
  methods: {
    emitAddress() {
      this.$emit("validAddress", this.validAddress);
      this.$emit("address", this.address);
    },
    reset() {
      this.address.floor = "";
      this.address.apartment = "";
    },
  },
  computed: {
    validAddress() {
      return (
        this.address.floor.length &&
        this.address.apartment.length &&
        this.address.house.length &&
        this.address.street.length &&
        this.address.city.length &&
        this.address.region.length &&
        this.address.country.length &&
        this.address.zipCode.length
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
