<template>
   <div class="main">
    <div class="list" v-if="ownerships.length > 0">
      <ownership-item v-for="one in ownerships" :ownership="one" :key="one.id"  @click="()=> getToPageOwnership(one.id)" />
    </div>
    <div class="empty" v-else>List ownerships is empty</div>
  </div>
</template>
<script>
import OwnershipItem from "@/items/OwnershipItem.vue";
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
  methods: {
      getToPageOwnership(id){
        this.$router.push("/ownership/" + id);
      }
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
