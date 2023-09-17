<template>
  <div class="wrapper">
    <div class="item" :style="{'color':'brown', 'font-size':'25px'}">Паспорт :</div>
    <div class="item">
      <span>Серийный номер : </span>{{ passport.numberPassport }}
    </div>
    <div class="item">
      <span>Номер записи : </span>{{ passport.numberEntry }}
    </div>
    <div class="item"><span>Дата выдачи : </span>{{ passport.dateIssue }}</div>
    <div class="item">
      <span>Орган выдачи : </span>{{ passport.issuingAuthority }}
    </div>
    <div class="item">
      <span>ИНН : </span>{{ passport.registrationNumberCardPayerTaxes }}
    </div>
  </div>
</template>
<script>
export default {
  name: "block-read-passport",
  props: {
    passport: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 15px 0px;
  padding: 25px;
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border: 1px solid blueviolet;
  font-size: 20px;
}
span {
  color: blueviolet;
}
.item {
  margin: 5px 0px;
  align-self: start;
}
</style>
