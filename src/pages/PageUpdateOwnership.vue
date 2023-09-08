<template>
  <div class="main">
    <block-messages
      :messages="[...getMessagesOwnership, ...getMessagesOwner]"
    />
    <div class="header">Редактирование записи о собственности..</div>
    <div class="blocks">
      <div class="block1">
        <block-edit-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
          :ownership="{ ...this.getOwnership }"
        />
      </div>

      <div class="block3">
        <block-edit-address
          @address="(data) => (address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
          :address="{ ...this.getOwnership.address }"
        />
      </div>

      <div class="column">
        <div class="list" v-for="one in owners" :key="one.id">
          <div class="block4">
            <block-edit-owner
              @owner="(data) => (one.owner = data)"
              @isValidOwner="(value) => (isValidOwner = value)"
              :owner="one"
            />
          </div>
          <div class="block2">
            <block-edit-password
              @password="(data) => (one.password = data)"
              @isValidPassword="(value) => (isValidPassword = value)"
              :password="one.password"
            />
          </div>
        </div>
      </div>
    </div>

    <hr class="teal" />
    <button-simple
      class="btn"
      @click="sendOwnership"
      :hidden="
        !(isValidOwnership && isValidOwner && isValidAddress && isValidPassword)
      "
      >Послать на сервер.</button-simple
    >
    <button-simple class="btn" @click="plusOwnership"
      >Добавить собственника</button-simple
    >
    <button-simple class="btn" @click="minusOwnership"
      >Убавить собственника</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      size: 0,
      ownership: {},
      owners: [],
      address: {},
      isValidOwnership: false,
      isValidOwner: false,
      isValidAddress: false,
      isValidPassword: false,
    };
  },
  methods: {
    sendOwnership() {
      this.ownership.address = this.address;
      this.ownership.owners = this.mapListOwners();
      this.updateOwnership(this.ownership).then(() => {
        setTimeout(() => {
          this.$router.push("/ownership/" + this.ownership.id);
        }, 3000);
      });
    },
    plusOwnership() {
      this.owners.push({ ownership: { address: {} } });
    },
    minusOwnership() {
      if (this.owners.length > this.size) {
        this.owners.length -= 1;
      }
    },
    mapListOwners(id) {
      let result = [];
      this.owners.forEach((el) => {
        let objectOwner = el.owner;
        let objectPassword = el.password;
        objectOwner.password = objectPassword;
        result.push(objectOwner);
      });
      return result;
    },
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
      updateOwnership: "ownership/updateOwnership",
      fetchCountOwners: "owner/fetchCountOwners",
      fetchCountOwnerships: "ownership/fetchCountRooms",
    }),
  },
  mounted() {
    this.fetchOwnership(this.$route.params.id).then(() => {
      setTimeout(() => {
        this.fetchCountOwners();
        this.fetchCountOwnerships();
        this.owners = [...this.getOwnership.owners];
        this.size = this.owners.length;
        this.ownership = { ...this.getOwnership };
        this.address = { ...this.getOwnership.address };
      }, 3000);
    });
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      countOwnerships: "ownership/getCountOwnerships",
      getMessagesOwnership: "ownership/getMessages",
      getMessagesOwner: "owner/getMessages",
      countOwners: "owner/getCountOwners",
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
.blocks {
  color: red;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid blueviolet;
  width: 100%;
  margin-top: 10px;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  margin-right: 10px;
}
.block2,
.block4 {
  margin: 10px;
  width: 50%;
}
.block1,
.block3 {
  margin: 10px;
  width: 25%;
}
.teal {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
.header {
  color: brown;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8em;
}
hr{
  margin-top: 25px;
}
</style>
