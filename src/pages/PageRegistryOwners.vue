<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <line-header
      text="Реестр собственников"
      :style="{ color: 'darkgoldenrod' }"
    />
    <button-back />
    <block-information-about-house :info="getBuildingCharacteristics" />
    <owner-list-registry :list="getRegistry" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OwnerListRegistry from "@/itemsAndLists/OwnerListRegistry.vue";
export default {
  components: {
    OwnerListRegistry,
  },
  methods: {
    ...mapActions({
      fetchRegistryOwners: "registry/fetchRegistryOwners",
      fetchBuildingCharacteristics: "registry/fetchBuildingCharacteristics",
    }),
  },
  mounted() {
    this.fetchBuildingCharacteristics().then(() => this.fetchRegistryOwners());
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
