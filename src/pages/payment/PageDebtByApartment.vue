<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <div class="block_input">
      <div class="title">Введите № помещения :</div>
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '65px' }"
      />
      <button-bills :hidden="!this.checkApartment" @click="sendToServer"
        >Получить долг по квартире
      </button-bills>
      <button-bills
        :hidden="!this.checkApartment"
        @click="sendToServerGetDetailsDebt"
        >Получить распечатку за весь период
      </button-bills>
    </div>
    <line-header
      :text="`Расчётный баланс за услуги по управлению ОСББ по помещению № ${apartment}`"
      :style="{ color: 'darkgoldenrod' }"
    />
  </div>
  <div class="body" v-if="flag">
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
    <div class="block">
      <div class="item_1">
        <div class="name">
          Долг на {{ body.beginningPeriod }} составляет, грн
        </div>
        <div class="value">
          <span>{{ body.debtAtBeginningPeriod }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">Текущий тариф, грн/м2</div>
        <div class="value">
          <span>{{ body.rate }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">Начислено, грн</div>
        <div class="value">
          <span>{{ body.accrued }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">Перерасчёт за недополученные услуги, грн</div>
        <div class="value">
          <span>{{ body.recalculationForServicesNotReceived }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">Монетизация субсидий, грн</div>
        <div class="value">
          <span>{{ body.subsidyMonetization }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">Монетизация льгот, грн</div>
        <div class="value">
          <span>{{ body.monetizationBenefits }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">Оплачено, грн</div>
        <div class="value">
          <span>{{ body.paid }}</span>
        </div>
      </div>

      <div class="item">
        <div class="name">
          Долг на {{ body.finalizingPeriod }} составляет, грн
        </div>
        <div class="value">
          <span>{{ body.debtAtFinalizingPeriod }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PAGE_DEBT_DETAILS_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: "1",
      header: {},
      body: {},
      PAGE_DEBT_DETAILS_GET,
      flag: false,
    };
  },
  methods: {
    ...mapActions({
      getDebtByApartment: "payment/fetchDebtByApartment",
      getDetailsDebtByApartment: "payment/fetchDetailsDebtByApartment",
    }),
    sendToServer() {
      this.getDebtByApartment(this.apartment).then(() => {
        this.flag = true;
        this.body = this.getInvoiceNotification.body;
        this.header = this.getInvoiceNotification.header;
      });
    },
    sendToServerGetDetailsDebt() {
      this.$router.push(PAGE_DEBT_DETAILS_GET + "/" + this.apartment);
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
      getInvoiceNotification: "payment/getInvoiceNotification",
    }),
    checkApartment() {
      return this.apartment > 0 && this.apartment < 85;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.block_input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.block,
.total_area,
.personal_account,
.current_date_time {
  font-size: 20px;
  color: blueviolet;
}
span {
  color: red;
  vertical-align: top;
}
.block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  font-size: 17px;
  color: red;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: red;
  color: red;
}
.block {
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.item,
.item_1 {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid teal;
  border-top: 1px solid teal;
  border-right: 1px solid teal;
}
.name {
  border-bottom: 1px solid teal;
  text-align: center;
  vertical-align: middle;
  min-height: 80px;
}
.value {
  min-height: 40px;
  text-align: center;
  vertical-align: middle;
}
.item_1 {
  border-left: 1px solid teal;
}
</style>
