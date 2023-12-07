<template>
  <header-payment />
  <button-back />
  <button-simple v-if="flag" @click="showModal = true">Печать</button-simple>
  <button-simple v-if="flag" @click="showModalAll = true"
    >Печатать на все помещения</button-simple
  >
  <button-simple v-if="flag" @click="showModalAllInOne = true"
    >Печатать на все помещения в один файл</button-simple
  >

  <div class="buttons">
    <block-search-apartment
      nameButton="Задолженность по помещению"
      @selectId="actionId"
    />
    <button-simple
      @click="$router.push(PAGE_BALANCE_DEBT_DETAILS + '/' + id)"
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
  <div class="body" v-if="this.body != undefined">
    <block-header-debt :header="header" />
    <vue-hr />
    <block-body-debt :body="body" />
    <vue-hr />
  </div>
  <line-header
    v-if="this.body == undefined"
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
      @successfully="printListDebtById"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalAllInOne">
    <modal-action
      message="Вы действительно хотите распечатать на все помещения в один файл?"
      @close="showModalAllInOne = false"
      @successfully="printAllInOneDebt"
    ></modal-action>
  </dialog-window>
</template>
<script>
import {
  PAGE_BALANCE_DEBT_DETAILS,
  PAGE_BALANCE_HOUSE,
} from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      id: 1,
      showModal: false,
      showModalAll: false,
      showModalAllInOne: false,
      header: {
        address: {},
      },
      body: {},
      PAGE_BALANCE_DEBT_DETAILS,
      PAGE_BALANCE_HOUSE,
    };
  },
  methods: {
    ...mapActions({
      getDebtById: "payment/fetchDebtById",
      printDebtById: "payment/printDebtById",
      printListDebtById: "payment/printListDebtById",
      printAllInOneDebt: "payment/printAllInOneDebt",
    }),
    actionId(id) {
      this.id = id;
      if (this.id > 0) {
        this.getDebtById(this.id).then(() => {
          this.body = this.getDebtDetails.list[0];
          this.header = this.getDebtDetails.header;
        });
      }
    },
    printOne() {
      this.printDebtByApartment(this.getDebt);
    },
  },
  mounted() {
    this.actionId(this.id);
  },
  computed: {
    ...mapGetters({
      getDebtDetails: "payment/getDebtDetails",
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
