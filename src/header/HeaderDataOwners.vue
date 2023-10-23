<template>
  <div class="block1">
    <button-edit @click="$router.push(PAGE_OWNERS_GET)"
      >Список собственников
    </button-edit>
    <button-edit @click="$router.push(PAGE_REGISTRY_OWNERS)"
      >"Реестр собственников"
    </button-edit>
    <button-edit @click="$router.push(PAGE_ENTRY_CREATE)"
      >Создать запись
    </button-edit>
    <button-edit @click="this.$router.push(PAGE_ENTRY_UPDATE)"
      >Редактировать запись</button-edit
    >
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
