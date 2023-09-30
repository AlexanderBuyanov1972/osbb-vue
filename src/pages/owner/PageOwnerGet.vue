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
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
export default {
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      owner: {},
      passport: {},
      placeWork: {},
      vehicle: {},
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
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
@/pages/functions/functions @/pages/bills/_functions/functions
