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
  <dialog-window :show="showModal">
    <modal-select-bill-ownership
      message="По данному номеру помещения числится несколько лицевых счетов. Выберите подходящий для вашего запроса."
      :ownerships="ownerships"
      @close="showModal = false"
      @select="(id) => selectOwnershipId(id)"
    ></modal-select-bill-ownership>
  </dialog-window>
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
import ModalSelectBillOwnership from "@/modals/ModalSelectBillOwnership.vue";
export default {
  components: { ModalSelectBillOwnership },
  name: "header-data-ownerships",
  data() {
    return {
      id: 0,
      apartment: "1",
      ownerships: [],
      showModal: false,
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
      fetchAllOwnershipByApartment: "ownership/fetchAllOwnershipByApartment",
    }),
    action(value) {
      this.apartment = value;
      this.fetchAllOwnershipByApartment(this.apartment).then(() => {
        this.ownerships = this.getOwnerships;
        if (this.ownerships.length > 1) {
          this.showModal = true;
        } else {
          this.$router.push(PAGE_OWNERSHIP_GET + "/" + this.ownerships[0].id);
        }
      });
    },
    selectOwnershipId(id) {
      this.showModal = false;
      this.$router.push(PAGE_OWNERSHIP_GET + "/" + id);
    },
  },
  computed: {
    ...mapGetters({
      getOwnerships: "ownership/getOwnerships",
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
