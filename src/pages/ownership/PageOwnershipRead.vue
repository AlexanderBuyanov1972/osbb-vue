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
    <block-read-ownership :ownership="ownership" />
    <vue-hr />
    <div class="btns">
      <button-edit
        @click="
          this.$router.push(PAGE_ENTRY_UPDATE + '/' + this.getOwnership.id)
        "
        >{{ ENTRY_UPDATE }}</button-edit
      >
      <button-simple
        @click="this.$router.push(PAGE_ENTRY_READ + '/' + this.getOwnership.id)"
        >{{ ENTRY_READ }}</button-simple
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { ENTRY_UPDATE, ENTRY_READ } from "@/ui/namesButton";
import { PAGE_ENTRY_UPDATE, PAGE_ENTRY_READ } from "@/router/apiRouter";
export default {
  data() {
    return {
      id: 0,
      ownership: {},
      ENTRY_UPDATE,
      ENTRY_READ,
      PAGE_ENTRY_UPDATE,
      PAGE_ENTRY_READ,
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
.btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
