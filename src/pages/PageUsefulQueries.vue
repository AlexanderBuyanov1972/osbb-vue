<template>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="getMessages" />
  <line-header text="Полезные запросы" :style="{ color: 'blueviolet' }" />
  <div class="main">
    <button-simple @click="queryNewBill"
      >Распечатать платёжные реквизиты ОСББ</button-simple
    >
    <button-simple @click="queryListHeatSupplyForApartment"
      >Наличие и типизация квартирного отопления в доме</button-simple
    >
    <button-simple @click="queryReport_2023_11"
      >Отчёт о деятельности ОСББ за ноябрь 2023 года</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      queryListHeatSupplyForApartment:
        "queries/queryListHeatSupplyForApartment",
      queryNewBill: "queries/queryNewBill",
      queryReport_2023_11: "queries/queryReport_2023_11",
    }),
  },
  computed: {
    ...mapGetters({
      getMessages: "queries/getMessages",
      getIsLoading: "queries/getIsLoading",
    }),
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
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
