<template>
  <header-data-owners></header-data-owners>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Реестр собственников" />
    <block-information-about-house :info="getBuildingCharacteristics" />
    <owner-list-registry :list="getRegistryOwners" />
  </div>
</template>
<script>
import { mapActions, mapGetters} from "vuex";
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
