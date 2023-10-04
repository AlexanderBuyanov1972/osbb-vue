<template>
  <div class="block1">
    <button-edit @click="$router.push(PAGE_OWNERS_GET)"
      >{{ OWNERS_GET }}
    </button-edit>
    <button-edit @click="$router.push(PAGE_REGISTRY_OWNERS)"
      >{{ REGISTRY_OWNERS }}
    </button-edit>
    <button-edit @click="$router.push(PAGE_ENTRY_CREATE)"
      >{{ ENTRY_CREATE }}
    </button-edit>
    <button-edit @click="this.$router.push(PAGE_ENTRY_UPDATE)">{{
      ENTRY_UPDATE
    }}</button-edit>
  </div>
</template>
<script>
import {
  PAGE_OWNERS_GET,
  PAGE_REGISTRY_OWNERS,
  PAGE_ENTRY_CREATE,
  PAGE_OWNER_GET,
  PAGE_ENTRY_UPDATE,
} from "@/router/apiRouter";
import {
  GET,
  REGISTRY_OWNERS,
  ENTRY_CREATE,
  OWNERS_GET,
  ENTRY_UPDATE,
} from "@/ui/namesButton";
export default {
  name: "header-data-owners",
  data() {
    return {
      // pages
      PAGE_OWNERS_GET,
      PAGE_REGISTRY_OWNERS,
      PAGE_ENTRY_CREATE,
      PAGE_OWNER_GET,
      PAGE_ENTRY_UPDATE,
      // buttons
      ENTRY_CREATE,
      GET,
      OWNERS_GET,
      REGISTRY_OWNERS,
      ENTRY_UPDATE,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.block1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
