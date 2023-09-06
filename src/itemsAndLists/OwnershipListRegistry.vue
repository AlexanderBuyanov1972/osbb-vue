<template>
  <div class="main">
    <div
      class="list"
      v-for="one in list"
      @click="() => this.$router.push('/ownership/' + one.ownership.id)"
      :key="one.id"
    >
      <ownership-item class="item" :ownership="one.ownership" />
      <p v-for="(two, index) in one.listFullNameOwner" :key="two.ownerId">
        {{ index + 1 }}. {{ two.fullNameOwner }}
      </p>
    </div>
  </div>
</template>
<script>
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
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
  padding: 10px;
  margin: 25px 0px;
}

p {
  color: brown;
  font-size: 1.2em;
  margin: 10px 5px;
}
.item{
margin-left: 10px;
}
</style>
