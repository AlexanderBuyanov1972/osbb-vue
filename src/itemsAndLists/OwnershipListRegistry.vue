<template>
  <!-- лист листов record -->
  <div class="list" v-for="(itemList, index) in list" :key="index">
    <!--  один объект собственности -->
    <div
      class="item"
      @click="
        () =>
          this.$router.push(PAGE_OWNERSHIP_GET + '/' + itemList[0].ownership.id)
      "
    >
      <span>Квартира № </span
      >{{
        itemList[0].ownership.address.apartment
      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        общая площадь :</span
      >
      {{ itemList[0].ownership.totalArea }} м2
    </div>

    <!-- область листа собственников (может быть несколько собственников) -->
    <div v-for="(item, index) in itemList" :key="index">
      <div
        @click="() => this.$router.push(PAGE_OWNER_GET + '/' + item.owner.id)"
      >
        <owner-item
          :owner="item.owner"
          :count="index + 1"
          :flag="true"
          :share="item.share"
        />
        <button-deactivate
          :ownerId="item.owner.id"
          :ownershipId="itemList[0].ownership.id"
          :share="item.share"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { PAGE_OWNERSHIP_GET, PAGE_OWNER_GET } from "@/router/apiRouter";
import OwnerItem from "./OwnerItem.vue";
export default {
  components: { OwnerItem },
  data() {
    return {
      PAGE_OWNERSHIP_GET,
      PAGE_OWNER_GET,
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
