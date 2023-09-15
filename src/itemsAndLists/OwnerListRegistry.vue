<template>
  <div class="main">
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
      />
    </div>
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
  margin: 10px 10px;
}
</style>
