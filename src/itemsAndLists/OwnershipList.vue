<template>
  <div class="main">
    <div class="list" v-if="ownerships.length > 0">
      <ownership-item
        v-for="one in ownerships"
        :ownership="one"
        :key="one.id"
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
.main {
}
.list {
}
.empty {
}
</style>

<!-- @click="() => this.$router.push('/ownership/' + one.id)" -->
