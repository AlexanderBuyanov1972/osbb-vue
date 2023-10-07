<template>
  <header-data-ownerships
    @id="(value) => (id = value)"
  ></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header
      :text="
        'Объект недвижимости - квартира № ' + this.ownership.address.apartment
      "
    />
    <line-address :address="this.ownership.address" />
    <block-get-ownership :ownership="ownership" />
    <vue-hr />
    <button-back />

    <button-edit
      @click="
        this.$router.push(PAGE_OWNERSHIP_UPDATE + '/' + this.getOwnership.id)
      "
      >{{ OWNERSHIP_UPDATE }}
    </button-edit>
    <button-simple
      @click="this.$router.push(PAGE_ENTRY_GET + '/' + this.getOwnership.id)"
      >Смотреть все записи по помещению</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { ENTRY_GET, OWNERSHIP_UPDATE } from "@/ui/namesButton";
import { PAGE_ENTRY_GET, PAGE_OWNERSHIP_UPDATE } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {
        address: {
          apartment: "",
        },
      },
      ENTRY_GET,
      OWNERSHIP_UPDATE,
      PAGE_ENTRY_GET,
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
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
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
