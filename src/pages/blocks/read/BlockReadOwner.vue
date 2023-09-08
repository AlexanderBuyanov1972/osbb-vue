<template>
  <div class="main">
    <div class="img">
      <img
        :src="
          getElementArrayGender(owner.gender).value === 'FEMALE' ? female : male
        "
        alt="Not Found"
      />
    </div>
    <div class="info">
      <div class="item"><span>Фамилия : </span>{{ owner.lastName }}</div>
      <div class="item"><span>Имя : </span>{{ owner.firstName }}</div>
      <div class="item"><span>Отчество : </span>{{ owner.secondName }}</div>
      <div class="item"><span>Дата рождения : </span>{{ owner.dateBirth }}</div>
      <div class="item">
        <span>Семейное положение : </span
        >{{ getElementName(arrayFamilyStatus, owner.familyStatus).name }}
      </div>
      <div class="item">
        <span>Пол : </span>{{ getElementArrayGender(owner.gender).name }}
      </div>
      <div class="item">
        <span>Номер телефона : </span>{{ owner.phoneNumber }}
      </div>
      <div class="item"><span>Электронная почта : </span>{{ owner.email }}</div>
      <div class="item">
        <block-read-password :password="owner.password" />
      </div>
    </div>
  </div>
</template>
<script>
import BlockReadPassword from "@/pages/blocks/read/BlockReadPassword.vue";
import male from "@/photos/owners/male.jpg";
import female from "@/photos/owners/female.jpg";
import { arrayGender, arrayFamilyStatus } from "@/pages/arraysOfData";
export default {
  components: {
    BlockReadPassword,
  },
  props: {
    owner: {
      Type: Object,
    },
  },
  data() {
    return {
      female,
      male,
      arrayGender,
      arrayFamilyStatus,
    };
  },
  methods: {
    getElementName(array, value) {
      return array.find((el) => el.value === value);
    },
    getElementArrayGender(value) {
      return arrayGender.find((el) => el.value === value);
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
.item {
  margin: 5px 0px;
}
</style>
