<template>
  <div class="main">
    <line-header-block text="Собственник" />

    <div class="owner">
      <div class="lastName">
        <block-error-message
          :field="owner.lastName"
          messageFalse="Укажите фамилию."
          messageTrue="Фамилия."
          @valid="(value) => handlerLastName(value)"
        />
        <input-simple v-focus v-model="owner.lastName" placeholder="Фамилия" />
      </div>

      <div class="firstName">
        <block-error-message
          :field="owner.firstName"
          messageFalse="Укажите имя."
          messageTrue="Имя."
          @valid="(value) => handlerFirstName(value)"
        />
        <input-simple v-model="owner.firstName" placeholder="Имя" />
      </div>

      <div class="secondName">
        <block-error-message
          :field="owner.secondName"
          messageFalse="Укажите отчество."
          messageTrue="Отчество."
          @valid="(value) => handlerSecondName(value)"
        />
        <input-simple v-model="owner.secondName" placeholder="Отчество" />
      </div>

      <div class="dateBirth">
        <block-error-message
          :field="owner.dateBirth"
          messageFalse="Укажите дату рождения (YYYY-MM-DD)."
          messageTrue="Дата рождения (YYYY-MM-DD)."
          @valid="(value) => handlerDateBirth(value)"
        />
        <input-simple v-model="owner.dateBirth" placeholder="Дата рождения." />
      </div>

      <div class="gender">
        <block-error-message
          :field="owner.gender"
          messageFalse="Укажите пол."
          messageTrue="Пол."
          @valid="(value) => handlerGender(value)"
        />
        <select-edit
          :array="arrayGender"
          :startName="getNameByValue(arrayGender, owner.gender)"
          @select="(value) => (owner.gender = value)"
        />
      </div>

      <div class="familyStatus">
        <block-error-message
          :field="owner.familyStatus"
          messageFalse="Укажите семейное положение."
          messageTrue="Семейное положение."
          @valid="(value) => handlerFamilyStatus(value)"
        />
        <select-edit
          :array="arrayFamilyStatus"
          :startName="getNameByValue(arrayFamilyStatus, owner.familyStatus)"
          @select="(value) => (owner.familyStatus = value)"
        />
      </div>

      <div class="email">
        <block-error-message
          :field="owner.email"
          messageFalse="Укажите электронный адресс."
          messageTrue="E-mail."
          @valid="(value) => handlerEmail(value)"
        />
        <input-simple v-model="owner.email" placeholder="E-mail." />
      </div>

      <div class="phoneNumber">
        <block-error-message
          :field="owner.phoneNumber"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX."
          messageTrue="Телефон  +38(0XX)XXXXXXX."
          @valid="(value) => handlerPhoneNumber(value)"
        />
        <input-simple v-model="owner.phoneNumber" placeholder="Телефон." />
      </div>
      <div class="shareInRealEstate">
        <block-error-message
          :field="owner.shareInRealEstate"
          messageFalse="Укажите долю в собственности (от 0 до 1, три знака после точки)."
          messageTrue="Доля в собственности (от 0 до 1, три знака после точки)."
          @valid="(value) => handlerShareInRealEstate(value)"
        />
        <input-simple
          v-model="owner.shareInRealEstate"
          placeholder="Доля в собственности (от 0 до 1, три знака после точки)."
        />
      </div>
    </div>
  </div>
</template>
<script>
import { arrayGender, arrayFamilyStatus } from "@/pages/functions/arraysOfData";
import {
  getElementByValue,
  getElementByName,
  getNameByValue,
} from "@/pages/functions/functions";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "block-edit-owner",
  props: {
    id: Number,
  },
  data() {
    return {
      owner: {},
      getElementByValue,
      getElementByName,
      getNameByValue,
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
      validShareInRealEstate: false,
    };
  },

  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
    emitOwner() {
      this.$emit("isValidOwner", this.isValidOwner);
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
    handlerShareInRealEstate(value) {
      this.validShareInRealEstate = value;
      this.emitOwner();
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
        this.validPhoneNumber &&
        this.validShareInRealEstate
      );
    },
  },
  mounted() {
    if (this.id != 0) {
      if (this.id != undefined) {
        this.fetchOwner(this.id).then(() => (this.owner = this.getOwner));
      } else {
        this.fetchOwner(this.$route.params.id).then(
          () => (this.owner = this.getOwner)
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
@/pages/functions/arraysOfData @/pages/functions/functions
