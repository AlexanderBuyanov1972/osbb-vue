<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <block-search-apartment
      nameButton="Получить лицевой счёт"
      @apartment="(value) => action(value)"
    />
    <div class="block_form">
      <block-edit-payment
        :paymentProps="payment"
        @payment="(data) => (payment = data)"
        @isValidPayment="(value) => (isValidPayment = value)"
      />
    </div>
    <vue-hr />
    <button-back />
    <button-simple @click="showModal = true" :hidden="!isValidPayment">{{
      Сохранить
    }}</button-simple>
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите создать платёжное поручение?"
      @close="showModal = false"
      @successfuly="successfullyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { PAGE_PAYMENTS_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      payment: {},
      isValidPayment: false,
      showModal: false,
      PAGE_PAYMENTS_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchBillByApartment: "ownership/fetchBillByApartment",
      createPayment: "payment/createPayment",
    }),
    action(value) {
      this.fetchBillByApartment(value).then(() => {
        this.payment.bill = this.getBill;
      });
    },
    successfullyAction() {
      this.createPayment(this.payment).then(() => {
        this.$router.push(PAGE_PAYMENTS_GET);
      });
    },
  },
  computed: {
    ...mapGetters({
      getBill: "ownership/getBill",
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
