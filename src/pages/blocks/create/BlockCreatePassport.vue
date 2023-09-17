<template>
  <div class="main" @mousemove="emitPassport">
    <line-header text="Паспорт собственника" :style="{'color':'brown'}"/>
    <div class="passport">
      <div class="numberPassport">
        <block-error-message
          :field="passport.numberPassport"
          messageFalse="Укажите номер паспорта (XXXXXXXXX)."
          messageTrue="Номер паспорт (XXXXXXXXX)."
          @valid="(value) => (validNumberPassport = value)"
        />
        <input-simple v-model="passport.numberPassport" placeholder="Номер паспорта." />
      </div>

      <div class="numberEntry">
        <block-error-message
          :field="passport.numberEntry"
          messageFalse="Укажите номер записи YYYYMMDD-XXXXX."
          messageTrue="Номер записи (YYYYMMDD-XXXXX)."
          @valid="(value) => (validNumberEntry = value)"
        />
        <input-simple
          v-model="passport.numberEntry"
          placeholder="Номер записи."
        />
      </div>

      <div class="dateIssue">
        <block-error-message
          :field="passport.dateIssue"
          messageFalse="Укажите дату выдачи (YYYY-MM-DD)."
          messageTrue="Дата выдачи (YYYY-MM-DD)."
          @valid="(value) => (validDateIssue = value)"
        />
        <input-simple v-model="passport.dateIssue" placeholder="Дата выдачи." />
      </div>

      <div class="issuingAuthority">
        <block-error-message
          :field="passport.issuingAuthority"
          messageFalse="Укажите кем выдан (XXXX)."
          messageTrue="Орган выдачи (XXXX)."
          @valid="(value) => (validIssuingAuthority = value)"
        />
        <input-simple
          v-model="passport.issuingAuthority"
          placeholder="Орган выдачи."
        />
      </div>

      <div class="registrationNumberCardPayerTaxes">
        <block-error-message
          :field="passport.registrationNumberCardPayerTaxes"
          messageFalse="Укажите ИНН (XXXXXXXXXX)."
          messageTrue="ИНН (XXXXXXXXXX)."
          @valid="(value) => (validRegistrationNumberCardPayerTaxes = value)"
        />
        <input-simple
          v-model="passport.registrationNumberCardPayerTaxes"
          placeholder="ИНН."
        />
      </div>
    </div>
    <button-reset @click="reset" :hidden="!isValidPassport"
      >Очистить</button-reset
    >
  </div>
</template>
<script>
export default {
  name: "block-create-passport",
  data() {
    return {
      passport: {},
      validNumberPassport: false,
      validNumberEntry: false,
      validDateIssue: false,
      validIssuingAuthority: false,
      validRegistrationNumberCardPayerTaxes: false,
    };
  },
  methods: {
    emitPassport() {
      this.$emit("isValidPassport", this.isValidPassport);
      this.$emit("passport", this.passport);
    },
    reset() {
      this.passport.numberPassport = "";
      this.passport.numberEntry = "";
      this.passport.dateIssue = "";
      this.passport.issuingAuthority = "";
      this.passport.registrationNumberCardPayerTaxes = "";
    },
  },
  computed: {
    isValidPassport() {
      return (
        this.validNumberPassport &&
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
</style>
