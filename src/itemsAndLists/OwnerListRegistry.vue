<template>
  <div class="list" v-for="(one, ind) in list" :key="ind">
    <div
      class="item"
      @click="() => this.$router.push(PAGE_OWNER_GET + '/' + one.client.id)"
    >
      <span>Ф.И.О. : </span>{{ mapOwnerToLineFullNamesOwner(one.client) }}
      <span
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Номер телефона :</span
      >
      {{ one.client.phoneNumber }}
    </div>
    <div v-for="(two, index) in one.rooms" :key="index">
      <ownership-item
        class="ownership"
        :ownership="two"
        :count="index + 1"
        @click="() => this.$router.push(PAGE_OWNERSHIP_GET + '/' + two.id)"
        :flag="true"
      />
    </div>
  </div>
</template>
<script>
import { PAGE_OWNER_GET, PAGE_OWNERSHIP_GET } from "@/router/apiRouter";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
export default {
  data() {
    return {
      PAGE_OWNER_GET,
      PAGE_OWNERSHIP_GET,
      mapOwnerToLineFullNamesOwner,
    };
  },
  props: {
    list: Object,
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.list {
  border: 1px solid teal;
  padding: 10px 5px;
  margin: 10px 0px;
}
span {
  color: blueviolet;
}

.item {
  font-size: 18px;
  color: teal;
}
</style>
