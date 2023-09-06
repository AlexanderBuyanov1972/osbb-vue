<template>
  <div class="main" @mousemove="emitAddress">
    <h2>Адресс собственности.</h2>

    <div class="address">
      <block-error :field="addressSend.zipCode" message="Укажите индекс." />
      <input-simple
        v-model="addressSend.zipCode"
        placeholder="Индекс"
        :readonly="true"
      />

      <block-error :field="addressSend.country" message="Укажите страну." />
      <input-simple
        v-model="addressSend.country"
        placeholder="Страна"
        :readonly="true"
      />

      <block-error :field="addressSend.region" message="Укажите регион." />
      <input-simple
        v-model="addressSend.region"
        placeholder="Регион"
        :readonly="true"
      />

      <block-error :field="addressSend.city" message="Укажите город." />
      <input-simple
        v-model="addressSend.city"
        placeholder="Город"
        :readonly="true"
      />

      <block-error
        :field="addressSend.street"
        message="Укажите название улицы."
      />
      <input-simple
        v-model="addressSend.street"
        placeholder="Улица"
        :readonly="true"
      />

      <block-error :field="addressSend.house" message="Укажите номер дома." />
      <input-simple
        v-model="addressSend.house"
        placeholder="Дом"
        :readonly="true"
      />

      <block-error :field="addressSend.floor" message="Укажите этаж." />
      <input-simple v-model="addressSend.floor" placeholder="Этаж" />

      <block-error
        :field="addressSend.apartment"
        message="Укажите номер квартиры."
      />
      <input-simple v-model="addressSend.apartment" placeholder="Квартира" />
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
    };
  },
  methods: {
    emitAddress() {
      this.$emit("address", this.addressSend);
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
