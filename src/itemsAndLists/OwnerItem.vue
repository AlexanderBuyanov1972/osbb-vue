<template>
  <div class="main">
    <div class="count"><span v-show="flag">№ : </span>{{ count }}.</div>
    <div class="name">
      <span v-show="flag">Ф.И.О. : </span
      >{{ mapOwnerToLineFullNamesOwner(owner) }}
    </div>
    <div class="phone">
      <span v-show="flag">Номер телефона : </span>{{ owner.phoneNumber }}
    </div>
    <div class="email">
      <span v-show="flag">Email : </span>{{ owner.email }}
    </div>
    <div class="share" v-show="flagShare">
      <span v-show="flag">Доля : </span>{{ owner.share }}
    </div>
    </div>
</template>
<script>
import {
  mapOwnerToLineFullNamesOwner,
  showFamilyStatus,
  showGender,
} from "@/pages/_functions/functions";
export default {
  name: "owner-item",
  props: {
    owner: Object,
    count: Number,
    flag: Boolean,
    flagShare: Boolean,
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
  border: 1px solid teal;
  color: blueviolet;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.count {
  width: 5%;
}
.name {
  width: 30%;
}
.phone {
  width: 25%;
}

.email {
  width: 25%;
}

span {
  color: teal;
}
</style>
@/pages/_functions/functions @/pages/bills/_functions/functions
