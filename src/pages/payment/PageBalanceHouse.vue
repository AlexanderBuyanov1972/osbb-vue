<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <button-back />
  <line-header
    text="Задолженость по оплате за услуги ОСББ по помещениям"
    :style="{ color: 'darkgoldenrod' }"
  />
  <div class="time"><span>Сформирован на дату : </span>{{ new Date() }}</div>
  <div class="itog">
    Итоговый баланс дома по оплате услуг ОСББ составляет :
    <span :class="totalBalance > 0 ? ['active'] : []">
      {{ Math.round(100.0 * totalBalance) / 100.0 }}
    </span>
    грн
  </div>
  <!-- <balance-house-item :item="header" :count="count" /> -->
  <div class="item" v-for="(one, index) in list">
    <balance-house-item :item="one" :count="index + 1" />
  </div>
  <vue-hr />
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
      totalBalance: 0,
      // count:"№ ",
      // header: {
      //   bill: "Лицевой свёт № ",
      //   apartment: "пр.Свободы 51, квартира № ",
      //   summa: "Задолженность/переплата",
      // },
    };
  },
  methods: {
    ...mapActions({
      fetchBalanceHouse: "payment/fetchBalanceHouse",
    }),
  },
  computed: {
    ...mapGetters({
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
      getBalanceHouse: "payment/getBalanceHouse",
    }),
  },
  mounted() {
    this.fetchBalanceHouse().then(() => {
      this.list = this.getBalanceHouse;
      this.list.forEach((el) => (this.totalBalance += el.summa));
    });
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.time,
.itog {
  color: blueviolet;
  font-size: 20px;
  margin: 10px 0 10px 0;
}
span {
  color: teal;
}
.active {
  color: red;
}
</style>
