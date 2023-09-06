<template>
  <div class="main">
    <div class="img">
      <img :src="man" alt="Not Found" />
    </div>
    <div class="info">
      <div class="item"><span>Фамилия : </span>{{ owner.lastName }}</div>
      <div class="item"><span>Имя : </span>{{ owner.firstName }}</div>
      <div class="item"><span>Отчество : </span>{{ owner.secondName }}</div>
      <div class="item"><span>Дата рождения : </span>{{ owner.dateBirth }}</div>
      <div class="item"><span>Семейное положение : </span>{{ owner.familyStatus }}</div>
      <div class="item"><span>Пол : </span>{{ getGender(owner.gender) }}</div>
      <div class="item"><span>Номер телефона : </span>{{ owner.phoneNumber }}</div>
      <div class="item"><span>Электронная почта : </span>{{ owner.email }}</div>
      <div class="item">
        <block-password :password="owner.password" />
      </div>
    </div>
  </div>
</template>
<script>
import BlockPassword from "@/blocks/BlockPassword.vue";
import man from "@/photos/owners/man.webp";
export default {
  components: {
    BlockPassword,
  },
  props: {
    owner: {
      Type: Object,
    },
  },
  data() {
    return {
      man,
    };
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
  margin: 15px 0px;
  padding: 5px;
  border: 2px solid blueviolet;
  font-size: 1.2em;

  display: flex;
  align-items: center;
  justify-content: space-around;
}
img {
  width: 50vh;
  height: 35vw;
}
.info {
  display: flex;
  flex-direction: column;
  width: 55%;
  color: blueviolet;
  font-size: 1.2em;
  align-items: flex-start;
  justify-content: start;
}
.img {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  color: teal;
}
.item{
  margin: 5px 0px;
}
</style>
