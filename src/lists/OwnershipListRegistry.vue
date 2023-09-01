<template>
  <div class="main">
    <div
      class="list"
      v-for="one in list"
      @click="() => this.$router.push('/ownership/' + one.ownership.id)"
      :key="one.id"
    >
      <ownership-item :ownership="one.ownership" />
      <p v-for="two in one.listFullNameOwner" :key="two.ownerId">
        {{ two.fullNameOwner }}
      </p>
    </div>
  </div>
</template>
<script>
import OwnershipItem from "@/items/OwnershipItem.vue";
export default {
  components: {
    OwnershipItem,
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
  margin: 10px 5px;
}
</style>
