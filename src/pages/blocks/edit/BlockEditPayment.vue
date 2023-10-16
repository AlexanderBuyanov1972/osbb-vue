<template>
  <div class="main">
    <line-header
      text="Платёжное поручение - приход"
      :style="{ color: 'brown' }"
    />

    <div class="bill">
      <block-error-message
        :field="payment.bill"
        messageFalse="Укажите номер счёта"
        messageTrue="Счёт"
        @valid="(value) => handlerBill(value)"
      />
      <input-simple v-model.trim="payment.bill" placeholder="Счёт" />
    </div>

    <div class="description">
      <block-error-message
        :field="payment.description"
        messageFalse="Укажите назначение платежа"
        messageTrue="Назначение платежа"
        @valid="(value) => handlerDescription(value)"
      />
      <select-edit
        :array="arrayDescription"
        @select="(value) => (payment.description = value)"
        :startName="payment.description"
      />
    </div>

    <div class="remark">
      <block-error-message
        :field="payment.remark"
        messageFalse="Укажите примечание"
        messageTrue="Примечание"
        @valid="(value) => handlerRemark(value)"
      />
      <input-simple v-model.trim="payment.remark" placeholder="Примечание" />
    </div>

    <div class="typeBill">
      <block-error-message
        :field="payment.typeBill"
        messageFalse="Укажите тип оперции"
        messageTrue="Тип операции"
        @valid="(value) => handlerTypeBill(value)"
      />
      <select-edit
        :array="arrayTypeBill"
        @select="(value) => (payment.typeBill = value)"
        :startName="showTypeBill(payment.typeBill)"
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
import {
  arrayTypeBill,
  arrayDescription,
} from "@/pages/_functions/arraysOfData";
import { showTypeBill } from "@/pages/_functions/functions";
export default {
  name: "block-edit-payment",
  props: {
    paymentProps: Object,
  },
  data() {
    return {
      payment: {},
      arrayTypeBill,
      arrayDescription,
      showTypeBill,
      // valid
      validBill: false,
      validSumma: false,
      validDescription: false,
      validTypeBill: false,
      validRemark: false,
    };
  },
  methods: {
    emitPayment() {
      this.$emit("isValidPayment", this.isValidPayment);
      this.$emit("payment", this.payment);
    },
    handlerBill(value) {
      this.validBill = value;
      this.emitPayment();
    },
    handlerDescription(value) {
      this.validDescription = value;
      this.emitPayment();
    },
    handlerRemark(value) {
      this.validRemark = value;
      this.emitPayment();
    },
    handlerTypeBill(value) {
      this.validTypeBill = value;
      this.emitPayment();
    },
    handlerSumma(value) {
      this.validSumma = value;
      this.emitPayment();
    },
  },
  computed: {
    isValidPayment() {
      return (
        this.validBill &&
        this.validSumma &&
        this.validDescription &&
        this.validTypeBill &&
        this.validRemark
      );
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
