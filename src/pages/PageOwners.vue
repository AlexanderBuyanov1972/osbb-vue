<template>
  <div class="main">
    <div class="list" v-for="one in getOwners" :key="one.id">
      <div class="item" @click="() => this.$router.push('/owner/' + one.id)">
        <owner-item :owner="one" />
      </div>
    </div>
    <owner-list :owners="getOwners"></owner-list>
  </div>
</template>
<script>
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    OwnerItem,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchAllOwner: "owner/getAllOwner",
    }),
  },
  computed: {
    ...mapGetters({
      getOwners: "owner/getOwners",
    }),
  },
  mounted() {
    this.fetchAllOwner();
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
</style>
