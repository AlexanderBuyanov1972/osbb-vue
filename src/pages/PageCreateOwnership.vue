<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <div class="header">Создание записи о помещении.</div>
    <div class="blocks">
      <div class="block1">
        <block-create-ownership
          @ownership="(data) => (ownership = data)"
          :arrayDocumentConfirmsRightOwn="arrayDocumentConfirmsRightOwn"
          :arrayTypeRoom="arrayTypeRoom"
          :arrayLoggia="arrayLoggia"
          :arrayNumberRooms="arrayNumberRooms"
          @validOwnership="(value) => (validOwnership = value)"
        />
      </div>
      <div class="block3">
        <block-create-address
          @address="(data) => (address = data)"
          @validAddress="(value) => (validAddress = value)"
        />
      </div>
      <!-- ------------------------------------------------------------------------ -->
      <div class="column">
        <div class="list" v-for="one in owners">
          <div class="block4">
            <block-create-owner
              @owner="(data) => (one.owner = data)"
              :arrayGender="arrayGender"
              :arrayFamilyStatus="arrayFamilyStatus"
              @validOwner="(value) => (validOwner = value)"
            />
          </div>
          <div class="block2">
            <block-create-password
              @password="(data) => (one.owner.password = data)"
              @validPassword="(value) => (validPassword = value)"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <hr class="teal" />
    <button-simple
      class="btn"
      @click="sendOwnership"
      :hidden="!(validOwnership && validOwner && validAddress && validPassword)"
      >Послать на сервер.</button-simple
    >
    <button-simple class="btn" @click="plusOwnership"
      >Добавить собственника</button-simple
    >
    <button-simple class="btn" @click="minusOwnership"
      >Убавить собственника</button-simple
    >
  </div>
</template>
<script>
import {
  arrayGender,
  arrayTypeRoom,
  arrayDocumentConfirmsRightOwn,
  arrayLoggia,
  arrayFamilyStatus,
  arrayNumberRooms,
} from "@/pages/arraysOfData";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      owners: [{}],
      
      arrayGender,
      arrayDocumentConfirmsRightOwn,
      arrayTypeRoom,
      arrayLoggia,
      arrayFamilyStatus,
      arrayNumberRooms,
      
      validOwnership: false,
      validOwner: false,
      validAddress: false,
      validPassword: false,
    };
  },
  methods: {
    sendOwnership() {
      const ownershipID = this.countOwnerships + 1;
      this.address.id = ownershipID;
      this.ownership.id = ownershipID;
      this.ownership.address = this.address;

      this.ownership.owners = this.mapListOwners(this.countOwners + 1);
      console.log(this.ownership);
      // this.createOwnership(this.ownership);
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
        let object = el.owner;
        object.id = id;
        object.password.id = id;
        result.push(object);
        id += 1;
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
      countOwnerships: "ownership/getCountOwnerships",
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
.teal {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
.header{
  color: brown;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8em;
}

</style>
