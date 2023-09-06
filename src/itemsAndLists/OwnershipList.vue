<template>
  <div class="main">
    <div class="list" v-if="ownerships.length > 0">
      <ownership-item
        v-for="(one, index) in ownerships"
        :ownership="one"
        :key="one.id"
        :count="index + 1"
      />
    </div>
    <div class="empty" v-else>Лист собственности пуст.</div>
  </div>
</template>
<script>
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
export default {
  components: {
    OwnershipItem,
  },
  props: {
    ownerships: {
      type: Array,
      default: () => [],
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
.empty {
  color: cadetblue;
  font-size: 1.5em;
  border: 2px solid cadetblue;
  margin: 15px;
  padding: 15px;
}
</style>

<!-- @click="() => this.$router.push('/ownership/' + one.id)" -->
