<template>
  <div class="main">
    <line-header text="Платёжное поручение" :style="{ color: 'brown' }" />

    <div class="personal_account">
      <block-error-message
        :field="payment.personalAccount"
        messageFalse="Укажите номер лицевого счёта"
        messageTrue="Лицевой счёт"
        @valid="(value) => handlerPersonalAccount(value)"
      />
      <input-simple
        v-model.trim="payment.personalAccount"
        placeholder="Лицевой счёт"
      />
    </div>

    <div class="summa">
      <block-error-message
        :field="payment.summa"
        messageFalse="Укажите сумму"
        messageTrue="Сумма"
        @valid="(value) => handlerSumma(value)"
      />
      <input-simple v-model.number="payment.summa" placeholder="Сумма" />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-edit-payment",
  props: {
    paymentProps: Object,
  },
  data() {
    return {
      payment: {},
      validPersonalAccount: false,
      validSumma: false,
    };
  },
  methods: {
    emitPayment() {
      this.$emit("isValidPayment", this.isValidPayment);
      this.$emit("payment", this.payment);
    },
    handlerPersonalAccount(value) {
      this.validPersonalAccount = value;
      this.emitPayment();
    },
    handlerSumma(value) {
      this.validSumma = value;
      this.emitPayment();
    },
  },
  computed: {
    isValidPayment() {
      return this.validPersonalAccount && this.validSumma;
    },
  },
  updated() {
    this.payment = this.paymentProps;
  },
  mounted() {
    this.payment = this.paymentProps;
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
