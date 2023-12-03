<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoadingPayment" />
    <vue-loader :isLoader="getIsLoadingOwnership" />
    <header-messages
      :messages="
        mergingTwoArraysAndRemovingIdenticalMessages(
          getMessagesPayment,
          getMessagesOwnership
        )
      "
    />
    <block-search-apartment-plus-minus
      nameButton="Получить лицевой счёт"
      @selectId="actionId"
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
    <button-simple @click="showModal = true" :hidden="!isValidPayment">
      Сохранить
    </button-simple>
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите создать платёжное поручение?"
      @close="showModal = false"
      @successfully="actionPayment"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { PAGE_PAYMENTS_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
import { mergingTwoArraysAndRemovingIdenticalMessages } from "@/pages/_functions/functions";
export default {
  data() {
    return {
      id: 0,
      payment: {},
      ownership: {},
      isValidPayment: false,
      showModal: false,
      PAGE_PAYMENTS_GET,
      mergingTwoArraysAndRemovingIdenticalMessages,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
      createPayment: "payment/createPayment",
    }),
    actionId(id) {
      this.id = id;
      this.fetchOwnership(this.id).then(() => {
        this.ownership = this.getOwnership;
        this.payment.bill = this.ownership.bill;
      });
    },
    actionPayment() {
      this.createPayment(this.payment).then(() => {
        this.$router.push(PAGE_PAYMENTS_GET);
      });
    },
  },
  computed: {
    ...mapGetters({
      getIsLoadingPayment: "payment/getIsLoading",
      getMessagesPayment: "payment/getMessages",
      getOwnership: "ownership/getOwnership",
      getIsLoadingOwnership: "ownership/getIsLoading",
      getMessagesOwnership: "ownership/getMessages",
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
