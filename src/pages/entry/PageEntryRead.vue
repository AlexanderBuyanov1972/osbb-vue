<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessagesOwnership" />
    <line-header text="Просмотр записи о собственности." />
    <line-address :address="this.address" />
    <div class="blocks">
      <div class="ownership">
        <block-read-ownership :ownership="this.ownership" />
      </div>
      <div class="owner" v-for="one in owners" :key="one.id">
        <div class="read_owner">
          <block-read-owner :owner="one" />
        </div>
        <div class="read_passport">
          <block-read-passport
            :class="read_passport"
            :passport="one.passport"
          />
        </div>
      </div>
    </div>
    <vue-hr />
    <button-back
      @click="
        this.$router.push(PAGE_OWNERSHIP_READ + '/' + this.getOwnership.id)
      "
    />
    <button-edit @click="goToPageUpdateOwnership">{{
      ENTRY_UPDATE
    }}</button-edit>
    <!-- для отрисовки старницы при обновлении ID - перезагрузка -->
    <button-simple :hidden="true" @click="start">reset</button-simple>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { ENTRY_UPDATE } from "@/ui/namesButton";
import { PAGE_OWNERSHIP_READ, PAGE_ENTRY_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      owners: [],
      // buttons
      ENTRY_UPDATE,
      //pages
      PAGE_OWNERSHIP_READ,
      PAGE_ENTRY_UPDATE,
    };
  },

  methods: {
    goToPageUpdateOwnership() {
      this.$router.push(PAGE_ENTRY_UPDATE + "/" + this.getOwnership.id);
    },

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
      this.fetchOwnership(this.$route.params.id).then(() => {
        this.ownership = this.getOwnership;
        this.address = this.getOwnership.address;
        this.owners = this.getOwnership.owners;
      });
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}
.read_owner {
  width: 60%;
}
.read_passport {
  width: 35%;
  align-self: flex-start;
}

hr {
  margin-top: 25px;
  color: teal;
}
</style>
