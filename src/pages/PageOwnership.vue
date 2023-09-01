<template>
  <div class="main">
    <button-simple class="btn" @click="back">Назад</button-simple>

    <block-ownership :ownership="getOneOwnershipAndListOwner.ownership" />
    <div
      class="list"
      v-for="one in getOneOwnershipAndListOwner.owners"
      :key="one.id"
    >
      <block-owner :owner="one" :password="one.password" />
    </div>

    <button-simple class="btn" @click="back">Назад</button-simple>
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
    back() {
      this.$router.push("/registry/ownerships");
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
