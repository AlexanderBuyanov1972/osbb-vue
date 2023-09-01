<template>
  <div class="main">
    <button-simple class="btn" @click="backToRegister"
      >К регистру собственников.</button-simple
    >
    <button-simple class="btn" @click="backToList"
      >К списку собственников.</button-simple
    >

    <block-owner :owner="getOwner" />
    <div class="list" v-for="one in getOwner.ownerships" :key="one.id">
      <block-ownership :ownership="one" />
    </div>

    <button-simple class="btn" @click="backToRegister"
      >К регистру собственников.</button-simple
    >
    <button-simple class="btn" @click="backToList"
      >К списку собственников.</button-simple
    >
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import BlockOwner from "@/blocks/BlockOwner.vue";
import BlockOwnership from "@/blocks/BlockOwnership.vue";
export default {
  components: {
    BlockOwner,
    BlockOwnership,
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
    backToRegister() {
      this.$router.push("/registry/owners");
    },
    backToList() {
      this.$router.push("/owners");
    },
  },
  mounted() {
    this.fetchOwner(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
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
