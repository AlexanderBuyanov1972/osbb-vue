<template>
  <div class="main">
    <line-address :address="header.address" />
    <div class="bill">
      Лицевой счёт № <span>{{ header.bill }}</span>
    </div>
    <div class="area">
      Общая площадь помещения, на которую начисляется оплата:
      <span> {{ header.area }}</span>
      м2.
    </div>
    <div class="time">
      Текущее время:
      <span> {{ header.currentTime }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "block-header-debt",
  props: {
    header: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.area,
.bill,
.time {
  font-size: 20px;
  color: blueviolet;
  margin-top: 10px;
}
span {
  color: red;
  vertical-align: top;
}
</style>
