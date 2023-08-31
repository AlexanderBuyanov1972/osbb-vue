<template>
  <div class="main">
    <div class="list" v-if="owners.length > 0">
      <owner-item
        v-for="one in owners"
        :owner="one"
        :key="one.id"
        @click="() => getToPageOwnerById(one.id)"
      />
    </div>
    <div class="empty" v-else>Список собственников пуст</div>
  </div>
</template>

<script>
import OwnerItem from "@/items/OwnerItem.vue";
export default {
  components: {
    OwnerItem,
  },
  props: {
    owners: {
      type: Array,
      default: () => [],
    },
    
  },
  methods: {
      getToPageOwnerById(id) {
        this.$router.push("/owner/" + id);
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
  color: cadetblue;
  font-size: 1.5em;
  border: 2px solid cadetblue;
  margin: 15px;
  padding: 15px;
}
</style>
