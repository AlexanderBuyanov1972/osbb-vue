<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <block-information-about-house :info="getBuildingCharacteristics" />
    <owner-list-registry :list="getRegistryOwners" />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import OwnerListRegistry from "@/itemsAndLists/OwnerListRegistry.vue";

export default {
  components: {
    OwnerListRegistry,
  },
  methods: {
    ...mapActions({
      fetchRegistryOwners: "registry/fetchRegistryOwners",
    }),
  },
  mounted() {
    this.fetchRegistryOwners();
  },
  computed: {
    ...mapGetters({
      getRegistryOwners: "registry/getRegistryOwners",
      getBuildingCharacteristics: "registry/getBuildingCharacteristics",
      getMessages: "registry/getMessages",
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
</style>
