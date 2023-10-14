<template>
  <header-data-owners></header-data-owners>
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
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
