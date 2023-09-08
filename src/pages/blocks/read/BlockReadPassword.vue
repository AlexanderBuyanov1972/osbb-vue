<template>
  <div class="wrapper">
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
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 5px;
  border: 2px solid blueviolet;
  font-size: 1.2em;
}
span {
  color: blueviolet;
}
.item {
  margin: 5px 0px;
  align-self: start;
}
</style>
