<template>
  <div :class="payment.typeBill == 'COMING' ? ['main'] : ['main', 'active']">
    <div class="count">{{ count }}</div>
    <div class="bill">
      {{ payment.bill }}
    </div>
    <div class="description">
      {{ payment.description }}
    </div>
    <div class="date">
      {{ flagMap ? mapDate(payment.date) : payment.date }}
    </div>
    <div class="summa">{{ payment.summa }}</div>
  </div>
</template>
<script>
import { mapDate } from "@/pages/_functions/functions";
export default {
  name: "payment-item",
  props: {
    payment: Object,
    count: String,
    flagMap: Boolean,
  },
  data() {
    return {
      mapDate,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  margin: 5px 0px;
  padding: 5px;
  border: 1px solid teal;
  color: brown;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.active {
  color: crimson;
}
.count {
  width: 5%;
}
.bill {
  width: 23%;
}
.description {
  width: 23%;
}
.date {
  width: 23%;
}

.summa {
  width: 23%;
}

.btn {
  margin: 0px 0px 0px 50px;
}
</style>
