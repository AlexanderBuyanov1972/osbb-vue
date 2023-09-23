<template>
  <div class="main">
    <header-data></header-data>
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Реестр недвижимости" />
    <block-information-about-house :info="getBuildingCharacteristics" />
    <ownership-list-registry :list="getRegistryOwnerships" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OwnershipListRegistry from "@/itemsAndLists/OwnershipListRegistry.vue";
export default {
  components: {
    OwnershipListRegistry,
  },
  methods: {
    ...mapActions({
      fetchRegistryOwnerships: "registry/fetchRegistryOwnerships",
    }),
  },
  mounted() {
    this.fetchRegistryOwnerships();
  },
  computed: {
    ...mapGetters({
      getRegistryOwnerships: "registry/getRegistryOwnerships",
      getBuildingCharacteristics: "registry/getBuildingCharacteristics",
      getMessages: "registry/getMessages",
      getIsLoading: "registry/getIsLoading",
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
