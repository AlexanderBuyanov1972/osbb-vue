<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header
      :text="`Детализация долга за услуги по управлению ОСББ по помещению № ${apartment}`"
      :style="{ color: 'darkgoldenrod' }"
    />
    <div class="body">
      <line-address :address="header.address" />
      <div class="personal_account">
        Лицевой счёт № <span>{{ header.personalAccount }}</span>
      </div>
      <div class="total_area">
        Общая площадь помещения, на которую начисляется оплата:
        <span> {{ header.totalArea }}</span>
        м2.
      </div>
      <div class="current_date_time">
        Текущее время:
        <span> {{ header.currentDateTime }}</span>
      </div>
      <vue-hr />
      <debt-item :body="titles" />
      <div class="list" v-for="one in body">
        <debt-item :body="one" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: "",
      body: [],
      header: {
        address:{}
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
      fetchDetailsDebtByApartment: "payment/fetchDetailsDebtByApartment",
    }),
  },
  mounted() {
    this.apartment = this.$route.params.apartment;
    this.fetchDetailsDebtByApartment(this.apartment).then(() => {
      this.body = this.getDebtDetailsBody;
      this.header = this.getDebtDetailsHeader;
    });
  },
  computed: {
    ...mapGetters({
      getDebtDetailsHeader: "payment/getDebtDetailsHeader",
      getDebtDetailsBody: "payment/getDebtDetailsBody",
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
.block,
.total_area,
.personal_account,
.current_date_time {
  font-size: 20px;
  color: blueviolet;
}
</style>
