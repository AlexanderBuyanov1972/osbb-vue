<template>
  <div class="main" @mousemove="emitOwner">
    <h2>Собственник.</h2>

    <div class="owner">
      <div class="lastName">
        <block-error-message
          :field="owner.lastName"
          messageFalse="Укажите фамилию."
          messageTrue="Фамилия."
          @valid="(value) => (validLastName = value)"
        />
        <input-simple v-focus v-model="owner.lastName" placeholder="Фамилия" />
      </div>

      <div class="firstName">
        <block-error-message
          :field="owner.firstName"
          messageFalse="Укажите имя."
          messageTrue="Имя."
          @valid="(value) => (validFirstName = value)"
        />
        <input-simple v-model="owner.firstName" placeholder="Имя" />
      </div>

      <div class="secondName">
        <block-error-message
          :field="owner.secondName"
          messageFalse="Укажите отчество."
          messageTrue="Отчество."
          @valid="(value) => (validSecondName = value)"
        />
        <input-simple v-model="owner.secondName" placeholder="Отчество" />
      </div>

      <div class="dateBirth">
        <block-error-message
          :field="owner.dateBirth"
          messageFalse="Укажите дату рождения (YYYY-MM-DD)."
          messageTrue="Дата рождения (YYYY-MM-DD)."
          @valid="(value) => (validDateBirth = value)"
        />
        <input-simple v-model="owner.dateBirth" placeholder="Дата рождения." />
      </div>

      <div class="gender">
        <block-error-message
          :field="owner.gender"
          messageFalse="Укажите пол."
          messageTrue="Пол."
          @valid="(value) => (validGender = value)"
        />
        <select-edit
          :array="arrayGender"
          :startObject="
            owner == undefined || owner.gender == undefined
              ? arrayGender[0]
              : getElementByValue(arrayGender, owner.gender)
          "
          @select="(value) => (owner.gender = value)"
        />
      </div>

      <div class="familyStatus">
        <block-error-message
          :field="owner.familyStatus"
          messageFalse="Укажите семейное положение."
          messageTrue="Семейное положение."
          @valid="(value) => (validFamilyStatus = value)"
        />
        <select-edit
          :array="arrayFamilyStatus"
          :startObject="
            owner == undefined || owner.familyStatus == undefined
              ? arrayFamilyStatus[0]
              : getElementByValue(arrayFamilyStatus, owner.familyStatus)
          "
          @select="(value) => (owner.familyStatus = value)"
        />
      </div>

      <div class="email">
        <block-error-message
          :field="owner.email"
          messageFalse="Укажите электронный адресс."
          messageTrue="E-mail."
          @valid="(value) => (validEmail = value)"
        />
        <input-simple v-model="owner.email" placeholder="E-mail." />
      </div>

      <div class="phoneNumber">
        <block-error-message
          :field="owner.phoneNumber"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX."
          messageTrue="Телефон  +38(0XX)XXXXXXX."
          @valid="(value) => (validPhoneNumber = value)"
        />
        <input-simple v-model="owner.phoneNumber" placeholder="Телефон." />
      </div>
    </div>
  </div>
</template>
<script>
import { arrayGender, arrayFamilyStatus } from "@/pages/arraysOfData";
import { getElementByValue } from "@/pages/functions";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "block-edit-owner",
  data() {
    return {
      owner: {},
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
      this.$emit("owner", this.owner);
    },
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
    }),
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
  mounted() {
    this.owner = this.getOwner;
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
