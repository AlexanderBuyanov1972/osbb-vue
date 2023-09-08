<template>
  <div class="main">
    <div class="item"><span>Фамилия : </span>{{ owner.lastName }}</div>
    <div class="item"><span>Имя : </span>{{ owner.firstName }}</div>
    <div class="item"><span>Отчество : </span>{{ owner.secondName }}</div>
    <div class="item"><span>Дата рождения : </span>{{ owner.dateBirth }}</div>
    <div class="item">
      <span>Семейное положение : </span
      >{{ getElementByValue(arrayFamilyStatus, owner.familyStatus).name }}
    </div>
    <div class="item">
      <span>Пол : </span>{{ getElementByValue(arrayGender, owner.gender).name }}
    </div>
    <div class="item">
      <span>Номер телефона : </span>{{ owner.phoneNumber }}
    </div>
    <div class="item"><span>Электронная почта : </span>{{ owner.email }}</div>
  </div>
</template>
<script>
import { arrayGender, arrayFamilyStatus } from "@/pages/arraysOfData";
import { getElementByValue } from "@/pages/functions";
export default {
  name: "block-read-owner",
  props: {
    owner: {
      Type: Object,
    },
  },
  data() {
    return {
      arrayGender,
      arrayFamilyStatus,
      getElementByValue,
    };
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
  border: 2px solid blueviolet;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: blueviolet;
  align-items: flex-start;
  justify-content: start;
}

span {
  color: teal;
}
.item {
  margin: 5px 0px;
}
</style>
