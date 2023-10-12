<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <div class="block">
      <div class="title">Введите № помещения :</div>
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '65px' }"
      />
      <button-bills
        :hidden="!this.checkApartment"
        @click="getPersonalAccountByApartment"
        >Получить лицевой счёт
      </button-bills>
    </div>
    <div class="block_form">
      <block-edit-payment
        :paymentProps="payment"
        @payment="(data) => (payment = data)"
        @isValidPayment="(value) => (isValidPayment = value)"
      />
    </div>
    <vue-hr />
    <button-back />
    <button-simple @click="sendToServer" :hidden="!isValidPayment">{{
      SEND_TO_SERVER
    }}</button-simple>
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите создать платёжное поручение?"
      @close="showModal = false"
      @successfuly="successfulyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { PAGE_PAYMENTS_GET } from "@/router/apiRouter";
import { SEND_TO_SERVER } from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: "1",
      payment: {},
      isValidPayment: false,
      showModal: false,
      PAGE_PAYMENTS_GET,
      SEND_TO_SERVER,
    };
  },
  methods: {
    ...mapActions({
      fetchPersonalAccountByApartment:
        "ownership/fetchPersonalAccountByApartment",
      createPayment: "payment/createPayment",
    }),
    getPersonalAccountByApartment() {
      this.fetchPersonalAccountByApartment(this.apartment).then(() => {
        this.payment.personalAccount = this.getPersonalAccount;
      });
    },
    sendToServer() {
      this.showModal = true;
    },
    successfulyAction() {
      this.createPayment(this.payment).then(() => {
        this.$router.push(PAGE_PAYMENTS_GET);
      });
    },
  },
  computed: {
    ...mapGetters({
      getPersonalAccount: "ownership/getPersonalAccount",
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
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
</style>
