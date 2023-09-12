<template>
  <div class="main">
    <h2>Паспорт собственника.</h2>
    <div class="password">
      <div class="passwordID">
        <block-error-message
          :field="password.passwordID"
          messageFalse="Укажите номер паспорта (XXXXXXXXX)."
          messageTrue="Паспорт ID."
          @valid="(value) => handlerPasswordID(value)"
        />
        <input-simple v-model="password.passwordID" placeholder="Паспорт ID" />
      </div>

      <div class="numberEntry">
        <block-error-message
          :field="password.numberEntry"
          messageFalse="Укажите номер записи YYYYMMDD-XXXXX."
          messageTrue="Номер записи."
          @valid="(value) => handlerNumberEntry(value)"
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
          @valid="(value) => handlerDateIssue(value)"
        />
        <input-simple v-model="password.dateIssue" placeholder="Дата выдачи." />
      </div>

      <div class="issuingAuthority">
        <block-error-message
          :field="password.issuingAuthority"
          messageFalse="Укажите кем выдан (XXXX)."
          messageTrue="Орган выдачи."
          @valid="(value) => handlerIssuingAuthority(value)"
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
          @valid="(value) => handlerRegistrationNumberCardPayerTaxes(value)"
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
import { mapActions, mapGetters} from "vuex";
export default {
  name: "block-edit-password",
  props: {
    id: Number,
  },
  data() {
    return {
      password: {},
      validPasswordID: false,
      validNumberEntry: false,
      validDateIssue: false,
      validIssuingAuthority: false,
      validRegistrationNumberCardPayerTaxes: false,
    };
  },
  methods: {
    ...mapActions({
      fetchPassword: "password/fetchPassword",
    }),
    emitPassword() {
      this.$emit("isValidPassword", this.isValidPassword);
      this.$emit("password", this.password);
    },
    handlerPasswordID(value) {
      this.validPasswordID = value;
      this.emitPassword();
    },
    handlerNumberEntry(value) {
      this.validNumberEntry = value;
      this.emitPassword();
    },
    handlerDateIssue(value) {
      this.validDateIssue = value;
      this.emitPassword();
    },
    handlerIssuingAuthority(value) {
      this.validIssuingAuthority = value;
      this.emitPassword();
    },
    handlerRegistrationNumberCardPayerTaxes(value) {
      this.validRegistrationNumberCardPayerTaxes = value;
      this.emitPassword();
    },
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
      getPassword: "password/getPassword",
    }),
    isValidPassword() {
      return (
        this.validPasswordID &&
        this.validNumberEntry &&
        this.validDateIssue &&
        this.validIssuingAuthority &&
        this.validRegistrationNumberCardPayerTaxes
      );
    },
  },
  mounted() {
    if (this.id != undefined) {
      this.fetchPassword(this.id).then(
        () => (this.password = this.getPassword)
      );
    } else {
      this.fetchPassword(this.$route.params.id).then(
        () => (this.password = this.getPassword)
      );
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
h2 {
  color: blueviolet;
  margin-bottom: 10px;
  text-align: center;
}
</style>
