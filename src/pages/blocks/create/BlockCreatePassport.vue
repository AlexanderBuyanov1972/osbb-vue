<template>
  <div class="main">
    <line-header text="Паспорт собственника" :style="{ color: 'brown' }" />
    <div class="passport">
      <div class="numberPassport">
        <block-error-message
          :field="passport.numberPassport"
          messageFalse="Укажите номер паспорта (XXXXXXXXX)."
          messageTrue="Номер паспорт (XXXXXXXXX)."
          @valid="(value) => handlerValidNumberPassport(value)"
        />
        <input-simple
          v-model.trim="passport.numberPassport"
          placeholder="Номер паспорта."
        />
      </div>

      <div class="numberEntry">
        <block-error-message
          :field="passport.numberEntry"
          messageFalse="Укажите номер записи YYYYMMDD-XXXXX."
          messageTrue="Номер записи (YYYYMMDD-XXXXX)."
          @valid="(value) => handlerValidNumberEntry(value)"
        />
        <input-simple
          v-model.trim="passport.numberEntry"
          placeholder="Номер записи."
        />
      </div>

      <div class="dateIssue">
        <block-error-message
          :field="passport.dateIssue"
          messageFalse="Укажите дату выдачи (YYYY-MM-DD)."
          messageTrue="Дата выдачи (YYYY-MM-DD)."
          @valid="(value) => handlerValidDateIssue(value)"
        />
        <input-simple
          v-model.trim="passport.dateIssue"
          placeholder="Дата выдачи."
        />
      </div>

      <div class="issuingAuthority">
        <block-error-message
          :field="passport.issuingAuthority"
          messageFalse="Укажите кем выдан (XXXX)."
          messageTrue="Орган выдачи (XXXX)."
          @valid="(value) => handlerValidIssuingAuthority(value)"
        />
        <input-simple
          v-model.trim="passport.issuingAuthority"
          placeholder="Орган выдачи."
        />
      </div>

      <div class="registrationNumberCardPayerTaxes">
        <block-error-message
          :field="passport.registrationNumberCardPayerTaxes"
          messageFalse="Укажите ИНН (XXXXXXXXXX)."
          messageTrue="ИНН (XXXXXXXXXX)."
          @valid="
            (value) => handlerValidRegistrationNumberCardPayerTaxes(value)
          "
        />
        <input-simple
          v-model.trim="passport.registrationNumberCardPayerTaxes"
          placeholder="ИНН."
        />
      </div>
    </div>
  </div>
</template>
<script>
import { generatePassport } from "@/pages/_functions/generate";
export default {
  name: "block-create-passport",
  data() {
    return {
      passport: generatePassport(),
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
      if (this.passport.dateIssue == "нет")
        this.passport.dateIssue = "1900-01-01";
      this.$emit("passport", this.passport);
    },
    handlerValidNumberPassport(value) {
      this.validNumberPassport = value;
      this.emitPassport();
    },
    handlerValidNumberEntry(value) {
      this.validNumberEntry = value;
      this.emitPassport();
    },
    handlerValidDateIssue(value) {
      this.validDateIssue = value;
      this.emitPassport();
    },
    handlerValidIssuingAuthority(value) {
      this.validIssuingAuthority = value;
      this.emitPassport();
    },
    handlerValidRegistrationNumberCardPayerTaxes(value) {
      this.validRegistrationNumberCardPayerTaxes = value;
      this.emitPassport();
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
@/pages/bills/_functions/generate
