<template>
  <div class="main">
    <header-messages
      :messages="
        this.mergingTwoArraysAndRemovingIdenticalMessages(
          getMessagesOwnership,
          getMessagesOwner
        )
      "
    />
    <line-header text="Создание записи о собственности" />
    <div class="blocks">
      <div class="block1">
        <block-create-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
        />
      </div>
      <div class="block3">
        <block-create-address
          @address="(data) => (address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
        />
      </div>
      <!-- ------------------------------------------------------------------------ -->
      <div class="column">
        <div class="list" v-for="one in owners" :key="one.id">
          <div class="block4">
            <block-create-owner
              @owner="(data) => (one.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
            />
          </div>
          <div class="block2">
            <block-create-passport
              @passport="(data) => (one.passport = data)"
              @isValidPassport="(value) => (isValidPassport = value)"
            />
          </div>
        </div>
      </div>
    </div>
    <vue-hr />
    <button-simple
      @click="sendOwnership"
      :hidden="
        !(isValidOwnership && isValidOwner && isValidAddress && isValidPassport)
      "
      >{{ SEND_TO_SERVER }}</button-simple
    >
    <button-create @click="plusOwnership">{{ CREATE_OWNER }}</button-create>
    <button-delete @click="minusOwnership">{{ DELETE_OWNER }}</button-delete>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { mergingTwoArraysAndRemovingIdenticalMessages } from "@/pages/functions/functions";
import { SEND_TO_SERVER, CREATE_OWNER, DELETE_OWNER } from "@/ui/namesButton";
import { PAGE_SHOW_OWNERSHIP } from "@/router/apiRouter";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      owners: [{}],

      isValidOwnership: false,
      isValidOwner: false,
      isValidAddress: false,
      isValidPassport: false,

      SEND_TO_SERVER,
      CREATE_OWNER,
      DELETE_OWNER,
      PAGE_SHOW_OWNERSHIP,

      mergingTwoArraysAndRemovingIdenticalMessages,
    };
  },
  methods: {
    sendOwnership() {
      this.ownership.address = this.address;
      this.ownership.owners = this.mapListOwners();
      this.createOwnership(this.ownership).then(() => {
        this.$router.push(PAGE_SHOW_OWNERSHIP + "/" + this.getOwnership.id);
      });
    },
    plusOwnership() {
      this.owners.push({});
    },
    minusOwnership() {
      if (this.owners.length > 1) {
        this.owners.length -= 1;
      }
    },
    mapListOwners(id) {
      let result = [];
      this.owners.forEach((el) => {
        let objectOwner = el.owner;
        let objectPassport = el.passport;
        objectOwner.passport = objectPassport;
        result.push(objectOwner);
      });
      return result;
    },
    ...mapActions({
      createOwnership: "ownership/createOwnership",
      fetchCountOwners: "owner/fetchCountOwners",
      fetchCountOwnerships: "ownership/fetchCountRooms",
    }),
  },
  mounted() {
    this.fetchCountOwners();
    this.fetchCountOwnerships();
  },
  computed: {
    ...mapGetters({
      countOwners: "owner/getCountOwners",
      getOwnership: "owner/getOwnership",
      countOwnerships: "ownership/getCountOwnerships",
      getMessagesOwnership: "ownership/getMessages",
      getMessagesOwner: "owner/getMessages",
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
  color: red;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  margin-right: 10px;
}
.block2,
.block4 {
  margin: 10px;
  width: 50%;
}
.block1,
.block3 {
  margin: 10px;
  width: 25%;
}
</style>
@/pages/functions/functions
