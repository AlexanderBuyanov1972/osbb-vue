<template>
  <div class="list"  v-for="item in list">
    <!-- rooms -->
    <div
      class="item"
      v-for="one in item.rooms"
      :key="one.id"
      @click="() => this.$router.push(PAGE_OWNERSHIP_GET + '/' + one.id)"
    >
      <span>Квартира № </span
      >{{
        one.apartment
      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        общая площадь :</span
      >
      {{ one.totalArea }} м2
    </div>

    <p v-for="(two, index) in item.clients" :key="two.id">
      <owner-item
        :owner="two"
        :count="index + 1"
        @click="() => this.$router.push(PAGE_OWNER_GET + '/' + two.id)"
        :flag="true"
        :flagShare="true"
      />
    </p>
  </div>
</template>
<script>
import { PAGE_OWNERSHIP_GET, PAGE_OWNER_GET } from "@/router/apiRouter";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
import OwnerItem from "./OwnerItem.vue";
export default {
  components: { OwnerItem },
  data() {
    return {
      PAGE_OWNERSHIP_GET,
      PAGE_OWNER_GET,
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
  border: 1px solid;
  padding: 10px 5px;
  margin: 10px 0px;
}

.item {
  font-size: 20px;
  color: blueviolet;
}
span {
  color: teal;
}
</style>
