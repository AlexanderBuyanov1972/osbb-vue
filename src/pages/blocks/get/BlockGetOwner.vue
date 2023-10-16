<template>
  <div class="main">
    <div class="img_button">
      <button-deactivate
        :ownerId="owner.id"
        :ownershipId="ownershipId"
        :share="owner.share"
      />
      <image-show :photo="owner.photo" />
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
        <span>Льготы : </span>{{ showTypeBeneficiary(owner.beneficiary) }}
      </div>
    </div>
    <div class="info">
      <div class="item">
        <span>Дополнительная информация : </span
        >{{ owner.additionalInformation }}
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
import ImageShow from "@/ui/elements/ImageShow.vue";
export default {
  components: { ImageShow },
  name: "block-get-owner",
  props: {
    owner: Object,
    ownershipId: Number,
  },
  data() {
    return {
      showGender,
      showFamilyStatus,
      showTypeBeneficiary,
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
  border: 1px solid blueviolet;

  display: flex;
  align-items: start;
  justify-content: space-between;
}
.img_button {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

}

span {
  color: teal;
}
.item {
  margin: 5px 0px;
  font-size: 20px;
}
.img_button,
.spans,
.info {
  width: 33%;
}
.info{
  
}
</style>
