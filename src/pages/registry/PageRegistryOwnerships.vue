<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <block-information-about-house :info="getBuildingCharacteristics" />
    <ownership-list-registry :list="getRegistryOwnerships" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BlockInformationAboutHouse from "@/blocks/BlockInformationAboutHouse.vue";
import OwnershipListRegistry from "@/itemsAndLists/OwnershipListRegistry.vue";
export default {
  components: {
    BlockInformationAboutHouse,
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
