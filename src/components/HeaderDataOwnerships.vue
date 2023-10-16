<template>
  <div class="block">
    <button-simple @click="$router.push(PAGE_OWNERSHIPS_GET)"
      >{{ OWNERSHIPS_GET }}
    </button-simple>
    <button-simple @click="$router.push(PAGE_REGISTRY_OWNERSHIPS)"
      >{{ REGISTRY_OWNERSHIPS }}
    </button-simple>
    <button-simple @click="$router.push(PAGE_ENTRY_CREATE)"
      >{{ ENTRY_CREATE }}
    </button-simple>
    <button-simple @click="this.$router.push(PAGE_ENTRY_UPDATE)">{{
      ENTRY_UPDATE
    }}</button-simple>
  </div>
  <block-search-apartment
    :nameButton="GET"
    @apartment="(value) => action(value)"
  />
</template>
<script>
import {
  PAGE_OWNERSHIPS_GET,
  PAGE_REGISTRY_OWNERSHIPS,
  PAGE_ENTRY_CREATE,
  PAGE_OWNERSHIP_GET,
  PAGE_ENTRY_UPDATE,
} from "@/router/apiRouter";
import {
  OWNERSHIPS_GET,
  REGISTRY_OWNERSHIPS,
  ENTRY_CREATE,
  ENTRY_UPDATE,
  GET,
} from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-data-ownerships",
  data() {
    return {
      apartment: "1",
      // buttons
      OWNERSHIPS_GET,
      REGISTRY_OWNERSHIPS,
      ENTRY_CREATE,
      ENTRY_UPDATE,
      GET,
      // pages
      PAGE_OWNERSHIPS_GET,
      PAGE_REGISTRY_OWNERSHIPS,
      PAGE_ENTRY_CREATE,
      PAGE_OWNERSHIP_GET,
      PAGE_ENTRY_UPDATE,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnershipByApartment: "ownership/fetchOwnershipByApartment",
    }),
    action(value) {
      this.fetchOwnershipByApartment(value).then(() => {
        this.$router.push(PAGE_OWNERSHIP_GET + "/" + this.getOwnership.id);
      });
    },
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
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
.block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
