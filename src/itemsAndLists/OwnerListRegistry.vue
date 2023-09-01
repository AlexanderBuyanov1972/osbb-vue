<template>
  <div class="main">
    <div
      class="list"
      v-for="one in list"
      :key="one.id"
      @click="() => this.$router.push('/owner/' + one.fullNameOwner.ownerId)"
    >
      <p>{{ one.fullNameOwner.fullNameOwner }}</p>
      <ownership-list :ownerships="one.listOwnership" />
    </div>
  </div>
</template>

<script>
import OwnershipList from "@/itemsAndLists/OwnershipList.vue";
export default {
  components: {
    OwnershipList,
  },
  props: {
    list: {
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
  margin: 10px 0px;
}
.list {
  border: 2px solid teal;
  padding: 5px;
  margin: 25px 5px;
}
p {
  color: brown;
  font-size: 1.2em;
  margin: 0px 5px;
}
</style>
