<template>
  <div class="main">
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
        this.$router.push(PAGE_SHOW_OWNERSHIP + '/' + this.getOwnership.id)
      "
    />
    <button-edit @click="goToPageUpdateOwnership">{{
      EDIT_ENTRY_ABOUT_OWNERSHIP
    }}</button-edit>
    <!-- для отрисовки старницы при обновлении ID - перезагрузка -->
    <button-simple :hidden="true" @click="start">reset</button-simple>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { EDIT_ENTRY_ABOUT_OWNERSHIP } from "@/ui/namesButton";
import {
  PAGE_SHOW_OWNERSHIP,
  PAGE_UPDATE_ENTRY_OWNERSHIP,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      owners: [],
      EDIT_ENTRY_ABOUT_OWNERSHIP,
      PAGE_SHOW_OWNERSHIP,
      PAGE_UPDATE_ENTRY_OWNERSHIP,
    };
  },

  methods: {
    goToPageUpdateOwnership() {
      this.$router.push(
        PAGE_UPDATE_ENTRY_OWNERSHIP + "/" + this.getOwnership.id
      );
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
