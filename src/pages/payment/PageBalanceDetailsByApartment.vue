<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <button-back />
    <button-simple v-if="flag" @click="showModal = true">Печать</button-simple>
    <button-simple v-if="flag" @click="showModalAll = true"
      >Печатать на все помещения</button-simple
    >
    <line-header
      :text="`Детализация долга за услуги по управлению ОСББ по помещению № ${header.address.apartment}`"
      :style="{ color: 'darkgoldenrod' }"
    />
    <div class="header" v-if="flag">
      <block-header-debt :header="header" />
      <vue-hr />
      <debt-item
        :body="titles"
        :style="{ color: 'brown', 'font-size': '18px' }"
      />
      <div class="list" v-for="(one, index) in body" :key="index">
        <debt-item :body="one" />
      </div>
    </div>
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModal = false"
      @successfully="print"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalAll">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalAll = false"
      @successfully="printAllDebtDetails"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      id: 0,
      showModal: false,
      showModalAll: false,
      flag: true,
      body: [],
      header: {
        address: {},
      },

      titles: {
        beginningPeriod: "Начальный период",
        debtAtBeginningPeriod: `Долг на начало периода, грн`,
        rate: "Текущий тариф, грн/м2",
        accrued: "Начислено, грн",
        recalculationForServicesNotReceived:
          "Перерасчёт за недополученные услуги, грн",
        subsidyMonetization: "Монетизация субсидий, грн",
        monetizationBenefits: "Монетизация льгот, грн",
        paid: "Оплачено, грн",
        debtAtFinalizingPeriod: `Долг на конец период, грн`,
        finalizingPeriod: "Конечный период",
      },
    };
  },
  methods: {
    ...mapActions({
      fetchDetailsDebtById: "payment/fetchDetailsDebtById",
      printDebtDetailsById: "payment/printDebtDetailsById",
      printAllDebtDetails: "payment/printAllDebtDetails",
    }),
    print() {
      this.printDebtDetailsById(this.id);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchDetailsDebtById(this.id).then(() => {
      this.body = this.getDebtDetails.list;
      this.header = this.getDebtDetails.header;
    });
  },
  computed: {
    ...mapGetters({
      getDebtDetails: "payment/getDebtDetails",
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
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
  font-size: 20px;
}
</style>
