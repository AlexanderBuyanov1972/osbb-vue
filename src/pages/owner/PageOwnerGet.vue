<template>
  <header-data-owners></header-data-owners>
  <block-search-full-name
    :fullNameProps="getFullName"
    nameButton="Получить список помещений"
    @fullName="actionFullName"
  />
  <line-header :text="`Собственник -  ${getFullName}`" />
  <button-delete
    :style="{ color: 'red', 'border-color': 'red' }"
    v-show="!owner.active"
    @click="removeOwner"
    >Удалить собственника из базы данных</button-delete
  >
  <block-get-owner
    :owner="owner"
    :style="{ height: '350px' }"
    :photoName="owner.photo.name"
  />
  <div class="items">
    <block-get-passport :passport="owner.passport" />
    <block-get-place-work :placeWork="owner.placeWork" />
    <block-get-vehicle :vehicle="owner.vehicle" />
  </div>
  <vue-hr />
  <button-back />
  <button-simple @click="$router.push(PAGE_OWNER_UPDATE + '/' + owner.id)"
    >Редактировать собственника</button-simple
  >
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mapOwnerToFullName } from "@/pages/_functions/functions";
import { PAGE_OWNERS_GET, PAGE_OWNER_UPDATE } from "@/router/apiRouter";
import store from "@/store/index";
export default {
  data() {
    return {
      mapOwnerToFullName,
      owner: {
        passport: {},
        placeWork: {},
        vehicle: {},
        photo: {},
      },
      PAGE_OWNERS_GET,
      PAGE_OWNER_UPDATE,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
      deleteOwner: "owner/deleteOwner",
      fetchAllApartmentByFullName: "ownership/fetchAllApartmentByFullName",
    }),
    actionFullName(fullName) {
      this.fetchAllApartmentByFullName(fullName).then(() => {
        store.state.message.messages = this.getOwnerships;
      });
    },
    removeOwner() {
      this.deleteOwner(this.owner.id).then(() => {
        this.$router.push(PAGE_OWNERS_GET);
      });
    },
    start() {
      this.fetchOwner(this.$route.params.id).then(() => {
        this.owner = this.getOwner;
      });
    },
  },
  update() {
    this.start();
  },
  mounted() {
    this.start();
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
      getOwnerships: "ownership/getOwnerships",
    }),
    getFullName() {
      return this.mapOwnerToFullName(this.getOwner);
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
.items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
