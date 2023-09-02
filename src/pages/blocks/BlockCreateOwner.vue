<template>
  <div class="main" :on-mouseout="emitOwner">
    <h2>Создать собственника.</h2>
    <div class="owner">
      <input-simple v-focus v-model="owner.lastName" placeholder="Фамилия" />
      <input-simple v-model="owner.firstName" placeholder="Имя" />
      <input-simple v-model="owner.secondName" placeholder="Отчество" />
      <select-simple
        :array="arrayGender"
        @select="(value) => (owner.gender = value)"
      />
      <input-simple v-model="owner.email" placeholder="E-mail" />
      <input-simple v-model="owner.phoneNumber" placeholder="Телефон" />
    </div>
  </div>
</template>
<script>
import { arrayGender } from "@/pages/arraysOfData";
export default {
  data() {
    return {
      owner: {
        firstName: "",
        secondName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        password: {},
      },
      arrayGender,
    };
  },
  methods: {
    emitOwner() {
      this.$emit("owner", owner);
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
.main {
}
</style>
