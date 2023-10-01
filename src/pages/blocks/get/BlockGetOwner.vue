<template>
  <div class="main">
    <div class="img">
      <img :src="getImage" alt="Not found" />
    </div>
    <div class="spans">
      <div class="item"><span>Фамилия : </span>{{ owner.lastName || "" }}</div>
      <div class="item"><span>Имя : </span>{{ owner.firstName }}</div>
      <div class="item"><span>Отчество : </span>{{ owner.secondName }}</div>
      <div class="item">
        <span>Дата рождения : </span
        >{{ owner.dateBirth == "1900-01-01" ? "нет" : owner.dateBirth }}
      </div>
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
      <div class="item">
        <span>Льготы : </span>{{ showTypeBeneficiary(owner.beneficiary) }}
      </div>
    </div>
  </div>
</template>
<script>
import {
  showGender,
  showFamilyStatus,
  showTypeBeneficiary,
} from "@/pages/_functions/functions";
export default {
  name: "block-get-owner",
  props: {
    owner: Object,
  },
  data() {
    return {
      showGender,
      showFamilyStatus,
      showTypeBeneficiary,
    };
  },
  computed: {
    getImage() {
      if (this.owner.photo) {
        return require(`@/assets/owners/${this.owner.photo.name}.png`);
      }
      if (this.owner.photoName) {
        return require(`@/assets/owners/${this.owner.photoName}.png`);
      }
      // if (!this.owner || !this.owner.photo || !this.owner.photoUrl) {
      //   return;
      // } ifelse(this.owner.photo) {
      //   return require(`@/assets/owners/${this.owner.photo.name}.png`);
      // }ifelse(this.owner.photoUrl){
      //   return require(`@/assets/owners/${this.owner.photoUrl}.png`);
      // }
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
  width: 100%;
  color: blueviolet;
  margin: 15px 0px;
  border: 1px solid blueviolet;
  display: flex;
  align-items: center;
  justify-content: start;
}

span {
  color: teal;
}
.item {
  margin: 5px 0px;
  font-size: 20px;
}
img {
  width: 20vw;
  height: 30vh;
  padding: 10px;
  margin-left: 40%;
}
.spans {
  padding: 10px;
  margin-left: 30%;
}
</style>
@/pages/bills/_functions/functions
