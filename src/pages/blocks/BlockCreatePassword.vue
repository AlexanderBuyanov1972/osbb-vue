<template>
  <div class="main" :on-mouseout="emitPassword">
    <h2>Создать паспорт собственника.</h2>
    <div class="password">
      <input-simple v-model="password.passwordID" placeholder="Паспорт ID" />
      <input-simple v-model="password.numberEntry" placeholder="Номер записи" />
      <input-simple v-model="password.dateIssue" placeholder="Дата выдачи" />
      <input-simple
        v-model="password.issuingAuthority"
        placeholder="Орган выдачи"
      />
      <input-simple
        v-model="password.registrationNumberCardPayerTaxes"
        placeholder="ИНН"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: {
        passwordID: "",
        numberEntry: "",
        dateIssue: "",
        issuingAuthority: "",
        registrationNumberCardPayerTaxes: "",
      },
    };
  },
  methods: {
    emitPassword() {
      this.$emit("password", password);
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
}
</style>
