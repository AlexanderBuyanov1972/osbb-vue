<template>
  <header-payment />
  <div class="main">
    <vue-loader :isLoader="getIsLoadingPayment" />
    <vue-loader :isLoader="getIsLoadingOwnership" />
    <header-messages
      :messages="[...getMessagesPayment, ...getMessagesOwnership]"
    />
    <block-search-apartment-plus-minus
      nameButton="Получить лицевой счёт"
      @apartment="actionApartment"
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
  <dialog-window :show="showModalBill">
    <modal-select-bill-ownership
      :message="`По помещению № ${apartment} числится ${ownerships.length} лицевых счетов. 
      Выберите подходящий для вашего запроса.`"
      :ownerships="ownerships"
      @close="showModalBill = false"
      @select="selectOwnership"
    ></modal-select-bill-ownership>
  </dialog-window>
</template>
<script>
import { PAGE_PAYMENTS_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      apartment: 1,
      payment: {},
      ownerships: [],
      isValidPayment: false,
      showModal: false,
      PAGE_PAYMENTS_GET,
      showModalBill: false,
    };
  },
  methods: {
    ...mapActions({
      fetchAllOwnershipByApartment: "ownership/fetchAllOwnershipByApartment",
      createPayment: "payment/createPayment",
    }),
    selectOwnership(ownership) {
      this.payment.bill = ownership.bill;
    },
    actionApartment(apartment) {
      this.apartment = apartment;
      this.fetchAllOwnershipByApartment(this.apartment).then(() => {
        this.ownerships = this.getOwnerships;
        if (this.ownerships.length > 1) {
          this.showModalBill = true;
        }
        if (this.ownerships.length == 1) {
          this.payment.bill = this.ownerships[0].bill;
        }
        if (this.ownerships.length == 0) {
          this.payment.bill = 0;
        }
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
      getOwnerships: "ownership/getOwnerships",
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
