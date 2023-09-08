<template>
  <div class="main" @mousemove="emitOwner">
    <h2>Собственник.</h2>

    <div class="owner">
      <div class="lastName">
        <block-error-message
          :field="ownerSend.lastName"
          messageFalse="Укажите фамилию."
          messageTrue="Фамилия."
          @valid="(value) => (validLastName = value)"
        />
        <input-simple
          v-focus
          v-model="ownerSend.lastName"
          placeholder="Фамилия"
        />
      </div>

      <div class="firstName">
        <block-error-message
          :field="ownerSend.firstName"
          messageFalse="Укажите имя."
          messageTrue="Имя."
          @valid="(value) => (validFirstName = value)"
        />
        <input-simple v-model="ownerSend.firstName" placeholder="Имя" />
      </div>

      <div class="secondName">
        <block-error-message
          :field="ownerSend.secondName"
          messageFalse="Укажите отчество."
          messageTrue="Отчество."
          @valid="(value) => (validSecondName = value)"
        />
        <input-simple v-model="ownerSend.secondName" placeholder="Отчество" />
      </div>

      <div class="dateBirth">
        <block-error-message
          :field="ownerSend.dateBirth"
          messageFalse="Укажите дату рождения (YYYY-MM-DD)."
          messageTrue="Дата рождения (YYYY-MM-DD)."
          @valid="(value) => (validDateBirth = value)"
        />
        <input-simple
          v-model="ownerSend.dateBirth"
          placeholder="Дата рождения."
        />
      </div>

      <div class="gender">
        <block-error-message
          :field="ownerSend.gender"
          messageFalse="Укажите пол."
          messageTrue="Пол."
          @valid="(value) => (validGender = value)"
        />
        <select-edit
          :array="arrayGender"
          :startObject="
            ownerSend == undefined || ownerSend.gender == undefined
              ? arrayGender[0]
              : getElementByValue(arrayGender, ownerSend.gender)
          "
          @select="(value) => (ownerSend.gender = value)"
        />
      </div>

      <div class="familyStatus">
        <block-error-message
          :field="ownerSend.familyStatus"
          messageFalse="Укажите семейное положение."
          messageTrue="Семейное положение."
          @valid="(value) => (validFamilyStatus = value)"
        />
        <select-edit
          :array="arrayFamilyStatus"
          :startObject="
            ownerSend == undefined || ownerSend.familyStatus == undefined
              ? arrayFamilyStatus[0]
              : getElementByValue(arrayFamilyStatus, ownerSend.familyStatus)
          "
          @select="(value) => (ownerSend.familyStatus = value)"
        />
      </div>

      <div class="email">
        <block-error-message
          :field="ownerSend.email"
          messageFalse="Укажите электронный адресс."
          messageTrue="E-mail."
          @valid="(value) => (validEmail = value)"
        />
        <input-simple v-model="ownerSend.email" placeholder="E-mail." />
      </div>

      <div class="phoneNumber">
        <block-error-message
          :field="ownerSend.phoneNumber"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX."
          messageTrue="Телефон  +38(0XX)XXXXXXX."
          @valid="(value) => (validPhoneNumber = value)"
        />
        <input-simple v-model="ownerSend.phoneNumber" placeholder="Телефон." />
      </div>
    </div>
  </div>
</template>
<script>
import { arrayGender, arrayFamilyStatus } from "@/pages/arraysOfData";
import { getElementByValue } from "@/pages/functions";
export default {
  name: "block-edit-owner",
  props: {
    owner: Object,
  },
  data() {
    return {
      ownerSend: { ...this.owner },
      getElementByValue,
      arrayGender,
      arrayFamilyStatus,
      validLastName: false,
      validFirstName: false,
      validSecondName: false,
      validDateBirth: false,
      validGender: false,
      validFamilyStatus: false,
      validEmail: false,
      validPhoneNumber: false,
    };
  },

  methods: {
    emitOwner() {
      this.$emit("isValidOwner", this.isValidOwner);
      this.$emit("owner", this.ownerSend);
    },
  },
  computed: {
    isValidOwner() {
      return (
        this.validLastName &&
        this.validFirstName &&
        this.validSecondName &&
        this.validDateBirth &&
        this.validGender &&
        this.validFamilyStatus &&
        this.validEmail &&
        this.validPhoneNumber
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
