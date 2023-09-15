<template>
  <div class="main">
    <line-header-block text="Паспорт собственника" />
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
  name: "block-edit-passport",
  props: {
    id: Number,
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
      fetchPassport: "passport/fetchPassport",
    }),
    emitPassport() {
      this.$emit("isValidPassport", this.isValidPassport);
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
      getPassport: "passport/getPassport",
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
  mounted() {
    if (this.id != 0) {
      if (this.id != undefined) {
        this.fetchPassport(this.id).then(
          () => (this.passport = this.getPassport)
        );
      } else {
        this.fetchPassport(this.$route.params.id).then(
          () => (this.passport = this.getPassport)
        );
      }
    }
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
