<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <div class="list" v-for="(one, index) in getOwners" :key="one.id">
      <div class="item" @click="() => this.$router.push('/owner/' + one.id)">
        <owner-item :owner="one" :count="index + 1" />
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
      getMessages: "owner/getMessages",
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
</style>
