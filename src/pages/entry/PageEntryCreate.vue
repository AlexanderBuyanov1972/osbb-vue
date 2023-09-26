<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Создание записи." />
    <div class="blocks">
      <div class="ownership">
        <block-create-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
        />
      </div>
      <div class="address">
        <block-create-address
          @address="(data) => (ownership.address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
        />
      </div>

      <div class="list">
        <div class="block1">
          <div class="owner">
            <block-create-owner
              @owner="(data) => (ownership.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
            />
          </div>
          <div class="passport">
            <block-create-passport
              @passport="(data) => (ownership.owner.passport = data)"
              @isValidPassport="(value) => (isValidPassport = value)"
            />
          </div>
        </div>
        <div class="block2">
          <div class="placeWork">
            <block-create-place-work
              @placeWork="(data) => (ownership.owner.placeWork = data)"
              @isValidPlaceWork="(value) => (isValidPlaceWork = value)"
            />
          </div>
          <div class="vehicle">
            <block-create-vehicle
              @vehicle="(data) => (ownership.owner.vehicle = data)"
              @isValidVehicle="(value) => (isValidVehicle = value)"
            />
          </div>
        </div>
      </div>
    </div>
    <vue-hr />
    <button-back />
    <button-simple @click="sendOwnership" :hidden="!isValid">{{
      SEND_TO_SERVER
    }}</button-simple>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { SEND_TO_SERVER } from "@/ui/namesButton";
import { PAGE_ENTRY_GET } from "@/router/apiRouter";
import {
  generatePassport,
  generatePlaceWork,
  generatePhoto,
  generateVehicle,
} from "../_functions/generate";
export default {
  data() {
    return {
      ownership: {
        owner: {
          passport: generatePassport(),
          photo: generatePhoto(),
          placeWork: generatePlaceWork(),
          vehicle: generateVehicle(),
        },
      },
      isValidOwnership: false,
      isValidAddress: false,
      isValidOwner: false,
      isValidPassport: false,
      isValidPlaceWork: false,
      isValidVehicle: false,
      SEND_TO_SERVER,
      PAGE_ENTRY_GET,
    };
  },
  methods: {
    ...mapActions({
      createOwnership: "ownership/createOwnership",
    }),
    sendOwnership() {
      console.log(this.ownership);
      // this.createOwnership(this.ownership).then(() => {
      //   this.$router.push(PAGE_ENTRY_GET + "/" + this.ownership.id);
      // });
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "ownership/getIsLoading",
      getMessages: "ownership/getMessages",
    }),
    isValid() {
      return (
        this.isValidOwnership &&
        this.isValidAddress &&
        this.isValidOwner &&
        this.isValidPassport &&
        this.isValidPlaceWork &&
        this.isValidVehicle
      );
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
.blocks {
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.block1,
.block2 {
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 0px 0px 10px 0px;
  width: 97%;
}
.passport,
.owner {
  margin: 5px;
  width: 45%;
}
.ownership,
.address,
.vehicle,
.placeWork {
  margin: 5px;
  width: 40%;
}
hr {
  margin: 25px 0px;
  color: teal;
}
</style>

<!-- <template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Создание записи о собственности" />
    <div class="blocks">
      <div class="ownership">
        <block-create-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
        />
      </div>
      <div class="address">
        <block-create-address
          @address="(data) => (ownership.address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
        />
      </div>

      <div class="list">
        <div class="block1">
          <div class="owner">
            <block-create-owner
              @owner="(data) => (ownership.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
            />
          </div>
          <div class="passport">
            <block-create-passport
              @passport="(data) => (ownership.owner.passport = data)"
              @isValidPassport="(value) => (isValidPassport = value)"
            />
          </div>
        </div>

        <div class="block2">
          <div class="placeWork">
            <block-create-place-work
              @placeWork="(data) => (ownership.owner.placeWork = data)"
              @isValidPlaceWork="(value) => (isValidPlaceWork = value)"
            />
          </div>
          <div class="vehicle">
            <block-create-vehicle
              @vehicle="(data) => (ownership.owner.vehicle = data)"
              @isValidVehicle="(value) => (isValidVehicle = value)"
            />
          </div>
        </div>
      </div>
    </div>
    <vue-hr />
    <button-back />
    <button-simple @click="sendOwnership" :hidden="!isValid">{{
      SEND_TO_SERVER
    }}</button-simple>
  </div>
</template>
<script>
import { SEND_TO_SERVER } from "@/ui/namesButton";
import { PAGE_ENTRY_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ownership: {},
      isValidOwnership: false,
      isValidOwner: false,
      isValidAddress: false,
      isValidPassport: false,
      SEND_TO_SERVER,
      PAGE_ENTRY_GET,
    };
  },
  methods: {
    sendOwnership() {
      console.log(this.ownership);
      // this.createOwnership(this.ownership).then(() => {
      //   this.$router.push(PAGE_ENTRY_GET + "/" + this.getOwnership.id);
      // });
    },
    ...mapActions({
      createOwnership: "ownership/createOwnership",
    }),
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
    isValid() {
      return (
        this.isValidOwnership &&
        this.isValidOwner &&
        this.isValidAddress &&
        this.isValidPassport &&
        this.isValidPlaceWork &&
        this.isValidVehicle
      );
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
.blocks {
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.block1,
.block2 {
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 0px 0px 10px 0px;
  width: 97%;
}
.passport,
.owner {
  margin: 5px;
  width: 45%;
}
.ownership,
.address,
.vehicle,
.placeWork {
  margin: 5px;
  width: 40%;
}
hr {
  margin: 25px 0px;
  color: teal;
}
</style> -->
