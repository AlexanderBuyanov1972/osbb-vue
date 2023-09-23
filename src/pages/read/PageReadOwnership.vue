<template>
  <header-data></header-data>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header
      :text="
        'Объект недвижимости - квартира № ' +
        this.getOwnership.address.apartment
      "
    />
    <line-address :address="this.getOwnership.address" />
    <block-read-ownership :ownership="ownership" />
    <vue-hr />
    <div class="btns">
      <button-edit
        @click="
          this.$router.push(PAGE_EDIT_OWNERSHIP + '/' + this.getOwnership.id)
        "
        >{{ EDIT_OWNERSHIP }}</button-edit
      >
      <button-simple
        @click="
          this.$router.push(
            PAGE_SHOW_ENTRY_OWNERSHIP + '/' + this.getOwnership.id
          )
        "
        >{{ SHOW_ENTRY_ABOUT_OWNERSHIP }}</button-simple
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { EDIT_OWNERSHIP, SHOW_ENTRY_ABOUT_OWNERSHIP } from "@/ui/namesButton";
import {
  PAGE_EDIT_OWNERSHIP,
  PAGE_SHOW_ENTRY_OWNERSHIP,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {},
      EDIT_OWNERSHIP,
      SHOW_ENTRY_ABOUT_OWNERSHIP,
      PAGE_SHOW_ENTRY_OWNERSHIP,
      PAGE_EDIT_OWNERSHIP,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
  },

  mounted() {
    this.fetchOwnership(this.$route.params.id).then(() => {
      this.ownership = this.getOwnership;
    });
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
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
.btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
