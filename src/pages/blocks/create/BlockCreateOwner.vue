<template>
  <div class="main" @mousemove="emitOwner">
    <line-header text="Собственник" :style="{'color':'brown'}"/>
    <div class="owner">
      <div class="lastName">
        <block-error-message
          :field="owner.lastName"
          messageFalse="Укажите фамилию."
          messageTrue="Фамилия."
          @valid="(value) => (validLastName = value)"
        />
        <input-simple v-focus v-model.trim="owner.lastName" placeholder="Фамилия." />
      </div>

      <div class="firstName">
        <block-error-message
          :field="owner.firstName"
          messageFalse="Укажите имя."
          messageTrue="Имя."
          @valid="(value) => (validFirstName = value)"
        />
        <input-simple v-model.trim="owner.firstName" placeholder="Имя" />
      </div>

      <div class="secondName">
        <block-error-message
          :field="owner.secondName"
          messageFalse="Укажите отчество."
          messageTrue="Отчество."
          @valid="(value) => (validSecondName = value)"
        />
        <input-simple v-model.trim="owner.secondName" placeholder="Отчество" />
      </div>

      <div class="dateBirth">
        <block-error-message
          :field="owner.dateBirth"
          messageFalse="Укажите дату рождения (YYYY-MM-DD)."
          messageTrue="Дата рождения (YYYY-MM-DD)."
          @valid="(value) => (validDateBirth = value)"
        />
        <input-simple v-model.trim="owner.dateBirth" placeholder="Дата рождения." />
      </div>

      <div class="gender">
        <block-error-message
          :field="owner.gender"
          messageFalse="Укажите пол."
          messageTrue="Пол."
          @valid="(value) => (validGender = value)"
        />
        <select-simple
          :array="arrayGender"
          @select="(value) => changeGender(value)"
          :flagReset="flagReset"
        />
      </div>

      <div class="familyStatus">
        <block-error-message
          :field="owner.familyStatus"
          messageFalse="Укажите семейное положение."
          messageTrue="Семейное положение."
          @valid="(value) => (validFamilyStatus = value)"
        />
        <select-simple
          :array="arrayFamilyStatus"
          @select="(value) => changeFamilyStatus(value)"
          :flagReset="flagReset"
        />
      </div>

      <div class="email">
        <block-error-message
          :field="owner.email"
          messageFalse="Укажите электронный адресс."
          messageTrue="E-mail."
          @valid="(value) => (validEmail = value)"
        />
        <input-simple v-model.trim="owner.email" placeholder="E-mail" />
      </div>

      <div class="phoneNumber">
        <block-error-message
          :field="owner.phoneNumber"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX."
          messageTrue="Телефон  +38(0XX)XXXXXXX."
          @valid="(value) => (validPhoneNumber = value)"
        />
        <input-simple v-model.trim="owner.phoneNumber" placeholder="Телефон" />
      </div>

      <div class="shareInRealEstate">
        <block-error-message
          :field="owner.shareInRealEstate"
          messageFalse="Укажите долю в собственности (от 0 до 1, три знака после точки)."
          messageTrue="Доля в собственности (от 0 до 1, три знака после точки)."
          @valid="(value) => (validShareInRealEstate = value)"
        />
        <input-simple
          v-model.trim="owner.shareInRealEstate"
          placeholder="Доля в собственности (от 0 до 1, три знака после точки)."
        />
      </div>
    </div>
    <button-reset @click="reset" :hidden="!isValidOwner">Очистить</button-reset>
  </div>
</template>
<script>
import { arrayGender, arrayFamilyStatus } from "@/pages/_functions/arraysOfData";
export default {
  name: "block-create-owner",
  data() {
    return {
      owner: {},
      flagReset: false,
      validLastName: false,
      validFirstName: false,
      validSecondName: false,
      validDateBirth: false,
      validGender: false,
      validFamilyStatus: false,
      validEmail: false,
      validPhoneNumber: false,
      validShareInRealEstate: false,
      arrayGender,
      arrayFamilyStatus,
    };
  },
  methods: {
    emitOwner() {
      this.$emit("isValidOwner", this.isValidOwner);
      if (this.owner.dateBirth == "нет")
        this.owner.dateBirth = "1900-01-01";
      this.$emit("owner", this.owner);
    },
    changeGender(value) {
      this.owner.gender = value;
      this.flagReset = false;
    },
    changeFamilyStatus(value) {
      this.owner.familyStatus = value;
      this.flagReset = false;
    },

    reset() {
      this.owner.firstName = "";
      this.owner.secondName = "";
      this.owner.lastName = "";
      this.owner.dateBirth = "";
      this.owner.familyStatus = "";
      this.owner.gender = "";
      this.owner.email = "";
      this.owner.phoneNumber = "";
      this.owner.shareInRealEstate = "";
      this.flagReset = true;
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
        this.validShareInRealEstate
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
@/pages/functions/arraysOfData
@/pages/_functions/arraysOfData