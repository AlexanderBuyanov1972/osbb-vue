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
    <line-header text="Редактирование записи о собственности." />
    <div class="blocks">
      <div class="block1">
        <block-edit-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
        />
      </div>

      <div class="block3">
        <block-edit-address
          @address="(data) => (address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
        />
      </div>

      <div class="column">
        <div class="list" v-for="one in owners" :key="one.id">
          <div class="block4">
            <block-edit-owner
              @owner="(data) => (one.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
              :id="flag ? 0 : one.id"
            />
          </div>
          <div class="block2">
            <block-edit-passport
              @passport="(data) => (one.passport = data)"
              @isValidPassport="(value) => (isValidPassport = value)"
              :id="flag ? 0 : one.id"
            />
          </div>
          <button-delete
            v-show="this.owners.length > 1"
            @click="() => removeOwner(one.id)"
            >{{ DELETE }}</button-delete
          >
        </div>
      </div>
    </div>
    <vue-hr />
    <button-back
      @click="
        this.$router.push(PAGE_SHOW_ENTRY_OWNERSHIP + '/' + this.ownership.id)
      "
    />
    <button-simple
      @click="sendOwnership"
      :hidden="
        !(isValidOwnership && isValidAddress && isValidOwner && isValidPassport)
      "
      >{{ SEND_TO_SERVER }}</button-simple
    >
    <button-create @click="plusOwner">{{ CREATE_OWNER }}</button-create>
    <button-delete @click="minusOwner">{{ DELETE_OWNER }}</button-delete>
  </div>
</template>
<script>
import { mergingTwoArraysAndRemovingIdenticalMessages } from "@/pages/functions";
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  DELETE,
  BACK,
  DELETE_OWNER,
  CREATE_OWNER,
  SEND_TO_SERVER,
} from "@/ui/namesButton";
import { PAGE_SHOW_ENTRY_OWNERSHIP } from "@/router/apiRouter";
export default {
  data() {
    return {
      size: 0,
      flag: false,
      ownership: {},
      owners: [],
      address: {},
      isValidOwnership: false,
      isValidAddress: false,
      isValidOwner: false,
      isValidPassport: false,
      mergingTwoArraysAndRemovingIdenticalMessages,
      DELETE,
      BACK,
      DELETE_OWNER,
      SEND_TO_SERVER,
      CREATE_OWNER,
      PAGE_SHOW_ENTRY_OWNERSHIP,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
      updateOwnership: "ownership/updateOwnership",
      fetchCountOwners: "owner/fetchCountOwners",
      deleteOwner: "owner/deleteOwner",
      fetchCountOwnerships: "ownership/fetchCountRooms",
    }),
    sendOwnership() {
      this.ownership.address = this.address;
      this.ownership.owners = this.mapListOwners();
      this.updateOwnership(this.ownership).then(() => {
        this.$router.push(PAGE_SHOW_ENTRY_OWNERSHIP + "/" + this.ownership.id);
      });
    },
    plusOwner() {
      this.flag = true;
      this.owners.push({ owner: { id: 0, password: { id: 0 } } });
    },
    minusOwner() {
      this.flag = false;
      if (this.owners.length > this.size) {
        this.owners.length -= 1;
      }
    },
    mapListOwners() {
      let result = [];
      let count = this.countOwners + 1;
      this.owners.forEach((el) => {
        let objectOwner = el.owner;
        let objectPassport = el.passport;
        if (objectOwner.id == undefined) {
          objectOwner.id = count;
          objectPassport.id = count;
          count++;
        }
        objectOwner.passport = objectPassport;
        result.push(objectOwner);
      });
      return result;
    },
    removeOwner(id) {
      this.deleteOwner(id).then(() =>
        this.fetchOwnership(this.$route.params.id).then(
          () => (this.ownership = this.getOwnership)
        )
      );
    },
  },
  mounted() {
    this.fetchOwnership(this.$route.params.id).then(() => {
      this.fetchCountOwners();
      this.fetchCountOwnerships();
      this.owners = this.getOwnership.owners;
      this.size = this.owners.length;
      this.ownership = this.getOwnership;
      this.address = this.getOwnership.address;
    });
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      countOwnerships: "ownership/getCountOwnerships",
      countOwners: "owner/getCountOwners",
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
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid blueviolet;
  width: 100%;
  margin-top: 10px;
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
hr {
  margin: 25px 0px;
  color: teal;
}
</style>
