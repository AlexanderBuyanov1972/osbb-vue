<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <line-header text="Редактирование записи." />
    <!------------- search -------------->
    <div class="search">
      <div class="title">Введите № помещения :</div>
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '70px' }"
      />
      <div class="title">Введите Ф.И.О. :</div>
      <input-simple
        class="input"
        v-model="fullName"
        :style="{ width: '350px' }"
      />
      <button-simple
        :hidden="!this.checkInputs"
        @click="actionGetRecord"
        :style="{ color: 'brown', 'border-color': 'brown' }"
        >Получить
      </button-simple>
    </div>
    <!--  -->
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
      message="Вы действительно хотите обновить запись?"
      @close="showModal = false"
      @successfully="successfullyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_RECORD_GET, PAGE_NOT_FOUND } from "@/router/apiRouter";
import { checkFullName, checkApartment } from "@/pages/_functions/functions";
export default {
  data() {
    return {
      checkFullName,
      checkApartment,
      showModal: false,
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
          photo: {},
        },
      },
      isValidOwnership: false,
      isValidAddress: false,
      isValidOwner: false,
      isValidPassport: false,
      isValidPlaceWork: false,
      isValidVehicle: false,
      isValidPhoto: false,
      isValidShare: false,
      PAGE_RECORD_GET,
      PAGE_NOT_FOUND,
    };
  },
  methods: {
    ...mapActions({
      fetchRecordByApartmentAndFullName:
        "record/fetchRecordByApartmentAndFullName",
      updateOwner: "owner/updateOwner",
      updateOwnership: "ownership/updateOwnership",
      updateRecord: "record/updateRecord",
      fetchRecord: "record/fetchRecord",
    }),
    successfullyAction() {
      this.updateOwner(this.record.owner).then(() => {
        this.updateOwnership(this.record.ownership).then(() => {
          this.updateRecord(this.record).then(() => {
            this.$router.push(PAGE_RECORD_GET + "/" + this.record.ownership.id);
          });
        });
      });
    },
    actionGetRecord() {
      this.fetchRecordByApartmentAndFullName({
        apartment: this.apartment,
        fullName: this.fullName,
      })
        .then(() => {
          this.record = this.getRecord;
          this.share = this.record.share;
        })
        .catch((err) => {
          this.$router.push(PAGE_NOT_FOUND);
        });
    },
  },
  update() {
    this.actionGetRecord();
  },
  computed: {
    ...mapGetters({
      getRecord: "record/getRecord",
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
    checkInputs() {
      return (
        this.checkApartment(this.apartment) && checkFullName(this.fullName)
      );
    },
  },
  mounted() {
    if (this.$route.params.id != undefined) {
      this.fetchRecord(this.$route.params.id).then(() => {
        this.record = this.getRecord;
        this.share = this.record.share;
      });
    }
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
