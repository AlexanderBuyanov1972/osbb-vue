<template>
  <div class="main">
    <div class="list" v-for="one in getOwnerships" :key="one.id">
      <div
        class="item"
        @click="() => this.$router.push('/ownership/' + one.id)"
      >
        <ownership-item :ownership="one" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OwnershipItem from "@/items/OwnershipItem.vue";
export default {
  components: {
    OwnershipItem,
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
.list {
  margin: 30px;
}
</style>
