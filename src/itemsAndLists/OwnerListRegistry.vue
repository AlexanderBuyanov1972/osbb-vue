<template>
  <div class="list" v-for="one in list" :key="one.id">
    <p
      @click="
        () =>
          this.$router.push(PAGE_SHOW_OWNER + '/' + one.fullNameOwner.ownerId)
      "
    >
      {{ one.fullNameOwner.fullNameOwner }}
    </p>

    <ownership-item
      v-for="(two, index) in one.listOwnership"
      :ownership="two"
      :key="two.id"
      :count="index + 1"
      @click="() => this.$router.push(PAGE_SHOW_OWNERSHIP + '/' + two.id)"
      :flag="true"
    />
  </div>
</template>

<script>
import OwnershipList from "@/itemsAndLists/OwnershipList.vue";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import { PAGE_SHOW_OWNER, PAGE_SHOW_OWNERSHIP } from "@/router/apiRouter";
export default {
  data() {
    return {
      PAGE_SHOW_OWNER,
      PAGE_SHOW_OWNERSHIP,
    };
  },
  components: {
    OwnershipList,
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
.list {
  border: 1px solid teal;
  padding: 0px 5px;
  margin: 5px 0px;
}
p {
  color: brown;
  font-size: 17px;
  margin: 5px 0px;
}
</style>
