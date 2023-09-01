<template>
  <div class="main">
    <button-simple class="btn" @click="back">Назад</button-simple>

    <block-owner :owner="createOwner()" :password="getOwner.password" />
    <div class="list" v-for="one in getOwner.ownerships" :key="one.id">
      <block-ownership :ownership="one" />
    </div>

    <button-simple class="btn" @click="back">Назад</button-simple>
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
    createOwner() {
      return {
        id: this.getOwner.id,
        firstName: this.getOwner.firstName,
        secondName: this.getOwner.secondName,
        lastName: this.getOwner.lastName,
        gender: this.getOwner.gender,
        phoneNumber: this.getOwner.phoneNumber,
        email: this.getOwner.email,
      };
    },
    back() {
      this.$router.push("/registry/owners");
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
