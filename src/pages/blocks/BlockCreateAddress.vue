<template>
  <div class="main" :on-mouseout="emitAddress">
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
  </div>
</template>
<script>
export default {
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
    };
  },
  methods: {
    emitAddress() {
      this.$emit("address", address);
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
}
</style>
