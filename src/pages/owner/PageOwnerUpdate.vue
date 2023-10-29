<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Редактирование собственника." />

    <div class="blocks">
      <div class="owner">
        <block-update-owner
          @owner="(data) => (owner = data)"
          @isValidOwner="(value) => (isValidOwner = value)"
          :ownerProps="owner"
        />
      </div>
      <div class="passport_photo">
        <div class="passport">
          <block-update-passport
            @passport="(data) => (owner.passport = data)"
            @isValidPassport="(value) => (isValidPassport = value)"
            :passportProps="passport"
          />
        </div>
        <div class="photo">
          <block-update-photo
            @photo="(data) => handlerPhoto(data)"
            @isValidPhoto="(value) => (isValidPhoto = value)"
            :photoProps="photo"
          />
        </div>
      </div>

      <div class="placeWork">
        <block-update-place-work
          @placeWork="(data) => (owner.placeWork = data)"
          @isValidPlaceWork="(value) => (isValidPlaceWork = value)"
          :placeWorkProps="placeWork"
        />
      </div>
      <div class="vehicle">
        <block-update-vehicle
          @vehicle="(data) => (owner.vehicle = data)"
          @isValidVehicle="(value) => (isValidVehicle = value)"
          :vehicleProps="vehicle"
        />
      </div>
    </div>

    <vue-hr />
    <button-back />
    <button-simple @click="sendToServer" :hidden="!isValid">{{
      Сохранить
    }}</button-simple>
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите обновить собственника?"
      @close="showModal = false"
      @successfully="successfullyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_OWNER_GET } from "@/router/apiRouter";
export default {
  data() {
    return {
      owner: {},
      passport: {},
      vehicle: {},
      placeWork: {},
      photo: {},
      showModal: false,
      isValidOwner: false,
      isValidPassport: false,
      isValidPlaceWork: false,
      isValidVehicle: false,
      isValidPhoto: false,
    };
  },
  methods: {
    ...mapActions({
      updateOwner: "owner/updateOwner",
      fetchOwner: "owner/fetchOwner",
    }),
    sendToServer() {
      this.showModal = true;
    },
    successfullyAction() {
      this.updateOwner(this.owner).then(() =>
        this.$router.push(PAGE_OWNER_GET + "/" + this.getOwner.id)
      );
    },
    getOwnerForEdit() {
      this.fetchOwner(this.$route.params.id).then(() => {
        this.owner = this.getOwner;
        this.passport = this.getOwner.passport;
        this.photo = this.getOwner.photo;
        this.placeWork = this.getOwner.placeWork;
        this.vehicle = this.getOwner.vehicle;
      });
    },
    handlerPhoto(data) {
      if (data != undefined || data != null) this.owner = data;
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "owner/getIsLoading",
      getMessages: "owner/getMessages",
      getOwner: "owner/getOwner",
    }),
    isValid() {
      return (
        this.isValidOwner &&
        this.isValidPassport &&
        this.isValidPlaceWork &&
        this.isValidVehicle &&
        this.isValidPhoto
      );
    },
  },
  updated() {
    this.owner = this.getOwner;
  },
  mounted() {
    this.getOwnerForEdit();
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
.passport_photo {
  display: flex;
  flex-direction: column;
}
.vehicle,
.owner,
.placeWork,
.passport_photo {
  width: 24%;
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
