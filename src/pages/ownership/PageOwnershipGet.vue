<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <line-header
      :text="'Объект недвижимости - квартира № ' + ownership.address.apartment"
    />
    <line-address :address="ownership.address" />
    <block-get-ownership :ownership="ownership" />
    <vue-hr />
    <button-back />

    <button-simple
      @click="this.$router.push(PAGE_OWNERSHIP_UPDATE + '/' + ownership.id)"
      >Обновить данные о помещении
    </button-simple>
    <button-simple
      @click="this.$router.push(PAGE_RECORD_GET + '/' + this.ownership.id)"
      >Смотреть все записи по помещению</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_RECORD_GET, PAGE_OWNERSHIP_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {
        address: {},
      },
      PAGE_RECORD_GET,
      PAGE_OWNERSHIP_UPDATE,
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
    }),
    change() {
      this.fetchOwnership(this.$route.params.id).then(() => {
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
