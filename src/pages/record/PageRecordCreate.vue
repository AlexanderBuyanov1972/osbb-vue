<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Создание записи." />
    <div class="">
      <div class="title">Введите № помещения :</div>
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '65px' }"
      />
      <button-delete v-show="this.checkApartment" @click="fetchOwnership"
        >{{ GET }}
      </button-delete>
      <div class="title">Введите Ф.И.О. :</div>
      <input-simple
        class="input"
        v-model="fullName"
        :style="{ width: '350px' }"
      />
      <button-delete v-show="this.checkFullName" @click="fetchOwner"
        >{{ GET }}
      </button-delete>
    </div>

    <div class="blocks">
      <div class="ownership_address">
        <div class="ownership">
          <block-create-ownership
            @ownership="(data) => (record.ownership = data)"
            @isValidOwnership="(value) => (isValidOwnership = value)"
            :ownershipProps="record.ownership"
          />
        </div>
        <div class="address">
          <block-create-address
            @address="(data) => (record.ownership.address = data)"
            @isValidAddress="(value) => (isValidAddress = value)"
            :addressProps="record.ownership.address"
          />
        </div>
      </div>

      <div class="owner_other">
        <div class="owner_passport_share">
          <div class="owner">
            <block-create-owner
              @owner="(data) => (record.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
              :ownerProps="record.owner"
            />
          </div>
          <div class="passport_share">
            <div class="passport">
              <block-create-passport
                @passport="(data) => (record.owner.passport = data)"
                @isValidPassport="(value) => (isValidPassport = value)"
                :passportProps="record.owner.passport"
              />
            </div>
            <div class="share">
              <block-update-share
                @share="(data) => (share.value = data)"
                @isValidShare="(value) => (isValidShare = value)"
                :shareProps="share.value"
              />
            </div>
          </div>
        </div>
        <div class="placeWork_vehicle">
          <div class="placeWork">
            <block-create-place-work
              @placeWork="(data) => (record.owner.placeWork = data)"
              @isValidPlaceWork="(value) => (isValidPlaceWork = value)"
              :placeWorkProps="record.owner.placeWork"
            />
          </div>
          <div class="vehicle">
            <block-create-vehicle
              @vehicle="(data) => (record.owner.vehicle = data)"
              @isValidVehicle="(value) => (isValidVehicle = value)"
              :vehicleProps="record.owner.vehicle"
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
      apartment: "",
      fullName: "",
      record: {
        ownership: {
          address: {},
        },
        owner: {
          passport: generatePassport(),
          placeWork: generatePlaceWork(),
          vehicle: generateVehicle(),
        },
      },
      share: {},
      isValidOwnership: false,
      isValidAddress: false,
      isValidOwner: false,
      isValidPassport: false,
      isValidPlaceWork: false,
      isValidVehicle: false,
      isValidShare: false,
      SEND_TO_SERVER,
      GET,
      PAGE_ENTRY_GET,
    };
  },
  methods: {
    ...mapActions({
      createShare: "share/createShare",
      createOwner: "owner/createOwner",
      createRecord: "record/createRecord",
      fetchOwnershipByApartment: "ownership/fetchOwnershipByApartment",
      fetchOwnerByFullName: "owner/fetchOwnerByFullName",
    }),
    sendOwnership() {
      this.record.owner.photo = generatePhoto();
      this.createOwner(this.record.owner).then(() => {
        this.record.owner = this.getOwner;
        this.share.owner = this.getOwner;
        this.share.ownership = this.getOwnership;
        this.createShare(this.share).then(() => {
          this.createRecord(this.record).then(() => {
            this.$router.push(PAGE_ENTRY_GET + "/" + this.getOwnership.id);
          });
        });
      });
    },
    fetchOwnership() {
      this.fetchOwnershipByApartment(this.apartment).then(() => {
        this.record.ownership = this.getOwnership;
      });
    },
    fetchOwner() {
      this.fetchOwnerByFullName(this.fullName).then(() => {
        this.record.owner = this.getOwner;
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
      getOwner: "owner/getOwner",
    }),
    isValid() {
      return (
        this.isValidOwnership &&
        this.isValidAddress &&
        this.isValidOwner &&
        this.isValidPassport &&
        this.isValidPlaceWork &&
        this.isValidVehicle &&
        this.isValidShare
      );
    },
    checkApartment() {
      return this.apartment > 0 && this.apartment < 85;
    },
    checkFullName() {
      return this.fullName.length > 3;
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
.ownership_address,
.owner_other {
  width: 48%;
}
.ownership_address,
.owner_passport_share {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.ownership,
.address,
.vehicle,
.owner,
.ownership_address,
.placeWork,
.passport_share {
  width: 48%;
}
.owner_other {
  display: flex;
  flex-direction: column;
}
.placeWork_vehicle {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
