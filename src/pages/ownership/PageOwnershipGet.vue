<template>
  <header-data-ownerships
    @id="(value) => (id = value)"
  ></header-data-ownerships>
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
    <block-get-ownership :ownership="ownership" />
    <vue-hr />
    <button-back />

    <button-simple
      @click="this.$router.push(PAGE_ENTRY_GET + '/' + this.getOwnership.id)"
      >{{ ENTRY_GET }}</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { ENTRY_GET } from "@/ui/namesButton";
import { PAGE_ENTRY_GET } from "@/router/apiRouter";
export default {
  data() {
    return {
      id: 0,
      ownership: {},
      ENTRY_GET,
      PAGE_ENTRY_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
  },

  updated() {
    this.change;
  },
  mounted() {
    this.change;
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
    change() {
      let id =
        this.id == undefined || this.id == 0 ? this.$route.params.id : this.id;
      return this.fetchOwnership(id).then(() => {
        this.ownership = this.getOwnership;
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
</style>
