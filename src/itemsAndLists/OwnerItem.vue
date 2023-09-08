<template>
  <div class="main">
    <div class="count">{{ count }}.</div>
    <div class="name">{{ getFullName(owner) }}</div>
    <div class="phone">{{ owner.phoneNumber }}</div>
    <div class="birth">{{ owner.dateBirth }}</div>
    <div class="family">
      {{ getElementName(arrayFamilyStatus, owner.familyStatus) }}
    </div>
    <div class="email">{{ owner.email }}</div>
  </div>
</template>
<script>
import { arrayFamilyStatus } from "@/pages/arraysOfData";
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
      arrayFamilyStatus,
    };
  },
  methods: {
    getFullName(obj) {
      return obj.lastName + " " + obj.firstName + " " + obj.secondName;
    },
    getElementName(array, value) {
      return array.find((el) => el.value === value).name;
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
  color: teal;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
span {
  margin: 0 10px;
}
.count {
  width: 2%;
}
.name {
  width: 22%;
}
.phone {
  width: 15%;
}
.birth {
  width: 15%;
}
.email {
  width: 15%;
}
.family {
  width: 15%;
}
</style>
