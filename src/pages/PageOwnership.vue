<template>
  <div class="main">
    <button-simple class="btn" @click="back">Назад</button-simple>
    <block-ownership :ownership="getOwnership" />
    <div class="list" v-for="one in getListOwnerById">
      <block-owner :owner="createOwner(one)" :password="one.password" />
    </div>

    <button-simple class="btn" @click="back">Назад</button-simple>
  </div>
</template>
<script>
import BlockOwner from "@/blocks/BlockOwner.vue";
import BlockOwnership from "@/blocks/BlockOwnership.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    BlockOwner,
    BlockOwnership,
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
      fetchListOwnerByListId: "owner/fetchListOwnerByListId",
    }),
    back() {
      this.$router.push("/registry/ownerships");
    },
    createOwner(one) {
      return {
        id: one.id,
        firstName: one.firstName,
        secondName: one.secondName,
        lastName: one.lastName,
        gender: one.gender,
        phoneNumber: one.phoneNumber,
        email: one.email,
      };
    },
    createListOwnerByListId(id) {
      const result = [];
      this.getRegistryOwnerships.forEach((el) => {
        if (el.ownership.id == id) {
          el.listFullNameOwner.forEach((element) => {
            result.push(element.ownerId);
          });
        }
      });
      return result;
    },
  },

  mounted() {
    const id = this.$route.params.id;
    this.fetchOwnership(id);

    const result = this.createListOwnerByListId(id);
    if (result.length === 0) {
      this.fetchListOwnerByListId(this.getListIds);
    } else {
      this.fetchListOwnerByListId(result);
    }
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getRegistryOwnerships: "registry/getRegistryOwnerships",
      getListOwnerById: "owner/getListOwnerById",
      getListIds: "owner/getListIds",
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
