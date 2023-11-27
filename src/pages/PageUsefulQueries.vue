<template>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="getMessages" />
  <line-header text="Полезные запросы" :style="{ color: 'blueviolet' }" />
  <div class="main">
    <button-simple @click="queryPdfNewBill"
      >Распечатать платёжные реквизиты ОСББ</button-simple
    >
    <button-simple @click="queryListHeatSupplyForApartment"
      >Наличие и типизация квартирного отопления в доме</button-simple
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
        queryPdfNewBill: "queries/queryPdfNewBill",
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
.main{
    display: flex;
    flex-direction: column;
    align-items: start;
}
</style>
