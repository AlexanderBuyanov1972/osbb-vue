<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Создание записи." />
    <div class="search">
      <div class="title">Введите № помещения :</div>
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '65px' }"
      />
      <button-delete :hidden="!this.checkApartment" @click="fetchRoom"
        >{{ GET }}
      </button-delete>
    </div>
    <div class="blocks">
      <div class="ownership">
        <block-create-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
          :room="room"
        />
      </div>
      <div class="address">
        <block-create-address
          @address="(data) => (ownership.address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
          :room="room"
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
import { SEND_TO_SERVER, GET } from "@/ui/namesButton";
import { PAGE_OWNERSHIPS_GET } from "@/router/apiRouter";
import {
  generatePassport,
  generatePlaceWork,
  generatePhoto,
  generateVehicle,
} from "../_functions/generate";
export default {
  data() {
    return {
      apartment: "",
      room: {},
      ownership: {
        owner: {
          passport: generatePassport(),
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
      GET,
      PAGE_OWNERSHIPS_GET,
    };
  },
  methods: {
    ...mapActions({
      createOwnership: "ownership/createOwnership",
      fetchRoomByApartment: "ownership/fetchRoomByApartment",
    }),
    sendOwnership() {
      this.ownership.owner.photo = generatePhoto();
      this.createOwnership(this.ownership).then(() => {
        this.$router.push(PAGE_OWNERSHIPS_GET);
      });
    },
    fetchRoom() {
      this.fetchRoomByApartment(this.apartment).then(() => {
        this.room = this.getRoom;
      });
    },
  },
  update() {
    this.fetchRoom();
  },
  computed: {
    ...mapGetters({
      getIsLoading: "ownership/getIsLoading",
      getMessages: "ownership/getMessages",
      getOwnership: "ownership/getOwnership",
      getRoom: "ownership/getRoom",
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
    checkApartment() {
      return this.apartment > 0 && this.apartment < 85;
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
.search {
  display: flex;
  align-items: center;
}
.title,
.input {
  margin: 5px 5px 5px 0px;
  border-color: brown;
  color: brown;
}
</style>
