<template>
  <div class="main">
    <block-information-about-house :info="getBuildingCharacteristics"/>
    <owner-list-registry :list="getRegistryOwners"/>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import BlockInformationAboutHouse from "@/blocks/BlockInformationAboutHouse.vue";
import OwnerListRegistry from "@/lists/OwnerListRegistry.vue";

export default {
  components:{
    BlockInformationAboutHouse,
    OwnerListRegistry
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
  margin: 0px 50px;
}
</style>
