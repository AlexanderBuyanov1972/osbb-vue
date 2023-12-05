<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <line-header text="Просмотр записи о собственности." />
    <line-address :address="address" />
    <div
      class="ownership"
      @click="this.$router.push(PAGE_OWNERSHIP_GET + '/' + ownership.id)"
    >
      <block-get-ownership :ownership="ownership" />
    </div>

    <div class="owner_list" v-for="one in records" :key="one.owner.id">
      <block-get-owner
        @click="this.$router.push(PAGE_OWNER_GET + '/' + one.owner.id)"
        :owner="one.owner"
        :ownershipId="ownership.id"
        :photoName="one.owner.photo.name"
        :share="one.share"
      />
      <button-simple @click="$router.push(PAGE_RECORD_UPDATE + '/' + one.id)"
        >Редактировать запись</button-simple
      >
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
      records: [],
      ownership: {},
      address: {},
      PAGE_RECORD_UPDATE,
      PAGE_OWNER_GET,
      PAGE_OWNERSHIP_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchAllRecordByOwnershipId: "record/fetchAllRecordByOwnershipId",
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
      getRecords: "record/getRecords",
    }),
    start() {
      this.fetchAllRecordByOwnershipId(this.$route.params.id).then(() => {
        this.records = this.getRecords;
        this.ownership = this.records[0].ownership;
        this.address = this.ownership.address;
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
