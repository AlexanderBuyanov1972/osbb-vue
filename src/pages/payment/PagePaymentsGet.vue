<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <payment-item
    :style="{ color: 'blueviolet' }"
    :count="count"
    :payment="header"
    :flagMap="false"
  />
  <div class="list" v-for="(one, index) in list" :key="one.id">
    <payment-item :count="index + 1" :payment="one" :flagMap="true" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
      count: "№ ",
      header: {
        bill: "Лицевой счёт",
        description: "Статья расхода",
        date: "Дата",
        summa: "Сумма, грн",
      },
    };
  },
  methods: {
    ...mapActions({
      fetchAllPayment: "payment/fetchAllPayment",
    }),
  },
  computed: {
    ...mapGetters({
      getPayments: "payment/getPayments",
      getIsLoading: "payment/getIsLoading",
      getMessages: "payment/getMessages",
    }),
  },
  mounted() {
    this.fetchAllPayment().then(() => {
      this.list = this.getPayments;
    });
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
