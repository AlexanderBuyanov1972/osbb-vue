<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <div class="header">Редактирование записи о помещении.</div>
    <div class="blocks">
      <div class="ownership">
        <block-edit-ownership
          @ownership="(data) => (ownership = data)"
          :arrayDocumentConfirmsRightOwn="arrayDocumentConfirmsRightOwn"
          :arrayTypeRoom="arrayTypeRoom"
          :arrayLoggia="arrayLoggia"
          :arrayNumberRooms="arrayNumberRooms"
          :ownership="getOwnership"
        />
      </div>
      <div class="address">
        <block-edit-address
          @address="(data) => (address = data)"
          :address="getOwnership.address"
        />
      </div>
    </div>
    <hr />
    <button-simple class="btn" @click="sendOwnership"
      >Послать на сервер.</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  arrayTypeRoom,
  arrayDocumentConfirmsRightOwn,
  arrayLoggia,
  arrayNumberRooms,
} from "@/pages/arraysOfData";
export default {
  data() {
    return {
      arrayTypeRoom,
      arrayDocumentConfirmsRightOwn,
      arrayLoggia,
      arrayNumberRooms,

      ownership: {},
      address: {},
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
    sendOwnership() {
      this.ownership.address = this.address;
      console.log(this.ownership);
      // this.updateOwnership(this.ownership);
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
.header {
  color: brown;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8em;
}
hr {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
.blocks {
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 2px solid blueviolet;
  padding: 10px;
}
.ownership,
.address {
  width: 50%;
}
.ownership {
  margin-right: 10px;
}
.address {
  margin-left: 10px;
}
</style>
