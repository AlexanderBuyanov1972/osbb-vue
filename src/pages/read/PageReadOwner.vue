<template>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="this.getMessages" />
  <line-header
    :text="`Собственник -  ${mapOwnerToLineFullNamesOwner(this.getOwner)}`"
  />
  <block-read-owner :owner="owner" />
  <block-read-passport :passport="this.getOwner.passport" />
  <vue-hr />
  <button-edit
    @click="this.$router.push(PAGE_EDIT_OWNER + '/' + this.getOwner.id)"
    >{{ EDIT_OWNER }}</button-edit
  >
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/functions";
import { EDIT_OWNER } from "@/ui/namesButton";
import { PAGE_EDIT_OWNER } from "@/router/apiRouter";
export default {
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      owner: {},
      EDIT_OWNER,
      PAGE_EDIT_OWNER,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
  },
  mounted() {
    this.fetchOwner(this.$route.params.id).then(
      () => (this.owner = this.getOwner)
    );
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
</style>
