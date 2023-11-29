<template>
  <header-data-owners></header-data-owners>
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="messages" />
  <block-search-full-name
    :fullNameProps="mapOwnerToFullName(getOwner)"
    nameButton="Получить список помещений"
    @fullName="(value) => action(value)"
  />
  <line-header
    :text="`Собственник -  ${mapOwnerToFullName(getOwner)}`"
  />
  <button-delete
    :style="{ color: 'red', 'border-color': 'red' }"
    v-show="!owner.active"
    @click="removeOwner"
    >Удалить собственника из базы данных</button-delete
  >
  <block-get-owner
    :owner="owner"
    :style="{ height: '350px' }"
    :photoName="photo.name"
  />
  <div class="items">
    <block-get-passport :passport="passport" />
    <block-get-place-work :placeWork="placeWork" />
    <block-get-vehicle :vehicle="vehicle" />
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
export default {
  data() {
    return {
      mapOwnerToFullName,
      owner: {},
      passport: {},
      placeWork: {},
      vehicle: {},
      photo: {},
      messages: [],
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
    action(value) {
      this.fetchAllApartmentByFullName(value).then(() => {
        this.messages = this.getOwnerships;
      });
    },
    removeOwner() {
      this.deleteOwner(this.owner.id).then(() => {
        this.$router.push(PAGE_OWNERS_GET);
      });
    },
    fill() {
      this.owner = this.getOwner;
      this.passport = this.getOwner.passport;
      this.placeWork = this.getOwner.placeWork;
      this.vehicle = this.getOwner.vehicle;
      this.photo = this.getOwner.photo;
    },
  },
  update() {
    this.fetchOwner(this.$route.params.id).then(() => {
      this.fill();
    });
  },
  mounted() {
    this.fetchOwner(this.$route.params.id).then(() => {
      this.fill();
    });
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
      getOwnerships: "ownership/getOwnerships",
      getIsLoading: "owner/getIsLoading",
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
.items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
