<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <button-back />
  <button-simple v-if="flag" @click="showModal = true">Печать</button-simple>
  <button-simple v-if="flag" @click="showModalAll = true"
    >Печатать на все помещения</button-simple
  >
  <button-simple v-if="flag" @click="showModalAllInOne = true"
    >Печатать на все помещения в один файл</button-simple
  >

  <div class="buttons">
    <block-search-apartment-plus-minus
      nameButton="Задолженность по помещению"
      @apartment="action"
    />
    <button-simple
      @click="$router.push(PAGE_BALANCE_BILL_DETAILS + '/' + this.apartment)"
      :style="{ color: 'blueviolet', 'border-color': 'blueviolet' }"
      >Детали задолженности по помещению
    </button-simple>
    <button-simple
      @click="$router.push(PAGE_BALANCE_HOUSE)"
      :style="{ color: 'blueviolet', 'border-color': 'blueviolet' }"
      >Получить баланс дома по каждому помещению</button-simple
    >
  </div>
  <line-header
    text="Задолженность по оплате за услуги по управлению ОСББ"
    :style="{ color: 'darkgoldenrod' }"
  />
  <div class="body" v-if="this.dd.length == 1">
    <block-header-debt :header="header" />
    <vue-hr />
    <block-body-debt :body="body" />
    <vue-hr />
  </div>
  <line-header
    v-if="this.dd.length == 0"
    text="По данному лицевому счёту нет информации"
    :style="{ color: 'red' }"
  />
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите распечатать ?"
      @close="showModal = false"
      @successfully="printOne"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalAll">
    <modal-action
      message="Вы действительно хотите распечатать на все помещения ?"
      @close="showModalAll = false"
      @successfully="printListDebtByApartment"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalAllInOne">
    <modal-action
      message="Вы действительно хотите распечатать на все помещения в один файл?"
      @close="showModalAllInOne = false"
      @successfully="printAllToOnePdfDebtAllApartment"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalBill">
    <modal-select-bill-ownership
      message="По данному номеру помещения числится несколько лицевых счетов. 
      Выберите подходящий для вашего запроса."
      :ownerships="ownerships"
      @close="showModalBill = false"
      @select="selectOwnership"
    ></modal-select-bill-ownership>
  </dialog-window>
</template>
<script>
import {
  PAGE_BALANCE_BILL_DETAILS,
  PAGE_BALANCE_HOUSE,
} from "@/router/apiRouter";
import { checkApartment } from "@/pages/_functions/functions";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dd: [],
      apartment: "",
      showModal: false,
      showModalAll: false,
      showModalAllInOne: false,
      showModalBill: false,
      header: {
        address: {},
      },
      body: {},
      PAGE_BALANCE_BILL_DETAILS,
      PAGE_BALANCE_HOUSE,
      checkApartment,
    };
  },
  methods: {
    ...mapActions({
      getDebtByApartment: "payment/fetchDebtByApartment",
      getDebtByBill: "payment/fetchDebtByBill",
      printDebtByApartment: "payment/printDebtByApartment",
      printListDebtByApartment: "payment/printListDebtByApartment",
      printAllToOnePdfDebtAllApartment:
        "payment/printAllToOnePdfDebtAllApartment",
    }),
    action(value) {
      if (this.checkApartment(value)) {
        this.apartment = value;
        this.getDebtByApartment(value).then(() => {
          this.dd = this.getDebtsDetails;
          if (this.dd.length == 1) {
            this.body = this.getDebtsDetails[0].body;
            this.header = this.getDebtsDetails[0].header;
          }
          if (this.dd.length > 1) this.showModalBill = true;
        });
      }
    },
    selectOwnership(ownership) {
      this.showModal = false;
      this.getDebtByBill(ownership.bill).then(() => {
        this.body = this.getDebtsDetails[0].body;
        this.header = this.getDebtsDetails[0].header;
      });
    },
    printOne() {
      this.printDebtByApartment(this.getDebt);
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
      getDebtsDetails: "payment/getDebtsDetails",
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
