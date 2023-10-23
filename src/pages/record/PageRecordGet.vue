<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Просмотр записи о собственности." />
    <line-address :address="address" />
    <div class="blocks">
      <div class="rooms">
        <div
          class="room"
          v-for="one in rooms"
          @click="this.$router.push(PAGE_OWNERSHIP_GET + '/' + one.id)"
          :key="one.id"
        >
          <block-get-ownership :ownership="one" />
        </div>
      </div>
      <div class="clients">
        <div
          v-for="one in clients"
          class="client"
          @click="this.$router.push(PAGE_OWNER_GET + '/' + one.id)"
          :key="one.id"
        >
          <block-get-owner :owner="one" :ownershipId="rooms[0].id" />
        </div>
      </div>
    </div>
    <vue-hr />
    <button-back />
    <button-simple :hidden="true" @click="start">Перезагрузка</button-simple>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  PAGE_RECORD_UPDATE,
  PAGE_OWNER_GET,
  PAGE_OWNERSHIP_GET,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      PAGE_RECORD_UPDATE,
      PAGE_OWNER_GET,
      PAGE_OWNERSHIP_GET,
      rooms: [],
      clients: [],
      address: {},
    };
  },
  methods: {
    ...mapActions({
      fetchRoomsAndClientsByOwnershipId:
        "record/fetchRoomsAndClientsByOwnershipId",
      fetchAddress: "address/fetchAddress",
    }),
  },
  mounted() {
    this.start;
  },
  updated() {
    this.start;
  },
  computed: {
    ...mapGetters({
      getRecord: "record/getRecord",
      getAddress: "address/getAddress",
      getMessages: "record/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
    start() {
      this.fetchAddress(this.$route.params.id).then(() => {
        this.address = this.getAddress;
      });
      this.fetchRoomsAndClientsByOwnershipId(this.$route.params.id).then(() => {
        this.rooms = this.getRecord.rooms;
        this.clients = this.getRecord.clients;
      });
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
}
.owner {
  width: 100%;
  margin-top: 10px;
}

hr {
  margin-top: 25px;
  color: teal;
}
</style>
