<template>
  <div class="main">
    <div class="count">{{ count }}</div>
    <div class="personalAccount">
      {{ payment.personalAccount }}
    </div>
    <div class="date">
      {{ payment.date }}
    </div>
    <div class="summa">{{ payment.summa }}</div>
  </div>
</template>
<script>
export default {
  name: "payment-item",
  props: {
    payment: Object,
    count: String,
  },
  data() {
    return {};
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
  color: blueviolet;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.count {
  width: 5%;
}
.personalAccount {
  width: 30%;
}
.date {
  width: 25%;
}

.summa {
  width: 25%;
}

.btn {
  margin: 0px 0px 0px 50px;
}
</style>
