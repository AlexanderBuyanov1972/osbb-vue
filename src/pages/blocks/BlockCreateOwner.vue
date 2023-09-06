<template>
  <div class="main" @mousemove="emitOwner">
    <h2>Собственник.</h2>

    <div class="owner">
      <block-error :field="owner.lastName" message="Укажите фамилию." />
      <input-simple v-focus v-model="owner.lastName" placeholder="Фамилия" />

      <block-error :field="owner.firstName" message="Укажите имя." />
      <input-simple v-model="owner.firstName" placeholder="Имя" />

      <block-error :field="owner.secondName" message="Укажите отчество." />
      <input-simple v-model="owner.secondName" placeholder="Отчество" />

      <block-error
        :field="owner.dateBirth"
        message="Укажите дату рождения (YYYY-MM-DD)."
      />
      <input-simple v-model="owner.dateBirth" placeholder="Дата рождения." />

      <block-error :field="owner.gender" message="Укажите пол." />
      <select-simple
        :array="arrayGender"
        @select="(value) => changeGender(value)"
        :flagReset="flagReset"
      />
      <!--  -->
      <block-error
        :field="owner.familyStatus"
        message="Укажите семейное положение."
      />
      <select-simple
        :array="arrayFamilyStatus"
        @select="(value) => changeFamilyStatus(value)"
        :flagReset="flagReset"
      />
      <!--  -->
      <block-error :field="owner.email" message="Укажите электронный адресс." />
      <input-simple v-model="owner.email" placeholder="E-mail" />

      <block-error
        :field="owner.phoneNumber"
        message="Укажите номер телефона +38(0XX)XXXXXXX."
      />
      <input-simple v-model="owner.phoneNumber" placeholder="Телефон" />
    </div>
    <button-reset @click="reset" :hidden="!validOwner">Очистить</button-reset>
  </div>
</template>
<script>
export default {
  name: "block-create-owner",
  data() {
    return {
      owner: {
        firstName: "",
        secondName: "",
        lastName: "",
        dateBirth: "",
        gender: "",
        familyStatus: "",
        email: "",
        phoneNumber: "",
        password: {},
      },
      flagReset: false,
    };
  },
  props: {
    arrayGender: {
      Type: Array,
      default: () => [],
    },
    arrayFamilyStatus: {
      Type: Array,
      default: () => [],
    },
  },
  methods: {
    emitOwner() {
      this.$emit("validOwner", this.validOwner);
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
      this.flagReset = true;
    },
  },
  computed: {
    validOwner() {
      return (
        this.owner.firstName.length &&
        this.owner.secondName.length &&
        this.owner.lastName.length &&
        this.owner.dateBirth.length &&
        this.owner.gender.length &&
        this.owner.familyStatus.length &&
        this.owner.email.length &&
        this.owner.phoneNumber.length
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
