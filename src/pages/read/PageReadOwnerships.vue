<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <div class="list" v-for="(one, index) in getOwnerships" :key="one.id">
      <div
        class="item"
        @click="() => this.$router.push('/ownership/' + one.id)"
      >
        <ownership-item :ownership="one" :count="index + 1" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
export default {
  components: {
    OwnershipItem,
  },
  computed: {
    ...mapGetters({
      getOwnerships: "ownership/getOwnerships",
      getMessages: "ownership/getMessages",
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
</style>
