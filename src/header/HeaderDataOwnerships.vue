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
    <button-simple @click="$router.push(PAGE_ENTRY_CREATE)"
      >Создать запись
    </button-simple>
    <button-simple @click="this.$router.push(PAGE_ENTRY_UPDATE)"
      >Редактировать запись</button-simple
    >
  </div>
  <block-search-apartment
    nameButton="Получить"
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
  PAGE_OWNERS_GET,
  PAGE_REGISTRY_OWNERS,
} from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-data-ownerships",
  data() {
    return {
      apartment: "1",
      PAGE_OWNERSHIPS_GET,
      PAGE_REGISTRY_OWNERSHIPS,
      PAGE_ENTRY_CREATE,
      PAGE_OWNERSHIP_GET,
      PAGE_ENTRY_UPDATE,
      PAGE_OWNERS_GET,
      PAGE_REGISTRY_OWNERS,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnershipsByApartment: "ownership/fetchOwnershipsByApartment",
    }),
    action(value) {
      // this.fetchOwnershipsByApartment(value).then(() => {
      //   this.$router.push(PAGE_OWNERSHIP_GET
      //    + "/" + this.getOwnership.id
      //    );
      // });
        this.$router.push(PAGE_OWNERSHIP_GET
         + "/" + this.apartment
         );
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
