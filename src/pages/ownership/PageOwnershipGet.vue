<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />

    <div class="block" v-for="ownership in ownerships" :key="ownership.id">
      <line-header
        :text="
          'Объект недвижимости - квартира № ' + ownership.address.apartment
        "
      />
      <line-address :address="ownership.address" />
      <block-get-ownership :ownership="ownership" />
      <vue-hr />
      <button-back />

      <button-simple
        @click="
          this.$router.push(PAGE_OWNERSHIP_UPDATE + '/' + ownership.id)
        "
        >Обновить данные о помещении
      </button-simple>
      <button-simple
        @click="this.$router.push(PAGE_ENTRY_GET + '/' + this.ownership.id)"
        >Смотреть все записи по помещению</button-simple
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_ENTRY_GET, PAGE_OWNERSHIP_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownerships: [],
      PAGE_ENTRY_GET,
      PAGE_OWNERSHIP_UPDATE,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnershipsByApartment: "ownership/fetchOwnershipsByApartment",
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
      getOwnerships: "ownership/getOwnerships",
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
    change() {
      this.fetchOwnershipsByApartment(this.$route.params.apartment).then(() => {
        this.ownerships = this.getOwnerships;
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
