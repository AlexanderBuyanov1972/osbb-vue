<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <line-header text="Редактирование собственности." />
    <div class="blocks">
      <div class="ownership">
        <block-update-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
          :ownershipProps="ownership"
        />
      </div>
      <div class="address">
        <block-update-address
          @address="(data) => (ownership.address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
          :addressProps="address"
        />
      </div>
    </div>
    <vue-hr />
    <button-back />
    <button-simple @click="sendToServer" :hidden="!isValid">
      Сохранить
    </button-simple>
    <dialog-window :show="showModal">
      <modal-action
        message="Вы действительно хотите обновить помещение?"
        @close="showModal = false"
        @successfully="successfullyAction"
      ></modal-action>
    </dialog-window>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_OWNERSHIP_GET } from "@/router/apiRouter";
export default {
  data() {
    return {
      showModal: false,
      ownership: {},
      address: {},
      isValidOwnership: false,
      isValidAddress: false,
      PAGE_OWNERSHIP_GET,
    };
  },
  methods: {
    ...mapActions({
      updateOwnership: "ownership/updateOwnership",
      fetchOwnership: "ownership/fetchOwnership",
    }),
    sendToServer() {
      this.showModal = true;
    },
    successfullyAction() {
      this.updateOwnership(this.ownership).then(() => {
        this.$router.push(PAGE_OWNERSHIP_GET + "/" + this.getOwnership.id);
      });
    },
    getOwnershipForEdit() {
      this.fetchOwnership(this.$route.params.id).then(() => {
        this.ownership = this.getOwnership;
        this.address = this.getOwnership.address;
      });
    },
  },
  update() {
    this.fetchOwnership();
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
    }),
    isValid() {
      return this.isValidOwnership && this.isValidAddress;
    },
  },
  updated() {
    this.ownership = this.getOwnership;
  },
  mounted() {
    this.getOwnershipForEdit();
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.ownership,
.address {
  width: 48%;
}
hr {
  margin: 25px 0px;
  color: teal;
}
</style>
