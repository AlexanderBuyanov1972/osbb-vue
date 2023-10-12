<template>
  <div class="block">
    <div class="item_1">
      <span>{{ body.beginningPeriod }}</span>
    </div>
    <div class="item">
      <span>{{ body.debtAtBeginningPeriod }}</span>
    </div>
    <div class="item">
      <span>{{ body.rate }}</span>
    </div>
    <div class="item">
      <span>{{ body.accrued }}</span>
    </div>
    <div class="item">
      <span>{{ body.recalculationForServicesNotReceived }}</span>
    </div>
    <div class="item">
      <span>{{ body.subsidyMonetization }}</span>
    </div>
    <div class="item">
      <span>{{ body.monetizationBenefits }}</span>
    </div>
    <div class="item">
      <span>{{ body.paid }}</span>
    </div>
    <div class="item">
      <span>{{ body.debtAtFinalizingPeriod }}</span>
    </div>
    <div class="item">
      <span>{{ body.finalizingPeriod }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "debt-item",
  props: {
    body: Object,
  },
  data() {
    return {};
  },
  methods: {},
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
  justify-content: space-between;
  align-items: center;
  border: 1px solid teal;
  margin: 1% 0%;
  color:blueviolet
}
.item{
  width: 10%;
}
</style>
