<template>
  <header-data-owners></header-data-owners>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="this.getMessages" />
  <line-header
    :text="`Собственник -  ${mapOwnerToLineFullNamesOwner(this.getOwner)}`"
  />
  <block-get-owner :owner="owner" />
  <div class="items">
    <block-get-passport :passport="passport" />
    <block-get-place-work :placeWork="placeWork" />
    <block-get-vehicle :vehicle="vehicle" />
  </div>

  <vue-hr />
  <button-back />
  <button-edit @click="goToPageEntryUpdate">{{ ENTRY_UPDATE }}</button-edit>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
import { ENTRY_UPDATE } from "@/ui/namesButton";
import { PAGE_ENTRY_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      owner: {},
      passport: {},
      placeWork: {},
      vehicle: {},
      ENTRY_UPDATE,
      PAGE_ENTRY_UPDATE,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
    goToPageEntryUpdate() {
      this.$router.push(PAGE_ENTRY_UPDATE + "/" + this.getOwnership.id);
    },
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
      getOwnership: "ownership/getOwnership",
      getOwner: "owner/getOwner",
      getMessages: "owner/getMessages",
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
@/pages/functions/functions
@/pages/bills/_functions/functions