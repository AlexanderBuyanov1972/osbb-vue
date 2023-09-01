<template>
  <div class="main">
    <h3>Собственник</h3>
    <p><span>Фамилия : </span>{{ owner.lastName }}</p>
    <p><span>Имя : </span>{{ owner.firstName }}</p>
    <p><span>Отчество : </span>{{ owner.secondName }}</p>
    <p><span>Пол : </span>{{ getGender(owner.gender) }}</p>
    <p><span>Номер телефона : </span>{{ owner.phoneNumber }}</p>
    <p><span>Электронная почта : </span>{{ owner.email }}</p>
    <block-password :password="owner.password" />
  </div>
</template>
<script>
import BlockPassword from "@/blocks/BlockPassword.vue";

export default {
  components: {
    BlockPassword,
  },
  props: {
    owner: {
      Type: Object,
    },
  },
  methods: {
    getGender(gender) {
      return gender === "MALE" ? "мужчина" : "женщина";
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
  margin: 15px 5px;
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
}
p,
h3 {
  margin: 0 30px;
}
span {
  color: blueviolet;
}
</style>
