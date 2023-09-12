<template>
  <div class="wrapper">
    <div class="item" :style="{'color':'brown', 'font-size':'1.5em'}">Паспорт :</div>
    <div class="item">
      <span>Серийный номер : </span>{{ password.passwordID }}
    </div>
    <div class="item">
      <span>Номер записи : </span>{{ password.numberEntry }}
    </div>
    <div class="item"><span>Дата выдачи : </span>{{ password.dateIssue }}</div>
    <div class="item">
      <span>Орган выдачи : </span>{{ password.issuingAuthority }}
    </div>
    <div class="item">
      <span>ИНН : </span>{{ password.registrationNumberCardPayerTaxes }}
    </div>
  </div>
</template>
<script>
export default {
  name: "block-read-password",
  props: {
    password: Object,
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
  padding: 10px;
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border: 2px solid blueviolet;
  font-size: 1.2em;
}
span {
  color: blueviolet;
}
.item {
  margin: 7px 0px;
  font-size: 1.3em;
  align-self: start;
}
</style>
