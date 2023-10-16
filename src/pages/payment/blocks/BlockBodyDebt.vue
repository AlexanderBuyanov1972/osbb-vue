<template>
  <div class="body">
    <div class="item_1">
      <div class="name">Долг на {{ body.beginningPeriod }} составляет, грн</div>
      <div class="value">
        <span>{{ body.debtAtBeginningPeriod }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">Текущий тариф, грн/м2</div>
      <div class="value">
        <span>{{ body.rate }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">Начислено, грн</div>
      <div class="value">
        <span>{{ body.accrued }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">Перерасчёт за недополученные услуги, грн</div>
      <div class="value">
        <span>{{ body.recalculationForServicesNotReceived }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">Монетизация субсидий, грн</div>
      <div class="value">
        <span>{{ body.subsidyMonetization }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">Монетизация льгот, грн</div>
      <div class="value">
        <span>{{ body.monetizationBenefits }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">Оплачено, грн</div>
      <div class="value">
        <span>{{ body.paid }}</span>
      </div>
    </div>

    <div class="item">
      <div class="name">
        Долг на {{ body.finalizingPeriod }} составляет, грн
      </div>
      <div class="value">
        <span>{{ body.debtAtFinalizingPeriod }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "block-body-debt",
  props: {
    body: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.body {
  font-size: 20px;
  color: blueviolet;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
span {
  color: red;
  vertical-align: top;
}

.item,
.item_1 {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid teal;
  border-top: 1px solid teal;
  border-right: 1px solid teal;
}
.name {
  border-bottom: 1px solid teal;
  text-align: center;
  vertical-align: middle;
  min-height: 80px;
}
.value {
  min-height: 40px;
  text-align: center;
  vertical-align: middle;
}
.item_1 {
  border-left: 1px solid teal;
}
</style>
