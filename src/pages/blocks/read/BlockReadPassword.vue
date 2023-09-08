<template>
  <div class="wrapper">
    <div class="item">Паспорт</div>
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
  color: teal;
  font-size: 1em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
}
span {
  color: blueviolet;
}
.item {
  margin: 5px 0px;
  align-self: start;
}
</style>
