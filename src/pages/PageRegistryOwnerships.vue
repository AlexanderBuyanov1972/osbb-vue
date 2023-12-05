<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <line-header text="Реестр недвижимости" :style="{ color: 'blueviolet' }" />
    <button-back />
    <block-information-about-house :info="getBuildingCharacteristics" />
    <ownership-list-registry :list="getRegistry" />
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
      fetchBuildingCharacteristics: "registry/fetchBuildingCharacteristics",
    }),
  },
  mounted() {
    this.fetchBuildingCharacteristics().then(() =>
      this.fetchRegistryOwnerships()
    );
  },
  computed: {
    ...mapGetters({
      getRegistry: "registry/getRegistry",
      getBuildingCharacteristics: "registry/getBuildingCharacteristics",
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
