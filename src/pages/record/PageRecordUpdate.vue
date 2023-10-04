<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Редактирование записи." />
    <!-- search -------------->
    <div class="search">
      <div class="title">Введите № помещения :</div>
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '65px' }"
      />
      <div class="title">Введите Ф.И.О. :</div>
      <input-simple
        class="input"
        v-model="fullName"
        :style="{ width: '350px' }"
      />
      <button-delete :hidden="!this.checkInputs" @click="fetchRecord"
        >{{ GET }}
      </button-delete>
    </div>
    <div class="blocks">
      <div class="ownership_address">
        <div class="ownership">
          <block-update-ownership
            @ownership="(data) => (record.ownership = data)"
            @isValidOwnership="(value) => (isValidOwnership = value)"
            :ownershipProps="record.ownership"
          />
        </div>
        <div class="address">
          <block-update-address
            @address="(data) => (record.ownership.address = data)"
            @isValidAddress="(value) => (isValidAddress = value)"
            :addressProps="record.ownership.address"
          />
        </div>
      </div>

      <div class="owner_other">
        <div class="owner_passport_share">
          <div class="owner">
            <block-update-owner
              @owner="(data) => (record.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
              :ownerProps="record.owner"
            />
          </div>
          <div class="passport_share">
            <div class="passport">
              <block-update-passport
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
            <block-update-place-work
              @placeWork="(data) => (record.owner.placeWork = data)"
              @isValidPlaceWork="(value) => (isValidPlaceWork = value)"
              :placeWorkProps="record.owner.placeWork"
            />
          </div>
          <div class="vehicle">
            <block-update-vehicle
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
          passport: {},
          placeWork: {},
          vehicle: {},
        },
      },
      share: { value: 0 },
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
      fetchRecordByApartmentAndFullName:
        "record/fetchRecordByApartmentAndFullName",
      fecthShareByApartmentAndFullName:
        "share/fecthShareByApartmentAndFullName",
      updateOwner: "owner/updateOwner",
      updateOwnership: "ownership/updateOwnership",
      updateRecord: "record/updateRecord",
      updateShare: "share/updateShare",
    }),
    sendOwnership() {
      this.updateShare(this.share);
      this.updateOwner(this.record.owner).then(() => {
        this.updateOwnership(this.record.ownership).then(() => {
          this.updateRecord(this.record).then(() => {
            this.$router.push(PAGE_ENTRY_GET + "/" + this.record.ownership.id);
          });
        });
      });
    },
    fetchRecord() {
      this.fetchRecordByApartmentAndFullName({
        apartment: this.apartment,
        fullName: this.fullName,
      }).then(() => {
        this.record = this.getRecord;
        this.fecthShareByApartmentAndFullName({
          apartment: this.apartment,
          fullName: this.fullName,
        }).then(() => {
          this.share = this.getShare;
        });
      });
    },
  },
  update() {
    this.fetchRecord();
  },
  computed: {
    ...mapGetters({
      getIsLoading: "record/getIsLoading",
      getMessages: "record/getMessages",
      getRecord: "record/getRecord",
      getShare: "share/getShare",
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
    checkInputs() {
      return (
        this.apartment > 0 && this.apartment < 85 && this.fullName.length > 3
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
  margin: 5px 25px 5px 0px;
  border-color: brown;
  color: brown;
}
</style>
