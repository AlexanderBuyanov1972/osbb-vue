<template>
  <div class="list" v-for="(itemList, index) in list" :key="index">
    <!--  -->
    <div
      class="item"
      v-for="item in itemList"
      :key="item.owner.id"
      @click="() => this.$router.push(PAGE_OWNER_GET + '/' + item.owner.id)"
    >
      <span>Ф.И.О. : </span>{{ mapOwnerToLineFullNamesOwner(item.owner) }}
      <span
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Номер телефона :</span
      >
      {{ item.owner.phoneNumber }}
    </div>
    <!--  -->
    <div
      class=""
      @click="
        () =>
          this.$router.push(PAGE_OWNERSHIP_GET + '/' + itemList[0].ownership.id)
      "
    >
      <ownership-item
        class="ownership"
        :ownership="itemList[0].ownership"
        :count="index + 1"
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
