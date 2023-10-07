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
        :style="{ width: '70px' }"
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
    <button-create @click="createTypeOwnership"
      >Типовое помещение</button-create
    >
    <button-create @click="createTypeOwner">Типовой собственник</button-create>
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
    <button-simple @click="sendToServer" :hidden="!isValid">{{
      SEND_TO_SERVER
    }}</button-simple>
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите создать запись?"
      @close="showModal = false"
      @successfuly="successfulyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { SEND_TO_SERVER, GET } from "@/ui/namesButton";
import { PAGE_ENTRY_GET, PAGE_OWNERSHIPS_GET } from "@/router/apiRouter";
import {
  generatePassport,
  generatePlaceWork,
  generatePhoto,
  generateVehicle,
} from "../_functions/generate";
import {
  generateOwner,
  generateOwnership,
} from "@/pages/_functions/generateRealDB";
export default {
  data() {
    return {
      generateOwner,
      generateOwnership,
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
      showModal: false,
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
      PAGE_OWNERSHIPS_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchAddressStart: "address/fetchAddressStart",
      createShare: "share/createShare",
      createOwner: "owner/createOwner",
      createOwnership: "ownership/createOwnership",
      createRecord: "record/createRecord",
      fetchOwnershipByApartment: "ownership/fetchOwnershipByApartment",
      fetchOwnerByFullName: "owner/fetchOwnerByFullName",
    }),
    sendToServer() {
      this.showModal = true;
    },
    successfulyAction() {
      // цепляем фото к собственнику
      this.record.owner.photo = generatePhoto();
      // создаём собственника в базе данных
      this.createOwner(this.record.owner).then(() => {
        // цепляем собственника к записи
        this.record.owner = this.getOwner;
        // создаём помещение в базе данных
        this.createOwnership(this.record.ownership).then(() => {
          // цепляем помещение на запись
          this.record.ownership = this.getOwnership;
          // цепляем собственника на долю
          this.share.owner = this.getOwner;
          // цепляем помещение на долю
          this.share.ownership = this.getOwnership;
          //создаём долю в базе данных
          this.createShare(this.share).then(() => {
            // создаём запись в базе данных
            this.createRecord(this.record).then(() => {
              // переход на страницу просмотра записи
              // this.$router.push(PAGE_ENTRY_GET + "/" + this.getOwnership.id);
              this.$router.push(PAGE_OWNERSHIPS_GET);
            });
          });
        });
      });
    },
    createTypeOwnership() {
      this.record.ownership = this.generateOwnership();
    },
    createTypeOwner() {
      this.record.owner = this.generateOwner();
      this.share.value = 1;
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
  update() {},
  mounted() {
    this.fetchAddressStart().then(() => {
      this.record.ownership.address = this.getAddressStart;
    });
  },
  computed: {
    ...mapGetters({
      getIsLoading: "ownership/getIsLoading",
      getMessages: "ownership/getMessages",
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
