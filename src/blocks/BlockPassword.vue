<template>
  <div class="main">
    <h3>Паспорт</h3>
    <p><span>Дата выдачи : </span>{{ getDateIssue(password.dateIssue) }}</p>
    <p><span>Номер записи : </span>{{ password.numberEntry }}</p>
    <p><span>Серийный номер : </span>{{ password.passwordID }}</p>
    <p><span>Орган выдачи : </span>{{ password.issuingAuthority }}</p>
    <p><span>ИНН : </span>{{ password.registrationNumberCardPayerTaxes }}</p>
  </div>
</template>
<script>
export default {
  props: {
    password: {
      Type: Object,
    },
  },
  methods: {
    getDateIssue(str) {
      return str.substring(0, str.indexOf("T"));
    },
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
  margin: 15px 5px;
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
}
p, h3 {
  margin: 0 30px;
}
span {
  color: blueviolet;
}
</style>
