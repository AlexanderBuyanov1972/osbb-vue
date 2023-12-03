<template>
  <header-data-ownerships></header-data-ownerships>
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessagesRecord" />
  <div class="main">
    <line-header text="Создание записи" />
    <div class="search">
      <block-search-apartment-plus-minus
        @selectId="actionId"
        nameButton="Получить"
      />
      <block-search-full-name
        nameButton="Получить"
        @fullName="actionFullName"
      />
    </div>
    <button-simple @click="createTypeOwnership"
      >Типовое помещение</button-simple
    >
    <button-simple @click="createTypeOwner">Типовой собственник</button-simple>
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
            <div class="photo">
              <block-update-photo
                @photo="(data) => (record.owner.photo = data)"
                @isValidPhoto="(value) => (isValidPhoto = value)"
                :photoProps="record.owner.photo"
              />
            </div>
            <div class="share">
              <block-update-share
                @share="(data) => (record.share = data)"
                @isValidShare="(value) => (isValidShare = value)"
                :shareProps="record.share"
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
    <button-simple @click="showModal = true" :hidden="!isValid"
      >Сохранить</button-simple
    >
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите создать запись?"
      @close="showModal = false"
      @successfully="successfullyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_RECORD_GET, PAGE_OWNERSHIPS_GET } from "@/router/apiRouter";
import {
  generatePassport,
  generatePlaceWork,
  generatePhoto,
  generateVehicle,
} from "@/pages/_functions/generate";
import {
  generateOwner,
  generateOwnership,
} from "@/pages/_functions/generateRealDB";
export default {
  data() {
    return {
      generateOwner,
      generateOwnership,
      id: 0,
      fullName: "",
      record: {
        share: 0.0,
        ownership: {
          address: {},
        },
        owner: {
          passport: generatePassport(),
          placeWork: generatePlaceWork(),
          vehicle: generateVehicle(),
          photo: generatePhoto(),
        },
      },
      showModal: false,
      isValidOwnership: false,
      isValidAddress: false,
      isValidOwner: false,
      isValidPassport: false,
      isValidPlaceWork: false,
      isValidVehicle: false,
      isValidShare: false,
      isValidPhoto: false,
      PAGE_RECORD_GET,
      PAGE_OWNERSHIPS_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchAddressStart: "address/fetchAddressStart",
      createRecord: "record/createRecord",
      fetchOwnerByFullName: "owner/fetchOwnerByFullName",
      fetchOwnership: "ownership/fetchOwnership",
    }),

    successfullyAction() {
      this.createRecord(this.record).then(() => {
        const temp = this.getRecord;
        if (
          this.temp != undefined &&
          this.temp.owner != undefined &&
          this.temp.ownership != undefined
        ) {
          this.record = temp;
          this.$router.push(PAGE_RECORD_GET + "/" + this.record.ownership.id);
        }
      });
    },
    createTypeOwnership() {
      this.record.ownership = this.generateOwnership();
    },
    createTypeOwner() {
      this.record.owner = this.generateOwner();
      this.record.share = 1.0;
    },

    actionId(id) {
      this.id = id;
      this.fetchOwnership(this.id).then(() => {
        this.record.ownership = this.getOwnership;
      });
    },

    actionFullName(fullName) {
      this.fullName = fullName;
      this.fetchOwnerByFullName(this.fullName).then(() => {
        this.record.owner = this.getOwner;
      });
    },
  },
  mounted() {
    this.fetchAddressStart().then(() => {
      this.record.ownership.address = this.getAddressStart;
    });
  },
  computed: {
    ...mapGetters({
      getIsLoading: "record/getIsLoading",
      getMessagesRecord: "record/getMessages",
      getMessagesOwnership: "ownership/getMessages",
      getRecord: "record/getRecord",
      getOwnership: "ownership/getOwnership",
      getOwner: "owner/getOwner",
      getAddressStart: "address/getAddressStart",
    }),
    isValid() {
      return (
        this.isValidOwnership &&
        this.isValidAddress &&
        this.isValidOwner &&
        this.isValidPassport &&
        this.isValidPlaceWork &&
        this.isValidVehicle &&
        this.isValidPhoto &&
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
