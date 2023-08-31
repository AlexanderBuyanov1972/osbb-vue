<template>
  <div class="main">
    <ownership-list :ownerships="getOwnerships"></ownership-list>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import OwnershipList from "@/lists/OwnershipList.vue";
export default {
  components: {
    OwnershipList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getOwnerships: "ownership/getOwnerships",
    }),
  },
  methods: {
    ...mapActions({
      fetchOwnerships: "ownership/getAllOwnership",
    }),
  },
  mounted() {
    this.fetchOwnerships();
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
