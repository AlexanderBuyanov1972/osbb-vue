<template>
  <div class="block">
    <button-bills @click="$router.push(PAGE_PAYMENTS_GET)"
      >Все проводки
    </button-bills>
    <button-bills @click="$router.push(PAGE_BALANCE_ROOM)"
      >Текущий баланс по помещению
    </button-bills>
    <button-bills @click="$router.push(PAGE_PAYMENT_CREATE)"
      >Создать проводку
    </button-bills>
    <div class="total">Сумма на счёте ОСББ : {{ balance }} грн</div>
  </div>
</template>
<script>
import {
  PAGE_PAYMENT_CREATE,
  PAGE_BALANCE_ROOM,
  PAGE_PAYMENTS_GET,
} from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-payment",
  data() {
    return {
      PAGE_PAYMENT_CREATE,
      PAGE_BALANCE_ROOM,
      PAGE_PAYMENTS_GET,
      balance: 0,
    };
  },
  methods: {
    ...mapActions({
      fetchBalance: "payment/fetchBalance",
    }),
  },
  mounted() {
    this.fetchBalance().then(() => {
      this.balance = this.getBalance;
    });
  },
  computed: {
    ...mapGetters({
      getBalance: "payment/getBalance",
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
  justify-content: space-between;
}
.total {
  color: crimson;
  font-size: 20px;
}
</style>
