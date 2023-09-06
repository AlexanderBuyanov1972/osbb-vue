<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <div class="blocks">
      <div class="block1">
        <block-create-owner
          @owner="(data) => (owner = data)"
          :arrayGender="arrayGender"
          :arrayFamilyStatus="arrayFamilyStatus"
        />
      </div>
      <div class="block2">
        <block-create-password @password="(data) => (password = data)" />
      </div>
      <div class="block3">
        <block-create-ownership
          @ownership="(data) => (ownership = data)"
          :arrayDocumentConfirmsRightOwn="arrayDocumentConfirmsRightOwn"
          :arrayTypeRoom="arrayTypeRoom"
          :arrayLoggia="arrayLoggia"
        />
      </div>
      <div class="block4">
        <block-create-address @address="(data) => (address = data)" />
      </div>
    </div>
    <hr class="teal" />
    <button-simple class="btn" @click="sendOwner"
      >Создать собственника</button-simple
    >
  </div>
</template>
<script>
import {
  arrayGender,
  arrayTypeRoom,
  arrayDocumentConfirmsRightOwn,
  arrayLoggia,
} from "@/pages/arraysOfData";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      owner: {},
      ownership: {},
      password: {},
      address: {},

      arrayGender,
      arrayDocumentConfirmsRightOwn,
      arrayTypeRoom,
      arrayLoggia,
    };
  },
  methods: {
    ...mapActions({
      createOwner: "owner/createOwner",
      fetchCountOwners: "owner/fetchCountOwners",
      fetchCountOwnerships: "ownership/fetchCountRooms",
    }),
    sendOwner() {
      const ownershipID = this.countOwnerships + 1;
      const ownerID = this.countOwners + 1;
      this.ownership.address = this.address;
      this.owner.ownerships = [this.ownership];
      this.owner.password = this.password;
      console.log(this.owner);
      // this.createOwner(this.owner);
    },
  },
  mounted() {
    this.fetchCountOwners();
    this.fetchCountOwnerships();
  },
  computed: {
    ...mapGetters({
      countOwners: "owner/getCountOwners",
      countOwnerships: "ownership/getCountOwnerships",
      getMessages: "owner/getMessages",
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
.block1,
.block2,
.block3,
.block4 {
  margin: 10px;
  width: 25%;
}
.teal {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
</style>
