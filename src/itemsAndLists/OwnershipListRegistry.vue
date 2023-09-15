<template>
  <div class="list" v-for="one in list" :key="one.id">
    <ownership-item
      :ownership="one.ownership"
      @click="
        () => this.$router.push(PAGE_SHOW_OWNERSHIP + '/' + one.ownership.id)
      "
      :flag="true"
    />
    <p
      v-for="(two, index) in one.listFullNameOwner"
      :key="two.ownerId"
      @click="() => this.$router.push(PAGE_SHOW_OWNER + '/' + two.ownerId)"
    >
      {{ index + 1 }}. {{ two.fullNameOwner }}
    </p>
  </div>
</template>
<script>
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import { PAGE_SHOW_OWNERSHIP, PAGE_SHOW_OWNER } from "@/router/apiRouter";
export default {
  data() {
    return {
      PAGE_SHOW_OWNERSHIP,
      PAGE_SHOW_OWNER,
    };
  },
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
</style>
