<template>
  <header-data-owners></header-data-owners>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="messages" />
  <block-search-apartment
    @messages="(value) => (messages = value)"
    :owner="getOwner"
  />
  <line-header
    :text="`Собственник -  ${mapOwnerToLineFullNamesOwner(getOwner)}`"
  />
  <button-delete
    :style="{ color: 'red', 'border-color': 'red' }"
    v-show="!owner.active"
    @click="removeOwner"
    >Удалить из базы данных</button-delete
  >
  <block-get-owner :owner="owner" />
  <div class="items">
    <block-get-passport :passport="passport" />
    <block-get-place-work :placeWork="placeWork" />
    <block-get-vehicle :vehicle="vehicle" />
  </div>
  <vue-hr />
  <button-back />
  <button-edit @click="$router.push(PAGE_OWNER_UPDATE + '/' + owner.id)"
    >Редактировать собственника</button-edit
  >
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
import { PAGE_OWNERS_GET, PAGE_OWNER_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      owner: {},
      passport: {},
      placeWork: {},
      vehicle: {},
      messages: [],
      PAGE_OWNERS_GET,
      PAGE_OWNER_UPDATE,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
      deleteOwner: "owner/deleteOwner",
    }),
    removeOwner() {
      this.deleteOwner(this.owner.id).then(() => {
        this.$router.push(PAGE_OWNERS_GET);
      });
    },
  },
  update() {
    this.fetchOwner(this.$route.params.id).then(() => {
      this.owner = this.getOwner;
      this.passport = this.getOwner.passport;
      this.placeWork = this.getOwner.placeWork;
      this.vehicle = this.getOwner.vehicle;
    });
  },
  mounted() {
    this.fetchOwner(this.$route.params.id).then(() => {
      this.owner = this.getOwner;
      this.passport = this.getOwner.passport;
      this.placeWork = this.getOwner.placeWork;
      this.vehicle = this.getOwner.vehicle;
    });
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
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
