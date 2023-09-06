<template>
  <div class="main" @mousemove="emitPassword">
    <h2>Паспорт собственника.</h2>
    <div class="password">
      <block-error
        :field="passwordSend.passwordID"
        message="Укажите номер паспорта (XXXXXXXXX)."
      />
      <input-simple
        v-model="passwordSend.passwordID"
        placeholder="Паспорт ID"
      />

      <block-error
        :field="passwordSend.numberEntry"
        message="Укажите номер записи YYYYMMDD-XXXXX."
      />
      <input-simple
        v-model="passwordSend.numberEntry"
        placeholder="Номер записи"
      />

      <block-error
        :field="passwordSend.dateIssue"
        message="Укажите дату выдачи (YYYY-MM-DD)."
      />
      <input-simple
        v-model="passwordSend.dateIssue"
        placeholder="Дата выдачи"
      />

      <block-error
        :field="passwordSend.issuingAuthority"
        message="Укажите ИНН (XXXXXXXXXX)."
      />
      <input-simple
        v-model="passwordSend.issuingAuthority"
        placeholder="Орган выдачи"
      />

      <block-error
        :field="passwordSend.registrationNumberCardPayerTaxes"
        message="Укажите кем выдан (XXXX)."
      />
      <input-simple
        v-model="passwordSend.registrationNumberCardPayerTaxes"
        placeholder="ИНН"
      />
    </div>
    </div>
</template>
<script>
export default {
  name: "block-edit-password",
  props: {
    password: Object,
  },

  data() {
    return {
      passwordSend: { ...this.password },
    };
  },
  methods: {
    emitPassword() {
      this.$emit("password", this.passwordSend);
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
