<template>
  <div class="main">
    <div class="count">{{ count }}.</div>
    <div class="name">{{ mapOwnerToLineFullNamesOwner(owner) }}</div>
    <div class="phone">{{ owner.phoneNumber }}</div>
    <div class="birth">{{ owner.dateBirth }}</div>
    <div class="family">
      {{ showFamilyStatus(owner.familyStatus) }}
    </div>
    <div class="email">{{ owner.email }}</div>
    <div class="share">{{ owner.shareInRealEstate }}</div>
    <div class="family">
      {{ showGender(owner.gender) }}
    </div>
  </div>
</template>
<script>
import {
  mapOwnerToLineFullNamesOwner,
  showFamilyStatus,
  showGender,
} from "@/pages/functions/functions";
export default {
  name: "owner-item",
  props: {
    owner: {
      Type: Object,
    },
    count: Number,
  },
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      showFamilyStatus,
      showGender,
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
  margin: 5px 0px;
  padding: 5px;
  border: 1px solid blueviolet;
  color: teal;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.count {
  width: 2%;
}
.name {
  width: 22%;
}
.phone {
  width: 13%;
}
.birth {
  width: 10%;
}
.email {
  width: 20%;
}
.family {
  width: 10%;
}
.share {
  width: 10%;
}
</style>