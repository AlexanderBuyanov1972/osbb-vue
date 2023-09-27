<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessagesOwnership" />
    <line-header text="Просмотр записи о собственности." />
    <line-address :address="getOwnership.address" />
    <div class="blocks">
      <block-get-ownership :ownership="getOwnership" />
      <div class="" @click="this.$router.push(PAGE_OWNER_GET + '/' + getOwnership.owner.id)">
        <block-get-owner :owner="getOwnership.owner" />
      </div>
    </div>
    <vue-hr />
    <button-back />
    <button-edit
      @click="this.$router.push(PAGE_ENTRY_UPDATE + '/' + this.getOwnership.id)"
      >{{ ENTRY_UPDATE }}</button-edit
    >
    <!-- для отрисовки старницы при обновлении ID - перезагрузка -->
    <button-simple :hidden="true" @click="start">reset</button-simple>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { ENTRY_UPDATE } from "@/ui/namesButton";
import { PAGE_ENTRY_UPDATE, PAGE_OWNER_GET } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {},
      ENTRY_UPDATE,
      PAGE_ENTRY_UPDATE,
      PAGE_OWNER_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
  },
  mounted() {
    this.start;
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getMessagesOwnership: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
    start() {
      this.fetchOwnership(this.$route.params.id);
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
.blocks {
  font-size: 1.2em;
}
.owner {
  width: 100%;
  margin-top: 10px;
}

hr {
  margin-top: 25px;
  color: teal;
}
</style>
