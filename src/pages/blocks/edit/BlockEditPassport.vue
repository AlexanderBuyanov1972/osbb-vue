<template>
  <div class="main">
    <line-header text="Паспорт собственника" :style="{ color: 'brown' }" />
    <div class="passport">
      <div class="numberPassport">
        <block-error-message
          :field="passport.numberPassport"
          messageFalse="Укажите номер паспорта (XXXXXXXXX)."
          messageTrue="Номер паспорта."
          @valid="(value) => handlerNumberPassport(value)"
        />
        <input-simple
          v-model="passport.numberPassport"
          placeholder="Номер паспорта"
        />
      </div>

      <div class="numberEntry">
        <block-error-message
          :field="passport.numberEntry"
          messageFalse="Укажите номер записи YYYYMMDD-XXXXX."
          messageTrue="Номер записи."
          @valid="(value) => handlerNumberEntry(value)"
        />
        <input-simple
          v-model="passport.numberEntry"
          placeholder="Номер записи"
        />
      </div>

      <div class="dateIssue">
        <block-error-message
          :field="passport.dateIssue"
          messageFalse="Укажите дату выдачи (YYYY-MM-DD)."
          messageTrue="Дата выдачи."
          @valid="(value) => handlerDateIssue(value)"
        />
        <input-simple v-model="passport.dateIssue" placeholder="Дата выдачи." />
      </div>

      <div class="issuingAuthority">
        <block-error-message
          :field="passport.issuingAuthority"
          messageFalse="Укажите кем выдан (XXXX)."
          messageTrue="Орган выдачи."
          @valid="(value) => handlerIssuingAuthority(value)"
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
          messageTrue="ИНН."
          @valid="(value) => handlerRegistrationNumberCardPayerTaxes(value)"
        />
        <input-simple
          v-model="passport.registrationNumberCardPayerTaxes"
          placeholder="ИНН"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "block-update-passport",
  props: {
    passportProps: Object,
  },
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
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),

    emitPassport() {
      this.$emit("isValidPassport", this.isValidPassport);
      if (this.passport.dateIssue == "нет")
        this.passport.dateIssue = "1900-01-01";
      this.$emit("passport", this.passport);
    },
    handlerNumberPassport(value) {
      this.validNumberPassport = value;
      this.emitPassport();
    },
    handlerNumberEntry(value) {
      this.validNumberEntry = value;
      this.emitPassport();
    },
    handlerDateIssue(value) {
      this.validDateIssue = value;
      this.emitPassport();
    },
    handlerIssuingAuthority(value) {
      this.validIssuingAuthority = value;
      this.emitPassport();
    },
    handlerRegistrationNumberCardPayerTaxes(value) {
      this.validRegistrationNumberCardPayerTaxes = value;
      this.emitPassport();
    },
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
    }),
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
  updated() {
    this.passport = this.passportProps;
  },
  mounted() {
    this.passport = this.passportProps;
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
