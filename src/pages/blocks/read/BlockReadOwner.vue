<template>
  <div class="main">
    <div class="img">
      <img
        :src="
          owner.gender === 'FEMALE'
            ? require(`@/photos/owners/female.jpg`)
            : require(`@/photos/owners/male.jpg`)
        "
        alt="Not found"
      />
    </div>
    <div class="spans">
      <div class="item"><span>Фамилия : </span>{{ owner.lastName }}</div>
      <div class="item"><span>Имя : </span>{{ owner.firstName }}</div>
      <div class="item"><span>Отчество : </span>{{ owner.secondName }}</div>
      <div class="item"><span>Дата рождения : </span>{{ owner.dateBirth }}</div>
      <div class="item">
        <span>Семейное положение : </span
        >{{ showFamilyStatus(owner.familyStatus) }}
      </div>
      <div class="item"><span>Пол : </span>{{ showGender(owner.gender) }}</div>
      <div class="item">
        <span>Номер телефона : </span>{{ owner.phoneNumber }}
      </div>
      <div class="item"><span>Электронная почта : </span>{{ owner.email }}</div>
      <div class="item">
        <span>Доля в собственности : </span>{{ owner.shareInRealEstate }}
      </div>
    </div>
  </div>
</template>
<script>
import { showGender, showFamilyStatus } from "@/pages/functions/functions";
export default {
  name: "block-read-owner",
  props: {
    owner: {
      Type: Object,
    },
  },
  data() {
    return {
      showGender,
      showFamilyStatus,
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
  width: 100%;
  color: blueviolet;
  margin: 15px 0px;
  border: 2px solid blueviolet;
  font-size: 1.2em;
  display: flex;

  align-items: center;
  justify-content: space-around;
}

span {
  color: teal;
}
.item {
  margin: 7px 0px;
  font-size: 1.3em;
}
img {
  width: 25wh;
  height: 35vh;
  padding: 10px;
}
.spans {
  padding: 10px;
}
</style>
@/pages/functions/functions
