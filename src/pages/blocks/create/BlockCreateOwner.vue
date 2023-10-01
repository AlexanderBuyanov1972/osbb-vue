<template>
  <div class="main">
    <line-header text="Собственник" :style="{ color: 'brown' }" />
    <div class="owner">
      <div class="lastName">
        <block-error-message
          :field="owner.lastName"
          messageFalse="Укажите фамилию."
          messageTrue="Фамилия."
          @valid="(value) => handlerValidLastName(value)"
        />
        <input-simple
          v-focus
          v-model.trim="owner.lastName"
          placeholder="Фамилия."
        />
      </div>

      <div class="firstName">
        <block-error-message
          :field="owner.firstName"
          messageFalse="Укажите имя."
          messageTrue="Имя."
          @valid="(value) => handlerValidFirstName(value)"
        />
        <input-simple v-model.trim="owner.firstName" placeholder="Имя" />
      </div>

      <div class="secondName">
        <block-error-message
          :field="owner.secondName"
          messageFalse="Укажите отчество."
          messageTrue="Отчество."
          @valid="(value) => handlerValidSecondName(value)"
        />
        <input-simple v-model.trim="owner.secondName" placeholder="Отчество" />
      </div>

      <div class="dateBirth">
        <block-error-message
          :field="owner.dateBirth"
          messageFalse="Укажите дату рождения (YYYY-MM-DD)."
          messageTrue="Дата рождения (YYYY-MM-DD)."
          @valid="(value) => handlerValidDateBirth(value)"
        />
        <input-simple
          v-model.trim="owner.dateBirth"
          placeholder="Дата рождения."
        />
      </div>

      <div class="gender">
        <block-error-message
          :field="owner.gender"
          messageFalse="Укажите пол."
          messageTrue="Пол."
          @valid="(value) => handlerValidGender(value)"
        />
        <select-simple
          :array="arrayGender"
          @select="(value) => (owner.gender = value)"
          :startName="owner.gender"
        />
      </div>

      <div class="familyStatus">
        <block-error-message
          :field="owner.familyStatus"
          messageFalse="Укажите семейное положение."
          messageTrue="Семейное положение."
          @valid="(value) => handlerValidFamilyStatus(value)"
        />
        <select-simple
          :array="arrayFamilyStatus"
          @select="(value) => (owner.familyStatus = value)"
          :startName="owner.familyStatus"
        />
      </div>

      <div class="email">
        <block-error-message
          :field="owner.email"
          messageFalse="Укажите электронный адресс."
          messageTrue="E-mail."
          @valid="(value) => handlerValidEmail(value)"
        />
        <input-simple v-model.trim="owner.email" placeholder="E-mail" />
      </div>

      <div class="phoneNumber">
        <block-error-message
          :field="owner.phoneNumber"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX."
          messageTrue="Телефон  +38(0XX)XXXXXXX."
          @valid="(value) => handlerValidPhoneNumber(value)"
        />
        <input-simple v-model.trim="owner.phoneNumber" placeholder="Телефон" />
      </div>

      <div class="shareInRealEstate">
        <block-error-message
          :field="owner.shareInRealEstate"
          messageFalse="Укажите долю в собственности (от 0 до 1, три знака после точки)."
          messageTrue="Доля в собственности (от 0 до 1, три знака после точки)."
          @valid="(value) => handlerValidShareInRealEstate(value)"
        />
        <input-simple
          v-model.number="owner.shareInRealEstate"
          placeholder="Доля в собственности (от 0 до 1, три знака после точки)."
        />
      </div>

      <div class="beneficiary">
        <block-error-message
          :field="owner.beneficiary"
          messageFalse="Укажите льготы"
          messageTrue="Льготы"
          @valid="(value) => handlerValidBeneficiary(value)"
        />
        <select-simple
          :array="arrayTypeBeneficiary"
          @select="(value) => (owner.beneficiary = value)"
          :startName="owner.beneficiary"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  arrayGender,
  arrayFamilyStatus,
  arrayTypeBeneficiary,
} from "@/pages/_functions/arraysOfData";
export default {
  name: "block-create-owner",
  props: {
    client: Object,
  },
  data() {
    return {
      owner: {},
      validLastName: false,
      validFirstName: false,
      validSecondName: false,
      validDateBirth: false,
      validGender: false,
      validFamilyStatus: false,
      validEmail: false,
      validPhoneNumber: false,
      validShareInRealEstate: false,
      validBeneficiary: false,

      arrayGender,
      arrayFamilyStatus,
      arrayTypeBeneficiary,
    };
  },
  methods: {
    emitOwner() {
      this.$emit("isValidOwner", this.isValidOwner);
      if (this.owner.dateBirth == "нет") this.owner.dateBirth = "1900-01-01";
      this.$emit("owner", this.owner);
    },
    handlerValidLastName(value) {
      this.validLastName = value;
      this.emitOwner();
    },
    handlerValidFirstName(value) {
      this.validFirstName = value;
      this.emitOwner();
    },
    handlerValidSecondName(value) {
      this.validSecondName = value;
      this.emitOwner();
    },
    handlerValidDateBirth(value) {
      this.validDateBirth = value;
      this.emitOwner();
    },
    handlerValidGender(value) {
      this.validGender = value;
      this.emitOwner();
    },
    handlerValidFamilyStatus(value) {
      this.validFamilyStatus = value;
      this.emitOwner();
    },
    handlerValidEmail(value) {
      this.validEmail = value;
      this.emitOwner();
    },
    handlerValidPhoneNumber(value) {
      this.validPhoneNumber = value;
      this.emitOwner();
    },
    handlerValidShareInRealEstate(value) {
      this.validShareInRealEstate = value;
      this.emitOwner();
    },
    handlerValidBeneficiary(value) {
      this.validBeneficiary = value;
      this.emitOwner();
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
        this.validPhoneNumber &&
        this.validShareInRealEstate &&
        this.validBeneficiary
      );
    },
  },
  updated() {
    this.owner = this.client;
  },
  mounted() {
    this.owner = this.client;
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
