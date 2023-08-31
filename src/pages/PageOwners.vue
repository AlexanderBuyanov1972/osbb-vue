<template>
  <div class="main">
    <owner-list :owners="getOwners"></owner-list>
  </div>
</template>
<script>
import OwnerList from "@/lists/OwnerList.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    OwnerList,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchAllOwner: "owner/getAllOwner",
    })
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
