<template>
  <div class="main">
    <line-header text="Собственник" :style="{ color: 'brown' }" />

    <div class="owner">
      <div class="lastName">
        <block-error-message
          :field="owner.lastName"
          messageFalse="Укажите фамилию"
          messageTrue="Фамилия"
          @valid="(value) => handlerLastName(value)"
        />
        <input-simple
          v-focus
          v-model.trim="owner.lastName"
          placeholder="Фамилия"
        />
      </div>

      <div class="firstName">
        <block-error-message
          :field="owner.firstName"
          messageFalse="Укажите имя"
          messageTrue="Имя"
          @valid="(value) => handlerFirstName(value)"
        />
        <input-simple v-model.trim="owner.firstName" placeholder="Имя" />
      </div>

      <div class="secondName">
        <block-error-message
          :field="owner.secondName"
          messageFalse="Укажите отчество"
          messageTrue="Отчество"
          @valid="(value) => handlerSecondName(value)"
        />
        <input-simple v-model.trim="owner.secondName" placeholder="Отчество" />
      </div>

      <div class="dateBirth">
        <block-error-message
          :field="owner.dateBirth"
          messageFalse="Укажите дату рождения (YYYY-MM-DD)"
          messageTrue="Дата рождения (YYYY-MM-DD)"
          @valid="(value) => handlerDateBirth(value)"
        />
        <input-simple
          v-model.trim="owner.dateBirth"
          placeholder="Дата рождения"
        />
      </div>

      <div class="gender">
        <block-error-message
          :field="owner.gender"
          messageFalse="Укажите пол"
          messageTrue="Пол"
          @valid="(value) => handlerGender(value)"
        />
        <select-edit
          :array="arrayGender"
          :startName="showGender(owner.gender)"
          @select="(value) => (owner.gender = value)"
        />
      </div>

      <div class="familyStatus">
        <block-error-message
          :field="owner.familyStatus"
          messageFalse="Укажите семейное положение"
          messageTrue="Семейное положение"
          @valid="(value) => handlerFamilyStatus(value)"
        />
        <select-edit
          :array="arrayFamilyStatus"
          :startName="showFamilyStatus(owner.familyStatus)"
          @select="(value) => (owner.familyStatus = value)"
        />
      </div>

      <div class="email">
        <block-error-message
          :field="owner.email"
          messageFalse="Укажите электронный адресс"
          messageTrue="E-mail"
          @valid="(value) => handlerEmail(value)"
        />
        <input-simple v-model.trim="owner.email" placeholder="E-mail" />
      </div>

      <div class="phoneNumber">
        <block-error-message
          :field="owner.phoneNumber"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX"
          messageTrue="Телефон  +38(0XX)XXXXXXX"
          @valid="(value) => handlerPhoneNumber(value)"
        />
        <input-simple v-model.trim="owner.phoneNumber" placeholder="Телефон" />
      </div>

      <div class="beneficiary">
        <block-error-message
          :field="owner.beneficiary"
          messageFalse="Укажите льготы"
          messageTrue="Льготы"
          @valid="(value) => handlerBeneficiary(value)"
        />
        <select-edit
          :array="arrayTypeBeneficiary"
          @select="(value) => (owner.beneficiary = value)"
          :startName="showTypeBeneficiary(owner.beneficiary)"
        />
      </div>

      <div class="additionalInformation">
        <block-error-message
          :field="owner.additionalInformation"
          messageFalse="Укажите дополнительную информацию"
          messageTrue="Дополнительная информация"
          @valid="(value) => handlerAdditionalInformation(value)"
        />
        <text-area-simple v-model.trim="owner.additionalInformation" placeholder="Дополнительная информация" />
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
import {
  showTypeBeneficiary,
  showGender,
  showFamilyStatus,
} from "@/pages/_functions/functions";
export default {
  name: "block-update-owner",
  props: {
    ownerProps: Object,
  },
  data() {
    return {
      owner: {},
      showTypeBeneficiary,
      showGender,
      showFamilyStatus,
      arrayGender,
      arrayTypeBeneficiary,
      arrayFamilyStatus,
      validLastName: false,
      validFirstName: false,
      validSecondName: false,
      validDateBirth: false,
      validGender: false,
      validFamilyStatus: false,
      validEmail: false,
      validPhoneNumber: false,
      validBeneficiary: false,
      validAdditionalInformation: false,
    };
  },
  methods: {
    emitOwner() {
      this.count += 1;
      this.$emit("isValidOwner", this.isValidOwner);
      if (this.owner.dateBirth == "нет") this.owner.dateBirth = "1900-01-01";
      this.$emit("owner", this.owner);
    },
    handlerLastName(value) {
      this.validLastName = value;
      this.emitOwner();
    },
    handlerFirstName(value) {
      this.validFirstName = value;
      this.emitOwner();
    },
    handlerSecondName(value) {
      this.validSecondName = value;
      this.emitOwner();
    },
    handlerDateBirth(value) {
      this.validDateBirth = value;
      this.emitOwner();
    },
    handlerGender(value) {
      this.validGender = value;
      this.emitOwner();
    },
    handlerFamilyStatus(value) {
      this.validFamilyStatus = value;
      this.emitOwner();
    },
    handlerEmail(value) {
      this.validEmail = value;
      this.emitOwner();
    },
    handlerPhoneNumber(value) {
      this.validPhoneNumber = value;
      this.emitOwner();
    },
    handlerBeneficiary(value) {
      this.validBeneficiary = value;
      this.emitOwner();
    },
    handlerAdditionalInformation(value) {
      this.validAdditionalInformation = value;
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
        this.validBeneficiary &&
        this.validAdditionalInformation
      );
    },
  },
  updated() {
   this.owner = this.ownerProps;
  },
  mounted() {
   this.owner = this.ownerProps;
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
