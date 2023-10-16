<template>
  <div :class="item.summa > 0 ? ['main', 'active'] : ['main']">
    <div class="count">{{ count }}</div>
    <div class="bill">Лицевой счёт № {{ item.bill }}</div>
    <div class="address">пр.Свободы 51, квартира № {{ item.apartment }}</div>
    <div class="summa">
      {{ item.summa > 0 ? "Задолженность" : "Переплата" }} :
      {{ item.summa }} грн
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "balance-house-item",
  props: {
    item: Object,
    count: Number,
  },
  data() {
    return {};
  },
  methods: {},
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
  align-items: center;
  justify-content: space-between;
}
.count {
  width: 5%;
  margin: 0px 0px 0px 15px;
}
.bill,
.address,
.summa {
  width: 30%;
  text-align: left;
}
.active {
  color: crimson;
}
.main {
  font-size: 20px;
  border: 1px solid teal;
  padding: 5px 0px;
  margin: 5px 0px;
}
</style>
