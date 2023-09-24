<template>
  <header-data-owners></header-data-owners>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="this.getMessages" />
  <line-header
    :text="`Собственник -  ${mapOwnerToLineFullNamesOwner(this.getOwner)}`"
  />
  <block-read-owner :owner="owner" />
  <block-read-passport :passport="this.getOwner.passport" />
  <vue-hr />
  <button-edit
    @click="this.$router.push(PAGE_OWNER_UPDATE + '/' + this.getOwner.id)"
    >{{ OWNER_UPDATE }}</button-edit
  >
</template>
<script>
import { mapGetters, mapActions} from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
import { OWNER_UPDATE } from "@/ui/namesButton";
import { PAGE_OWNER_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      owner: {},
      OWNER_UPDATE,
      PAGE_OWNER_UPDATE,
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
@/pages/functions/functions
