<template>
  <div class="list">
    <ownership-item
      v-for="(one, index) in ownerships"
      :ownership="one"
      :key="one.id"
      :count="index + 1"
    />
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
</style>