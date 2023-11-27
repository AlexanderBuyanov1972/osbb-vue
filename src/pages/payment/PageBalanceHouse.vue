<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <button-back />
  <button-simple @click="showModal = true">Печатать баланс</button-simple>
  <line-header
    text="Задолженность по оплате за услуги ОСББ по помещениям"
    :style="{ color: 'darkgoldenrod' }"
  />
  <div class="time"><span>Текущая дата : </span>{{ currentDate }}</div>
  <div class="time"><span>Итоговая дата баланса : </span>{{ itogDate }}</div>
  <div class="itog">
    Итоговый баланс дома по оплате услуг ОСББ составляет :
    <span :class="totalBalance > 0 ? ['active'] : []">
      {{ roundDouble(totalBalance) }}
    </span>
    грн
  </div>
  <vue-hr />
  <div class="item" v-for="(one, index) in list" :key="index">
    <balance-house-item :item="one" :count="index + 1" />
  </div>
  <vue-hr />
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModal = false"
      @successfully="printBalanceHouse"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { roundDouble } from "@/pages/_functions/functions";
export default {
  data() {
    return {
      list: [],
      totalBalance: 0,
      roundDouble,
      showModal: false,
    };
  },
  methods: {
    ...mapActions({
      fetchBalanceHouse: "payment/fetchBalanceHouse",
      printPdfBalanceHouse: "payment/printPdfBalanceHouse",
    }),
    printBalanceHouse() {
      this.printPdfBalanceHouse();
    },
    printNewBill() {
      this.printPdfNewBill();
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
      getBalanceHouse: "payment/getBalanceHouse",
    }),
    currentDate() {
      let date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 > 1
          ? date.getMonth() + 1
          : "0" + date.getMonth() + 1;
      const day =
        date.getDate().toString().length > 1
          ? date.getDate()
          : "0" + date.getDate();
      return year + "-" + month + "-" + day;
    },
    itogDate() {
      let date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 2 > 1
          ? date.getMonth() + 2
          : "0" + date.getMonth() + 2;
      return year + "-" + month + "-01";
    },
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
