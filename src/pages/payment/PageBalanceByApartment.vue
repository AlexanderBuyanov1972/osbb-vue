<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <button-back />

  <div class="buttons">
    <block-search-apartment
      nameButton="Баланс по помещению"
      @apartment="(value) => action(value)"
    />
    <button-bills
      @click="getDetailsBalanceOfRoom"
      :style="{ color: 'blueviolet', 'border-color': 'blueviolet' }"
      >Детали баланса по помещению
    </button-bills>
    <button-bills
      @click="getBalanceOfHouse"
      :style="{ color: 'blueviolet', 'border-color': 'blueviolet' }"
      >Получить баланс дома по каждому помещению</button-bills
    >
  </div>
  <line-header
    :text="`Расчётный баланс за услуги по управлению ОСББ по помещению № ${apartment}`"
    :style="{ color: 'darkgoldenrod' }"
  />
  <div class="body" v-if="flag">
    <block-header-debt :header="header" />
    <vue-hr />
    <block-body-debt :body="body" />
  </div>
</template>
<script>
import { PAGE_BALANCE_ROOM_DETAILS, PAGE_BALANCE_HOUSE } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: "1",
      flag: false,
      header: {
        address: {},
      },
      body: {},
      PAGE_BALANCE_ROOM_DETAILS,
      PAGE_BALANCE_HOUSE
    };
  },
  methods: {
    ...mapActions({
      getDebtByApartment: "payment/fetchDebtByApartment",
    }),
    action(value) {
      this.apartment = value;
      this.getDebtByApartment(value).then(() => {
        this.flag = true;
        this.body = this.getDebt.body;
        this.header = this.getDebt.header;
      });
    },
    getDetailsBalanceOfRoom() {
      this.$router.push(PAGE_BALANCE_ROOM_DETAILS + "/" + this.apartment);
    },
    getBalanceOfHouse() {
      this.$router.push(PAGE_BALANCE_HOUSE);
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
      getDebt: "payment/getDebt",
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
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
