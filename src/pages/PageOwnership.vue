<template>
  <div class="main">
    <!-- buttons -->
    <button-simple class="btn" @click="backToRegister"
      >К регистру собственности.</button-simple
    >
    <button-simple class="btn" @click="backToList"
      >К списку собственности.</button-simple
    >
    <!-- one ownership -->
    <block-ownership :ownership="getOneOwnershipAndListOwner.ownership || {}" />
    <!-- list owners -->
    <div
      class="list"
      v-for="one in getOneOwnershipAndListOwner.owners"
      :key="one.id"
    >
      <block-owner :owner="one" />
    </div>
    <!-- buttons -->
    <button-simple class="btn" @click="backToRegister"
      >К регистру собственников.</button-simple
    >
    <button-simple class="btn" @click="backToList"
      >К списку собственников.</button-simple
    >
  </div>
</template>
<script>
import BlockOwner from "@/blocks/BlockOwner.vue";
import BlockOwnership from "@/blocks/BlockOwnership.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BlockOwner,
    BlockOwnership,
  },
  methods: {
    ...mapActions({
      fetchOneOwnershipAndListOwner: "ownership/fetchOneOwnershipAndListOwner",
    }),
    backToRegister() {
      this.$router.push("/registry/ownerships");
    },
    backToList() {
      this.$router.push("/ownerships");
    },
  },

  mounted() {
    this.fetchOneOwnershipAndListOwner(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      getOneOwnershipAndListOwner: "ownership/getOneOwnershipAndListOwner",
    }),
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
.btn {
  margin: 20px 0px 10px 5px;
}
</style>
