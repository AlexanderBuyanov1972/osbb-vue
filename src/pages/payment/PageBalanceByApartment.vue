<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <button-back />
  <button-bills v-if="flag" @click="showModal = true">Печать</button-bills>
  <button-bills v-if="flag" @click="showModalAll = true"
    >Печатать на все помещения</button-bills
  >
  <button-bills v-if="flag" @click="showModalAllInOne = true"
    >Печатать на все помещения в один файл</button-bills
  >

  <div class="buttons">
    <block-search-apartment
      nameButton="Задолженость по помещению"
      @apartment="(value) => action(value)"
    />
    <button-bills
      @click="goToBalanceDetails"
      :style="{ color: 'blueviolet', 'border-color': 'blueviolet' }"
      >Детали задолжености по помещению
    </button-bills>
    <button-bills
      @click="$router.push(PAGE_BALANCE_HOUSE)"
      :style="{ color: 'blueviolet', 'border-color': 'blueviolet' }"
      >Получить баланс дома по каждому помещению</button-bills
    >
  </div>
  <line-header
    text="Задолженость по оплате за услуги по управлению ОСББ"
    :style="{ color: 'darkgoldenrod' }"
  />
  <div class="body" v-if="flag">
    <block-header-debt :header="header" />
    <vue-hr />
    <block-body-debt :body="body" />
    <vue-hr />
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModal = false"
      @successfuly="print"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalAll">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalAll = false"
      @successfuly="printList"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalAllInOne">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalAllInOne = false"
      @successfuly="printListInOne"
    ></modal-action>
  </dialog-window>
</template>
<script>
import {
  PAGE_BALANCE_ROOM_DETAILS,
  PAGE_BALANCE_HOUSE,
} from "@/router/apiRouter";
import { checkApartment } from "@/pages/_functions/functions";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: "1",
      flag: false,
      showModal: false,
      showModalAll: false,
      showModalAllInOne: false,
      header: {
        address: {},
      },
      body: {},
      PAGE_BALANCE_ROOM_DETAILS,
      PAGE_BALANCE_HOUSE,
      checkApartment,
    };
  },
  methods: {
    ...mapActions({
      getDebtByApartment: "payment/fetchDebtByApartment",
      printDebtByApartment: "payment/printDebtByApartment",
      printListDebtByApartment: "payment/printListDebtByApartment",
      printAllToOnePdfDebtAllApartment:
        "payment/printAllToOnePdfDebtAllApartment",
    }),
    action(value) {
      if (this.checkApartment(value)) {
        this.apartment = value;
        this.getDebtByApartment(value).then(() => {
          this.flag = true;
          this.body = this.getDebt.body;
          this.header = this.getDebt.header;
        });
      }
    },
    goToBalanceDetails() {
      if (this.checkApartment(this.apartment)) {
        this.$router.push(PAGE_BALANCE_ROOM_DETAILS + "/" + this.apartment);
      }
    },
    print() {
      this.printDebtByApartment(this.getDebt);
    },
    printList() {
      this.printListDebtByApartment();
    },
    printListInOne() {
      this.printAllToOnePdfDebtAllApartment();
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
