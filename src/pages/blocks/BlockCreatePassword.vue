<template>
  <div class="main" @mousemove="emitPassword">
    <h2>Паспорт собственника.</h2>
    <div class="password">
      <block-error :field="password.passwordID" message="Укажите номер паспорта (XXXXXXXXX)." />
      <input-simple v-model="password.passwordID" placeholder="Паспорт ID" />

      <block-error :field="password.numberEntry" message="Укажите номер записи YYYYMMDD-XXXXX." />
      <input-simple v-model="password.numberEntry" placeholder="Номер записи" />

      <block-error :field="password.dateIssue" message="Укажите дату выдачи (YYYY-MM-DD)." />
      <input-simple v-model="password.dateIssue" placeholder="Дата выдачи" />

      <block-error :field="password.issuingAuthority" message="Укажите ИНН (XXXXXXXXXX)." />
      <input-simple
        v-model="password.issuingAuthority"
        placeholder="Орган выдачи"
      />

      <block-error :field="password.registrationNumberCardPayerTaxes" message="Укажите кем выдан (XXXX)." />
      <input-simple
        v-model="password.registrationNumberCardPayerTaxes"
        placeholder="ИНН"
      />
    </div>
    <button-reset @click="reset" :hidden="!validPassword">Очистить</button-reset>
  </div>
</template>
<script>
export default {
  name: "block-create-password",
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
      this.$emit("validPassword", this.validPassword);
      this.$emit("password", this.password);
    },
    reset() {
      this.password.passwordID = "";
      this.password.numberEntry = "";
      this.password.dateIssue = "";
      this.password.issuingAuthority = "";
      this.password.registrationNumberCardPayerTaxes = "";
    },
  },
  computed: {
    validPassword() {
      return (
        this.password.passwordID.length &&
        this.password.numberEntry.length &&
        this.password.dateIssue.length &&
        this.password.issuingAuthority.length &&
        this.password.registrationNumberCardPayerTaxes.length
      );
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
h2{
  color: blueviolet;
  margin-bottom: 10px;
  text-align: center;
}
</style>
