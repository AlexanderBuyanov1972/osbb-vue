<template>
  <div class="block">
    <button-bills @click="$router.push(PAGE_PAYMENTS_GET)"
      >{{ PAYMENTS_GET }}
    </button-bills>
    <button-bills @click="$router.push(PAGE_DEBT_GET)"
      >Текущий баланс по помещению
    </button-bills>
    <button-bills @click="$router.push(PAGE_PAYMENT_CREATE)"
      >{{ PAYMENT_CREATE }}
    </button-bills>
    <div class="total">Сумма на счёте ОСББ : {{ totalSumma }} грн</div>
  </div>
</template>
<script>
import {
  PAGE_PAYMENT_CREATE,
  PAGE_DEBT_GET,
  PAGE_PAYMENTS_GET,
} from "@/router/apiRouter";
import { PAYMENT_CREATE, PAYMENT_GET, PAYMENTS_GET } from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-payment",
  data() {
    return {
      PAGE_PAYMENT_CREATE,
      PAGE_DEBT_GET,
      PAGE_PAYMENTS_GET,
      PAYMENT_CREATE,
      PAYMENT_GET,
      PAYMENTS_GET,
      totalSumma: 0,
    };
  },
  methods: {
    ...mapActions({
      fetchTotalSummaPayment: "payment/fetchTotalSummaPayment",
    }),
  },
  mounted() {
    this.fetchTotalSummaPayment().then(() => {
      this.totalSumma = this.getTotalSummaPayment;
    });
  },
  computed: {
    ...mapGetters({
      getTotalSummaPayment: "payment/getTotalSummaPayment",
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
}
</style>
