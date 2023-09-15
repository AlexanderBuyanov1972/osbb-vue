<template>
  <div class="main">
    <header-messages :messages="getMessages" />
    <line-header text="Редактирование записи о помещении." />
    <div class="blocks">
      <div class="ownership">
        <block-edit-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
        />
      </div>
      <div class="address">
        <block-edit-address
          @address="(data) => (address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
        />
      </div>
    </div>
    <vue-hr />
    <button-back @click="getToPageOwnership" />
    <button-simple
      @click="sendOwnership"
      :hidden="!(isValidOwnership && isValidAddress)"
      >{{ SEND_TO_SERVER }}</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { SEND_TO_SERVER } from "@/ui/namesButton";
import { PAGE_SHOW_OWNERSHIP } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      isValidOwnership: false,
      isValidAddress: false,
      SEND_TO_SERVER,
      PAGE_SHOW_OWNERSHIP,
    };
  },
  methods: {
    ...mapActions({
      updateOwnership: "ownership/updateOwnership",
    }),
    sendOwnership() {
      this.ownership.address = this.address;
      this.updateOwnership(this.ownership).then(() => {
        this.getToPageOwnership();
      });
    },
    getToPageOwnership() {
      this.$router.push(PAGE_SHOW_OWNERSHIP + "/" + this.$route.params.id);
    },
  },
  computed: {
    ...mapGetters({
      getMessages: "ownership/getMessages",
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
.blocks {
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 2px solid blueviolet;
  padding: 10px;
}
.ownership {
  margin-right: 10px;
  width: 50%;
}
.address {
  margin-left: 10px;
  width: 50%;
}
</style>
