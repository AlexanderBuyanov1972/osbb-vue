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
      :text="`Детализация долга за услуги по управлению ОСББ по помещению № ${apartment}`"
      :style="{ color: 'darkgoldenrod' }"
    />
    <div class="header" v-if="flag">
      <block-header-debt :header="header" />
      <vue-hr />
      <debt-item
        :body="titles"
        :style="{ color: 'brown', 'font-size': '18px' }"
      />
      <div class="list" v-for="one in body">
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
      @successfully="printList"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: "",
      showModal: false,
      showModalAll: false,
      flag: true,
      body: [],
      header: {},
      dd: [],
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
      fetchDetailsDebtByApartment: "payment/fetchDetailsDebtByApartment",
      printPdfDebtDetailsByApartment: "payment/printPdfDebtDetailsByApartment",
      printPdfDebtDetailsAllApartment:
        "payment/printPdfDebtDetailsAllApartment",
    }),
    print() {
      this.printPdfDebtDetailsByApartment(this.apartment);
    },
    printList() {
      this.printPdfDebtDetailsAllApartment();
    },
  },
  mounted() {
    this.apartment = this.$route.params.apartment;
    this.fetchDetailsDebtByApartment(this.apartment).then(() => {
      this.dd = this.getDebtsDetails;
      if(this.dd.length == 0){

      }
      if(this.dd.length == 1){

      }
      if(this.dd.length >1){
        
      }
      // this.body = this.getDebtDetailsBody;
      // this.header = this.getDebtDetailsHeader;
    });
  },
  computed: {
    ...mapGetters({
      getDebtsDetails: "payment/getDebtsDetails",
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
