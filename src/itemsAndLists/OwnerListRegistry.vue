<template>
  <div class="list"  v-for="item in list">

    <!-- clients -->
    <div
      class="item"
      v-for="one in item.clients"
      :key="one.id"
      @click="() => this.$router.push(PAGE_OWNER_GET + '/' + one.id)"
    >
      <span>Ф.И.О. : </span>{{ mapOwnerToLineFullNamesOwner(one) }}
      <span
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Номер телефона :</span
      >
      {{ one.phoneNumber }}
    </div>

    <!-- rooms -->
    <div v-for="two in item.rooms" :key="two.id">
      <ownership-item
        class="ownership"
        :ownership="two"
        :count="two.id"
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
