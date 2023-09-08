<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <h2 class="header1">
      Объект недвижимости - квартира № {{ getOwnership.address.apartment }}.
    </h2>
    <h2 class="header2">{{ getLineAddress() }}</h2>
    <block-read-ownership :ownership="mapValue()" />

    <div class="btns">
      <button-simple
        class="btn"
        @click="$router.push('/edit/ownership/' + getOwnership.id)"
        >Редактировать собственность.</button-simple
      >
      <button-simple
        class="btn"
        @click="$router.push('/update/ownership/' + getOwnership.id)"
        >Редактировать запись о собственности.</button-simple
      >
      <button-simple
        class="btn"
        @click="$router.push('/show/ownership/' + getOwnership.id)"
        >Смотреть запись о собственности.</button-simple
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  arrayTypeRoom,
  arrayDocumentConfirmsRightOwn,
  arrayNumberRooms,
  arrayLoggia,
} from "@/pages/arraysOfData";
import { getElementByValue } from "@/pages/functions";
import photo from "@/photos/rooms/1_1.png";

export default {
  data() {
    return {
      getElementByValue,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
    getLineAddress() {
      const address = this.getOwnership.address;
      return (
        address.zipCode +
        ",  " +
        address.country +
        ",  " +
        address.region +
        ",  " +
        address.city +
        ",  " +
        address.street +
        ",  дом № " +
        address.house +
        ",  кв. " +
        address.apartment
      );
    },
    mapValue() {
      let send = { ...this.getOwnership };
      send.numberRooms = this.getElementByValue(
        arrayNumberRooms,
        this.getOwnership.numberRooms
      ).name;
      send.typeRoom = this.getElementByValue(
        arrayTypeRoom,
        this.getOwnership.typeRoom
      ).name;
      send.documentConfirmsRightOwn = this.getElementByValue(
        arrayDocumentConfirmsRightOwn,
        this.getOwnership.documentConfirmsRightOwn
      ).name;
      send.loggia = this.getElementByValue(
        arrayLoggia,
        this.getOwnership.loggia
      ).name;
      send.photo = photo;
      console.log(send);
      return send;
    },
  },

  mounted() {
    this.fetchOwnership(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
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
h2 {
  margin: 10px 0px;
  text-align: center;
}
.header1 {
  color: blueviolet;
}
.header2 {
  color: teal;
}

.btn {
  margin: 20px 0px 10px 0px;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
