<template>
  <div class="main" @mousemove="emitPassword">
    <h2>Паспорт собственника.</h2>
    <div class="password">
      <div class="passwordID">
        <block-error-message
          :field="password.passwordID"
          messageFalse="Укажите номер паспорта (XXXXXXXXX)."
          messageTrue="Паспорт ID."
          @valid="(value) => (validPassword = value)"
        />
        <input-simple v-model="password.passwordID" placeholder="Паспорт ID" />
      </div>

      <div class="numberEntry">
        <block-error-message
          :field="password.numberEntry"
          messageFalse="Укажите номер записи YYYYMMDD-XXXXX."
          messageTrue="Номер записи."
          @valid="(value) => (validNumberEntry = value)"
        />
        <input-simple
          v-model="password.numberEntry"
          placeholder="Номер записи"
        />
      </div>

      <div class="dateIssue">
        <block-error-message
          :field="password.dateIssue"
          messageFalse="Укажите дату выдачи (YYYY-MM-DD)."
          messageTrue="Дата выдачи."
          @valid="(value) => (validDateIssue = value)"
        />
        <input-simple v-model="password.dateIssue" placeholder="Дата выдачи." />
      </div>

      <div class="issuingAuthority">
        <block-error-message
          :field="password.issuingAuthority"
          messageFalse="Укажите кем выдан (XXXX)."
          messageTrue="Орган выдачи."
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
          messageTrue="ИНН."
          @valid="(value) => (validRegistrationNumberCardPayerTaxes = value)"
        />
        <input-simple
          v-model="password.registrationNumberCardPayerTaxes"
          placeholder="ИНН"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "block-edit-password",
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
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
    }),
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
  mounted() {
    this.password = this.getOwner.password;
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
