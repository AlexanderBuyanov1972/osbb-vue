<template>
  <div class="main" @mousemove="emitPassword">
    <h2>Паспорт собственника.</h2>
    <div class="password">
      <div class="passwordID">
        <block-error-message
          :field="password.passwordID"
          messageFalse="Укажите номер паспорта (XXXXXXXXX)."
          messageTrue="Паспорт ID (XXXXXXXXX)."
          @valid="(value) => (validPassword = value)"
        />
        <input-simple v-model="password.passwordID" placeholder="Паспорт ID." />
      </div>

      <div class="numberEntry">
        <block-error-message
          :field="password.numberEntry"
          messageFalse="Укажите номер записи YYYYMMDD-XXXXX."
          messageTrue="Номер записи (YYYYMMDD-XXXXX)."
          @valid="(value) => (validNumberEntry = value)"
        />
        <input-simple
          v-model="password.numberEntry"
          placeholder="Номер записи."
        />
      </div>

      <div class="dateIssue">
        <block-error-message
          :field="password.dateIssue"
          messageFalse="Укажите дату выдачи (YYYY-MM-DD)."
          messageTrue="Дата выдачи (YYYY-MM-DD)."
          @valid="(value) => (validDateIssue = value)"
        />
        <input-simple v-model="password.dateIssue" placeholder="Дата выдачи." />
      </div>

      <div class="issuingAuthority">
        <block-error-message
          :field="password.issuingAuthority"
          messageFalse="Укажите кем выдан (XXXX)."
          messageTrue="Орган выдачи (XXXX)."
          @valid="(value) => (validIssuingAuthority = value)"
        />
        <input-simple
          v-model="password.issuingAuthority"
          placeholder="Орган выдачи."
        />
      </div>

      <div class="registrationNumberCardPayerTaxes">
        <block-error-message
          :field="password.registrationNumberCardPayerTaxes"
          messageFalse="Укажите ИНН (XXXXXXXXXX)."
          messageTrue="ИНН (XXXXXXXXXX)."
          @valid="(value) => (validRegistrationNumberCardPayerTaxes = value)"
        />
        <input-simple
          v-model="password.registrationNumberCardPayerTaxes"
          placeholder="ИНН."
        />
      </div>
    </div>
    <button-reset @click="reset" :hidden="!isValidPassword"
      >Очистить</button-reset
    >
  </div>
</template>
<script>
export default {
  name: "block-create-password",
  data() {
    return {
      password: {},
      validPassword: false,
      validNumberEntry: false,
      validDateIssue: false,
      validIssuingAuthority: false,
      validRegistrationNumberCardPayerTaxes: false,
    };
  },
  methods: {
    emitPassword() {
      this.$emit("isValidPassword", this.isValidPassword);
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
    isValidPassword() {
      return (
        this.validPassword &&
        this.validNumberEntry &&
        this.validDateIssue &&
        this.validIssuingAuthority &&
        this.validRegistrationNumberCardPayerTaxes
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
h2 {
  color: blueviolet;
  margin-bottom: 10px;
  text-align: center;
}
</style>
