<template>
  <div class="block">
    <div class="beginningPeriod">
      <span>{{ body.beginningPeriod }}</span>
    </div>
    <div class="debtAtBeginningPeriod">
      <span>{{ body.debtAtBeginningPeriod }}</span>
    </div>
    <div class="rate">
      <span>{{ body.rate }}</span>
    </div>
    <div class="accrued">
      <span>{{ body.accrued }}</span>
    </div>
    <div class="recalculationForServicesNotReceived">
      <span>{{ body.recalculationForServicesNotReceived }}</span>
    </div>
    <div class="subsidyMonetization">
      <span>{{ body.subsidyMonetization }}</span>
    </div>
    <div class="monetizationBenefits">
      <span>{{ body.monetizationBenefits }}</span>
    </div>
    <div class="paid">
      <span>{{ body.paid }}</span>
    </div>
    <div class="debtAtFinalizingPeriod">
      <span>{{ body.debtAtFinalizingPeriod }}</span>
    </div>
    <div class="finalizingPeriod">
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
  color: blueviolet;
}
.beginningPeriod {
  width: 10%;
  text-align: center;
}
.debtAtBeginningPeriod {
  width: 10%;
  text-align: center;
}
.rate {
  width: 10%;
  text-align: center;
}
.accrued {
  width: 10%;
  text-align: center;
}
.recalculationForServicesNotReceived {
  width: 10%;
  text-align: center;
}
.subsidyMonetization {
  width: 10%;
  text-align: center;
}
.monetizationBenefits {
  width: 10%;
  text-align: center;
}
.paid {
  width: 10%;
  text-align: center;
}
.debtAtFinalizingPeriod {
  width: 10%;
  text-align: center;
}
.finalizingPeriod {
  width: 10%;
  text-align: center;
}
</style>
