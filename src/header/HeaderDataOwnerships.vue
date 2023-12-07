<template>
  <div class="block">
    <button-simple @click="$router.push(PAGE_OWNERSHIPS_GET)"
      >Список объектов недвижимости
    </button-simple>
    <button-simple @click="$router.push(PAGE_REGISTRY_OWNERSHIPS)"
      >Реестр объектов недвижимости
    </button-simple>
    <button-simple @click="$router.push(PAGE_OWNERS_GET)"
      >Список собственников
    </button-simple>
    <button-simple @click="$router.push(PAGE_REGISTRY_OWNERS)"
      >Реестр собственников
    </button-simple>
    <button-simple @click="$router.push(PAGE_RECORD_CREATE)"
      >Создать запись
    </button-simple>
    <button-simple @click="this.$router.push(PAGE_RECORD_UPDATE)"
      >Редактировать запись</button-simple
    >
  </div>
  <block-search-apartment
    @selectId="actionId"
    nameButton="Получить"
  />
  <vue-hr/>
</template>
<script>
import {
  PAGE_OWNERSHIPS_GET,
  PAGE_REGISTRY_OWNERSHIPS,
  PAGE_RECORD_CREATE,
  PAGE_OWNERSHIP_GET,
  PAGE_RECORD_UPDATE,
  PAGE_OWNERS_GET,
  PAGE_REGISTRY_OWNERS,
} from "@/router/apiRouter";
import ModalSelectBillOwnership from "@/modals/ModalSelectBillOwnership.vue";
import BlockSearchApartment from "@/pages/blocks/BlockSearchApartment.vue";
export default {
  components: { ModalSelectBillOwnership, BlockSearchApartment },
  name: "header-data-ownerships",
  data() {
    return {
      PAGE_OWNERSHIPS_GET,
      PAGE_REGISTRY_OWNERSHIPS,
      PAGE_RECORD_CREATE,
      PAGE_OWNERSHIP_GET,
      PAGE_RECORD_UPDATE,
      PAGE_OWNERS_GET,
      PAGE_REGISTRY_OWNERS,
    };
  },
  methods: {
    actionId(id) {
      this.$router.push(PAGE_OWNERSHIP_GET + "/" + id);
    },
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
