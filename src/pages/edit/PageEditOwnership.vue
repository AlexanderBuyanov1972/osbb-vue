<template>
  <div class="main">
    <header-messages :messages="getMessages" />
    <line-header text="Редактирование записи о помещении." />
    <div class="blocks">
      <div class="ownership">
        <block-edit-ownership
          @ownership="(data) => (ownership = data)"
          @isValidOwnership="(value) => (isValidOwnership = value)"
        />
      </div>
      <div class="address">
        <block-edit-address
          @address="(data) => (address = data)"
          @isValidAddress="(value) => (isValidAddress = value)"
        />
      </div>
    </div>
    <hr />
    <button-simple
      class="btn"
      @click="$router.push('/ownership/' + this.$route.params.id)"
      >Назад.</button-simple
    >
    <button-simple
      class="btn"
      @click="sendOwnership"
      :hidden="!(isValidOwnership && isValidAddress)"
      >Послать на сервер.</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      isValidOwnership: false,
      isValidAddress: false,
    };
  },
  methods: {
    ...mapActions({
      updateOwnership: "ownership/updateOwnership",
    }),
    sendOwnership() {
      this.ownership.address = this.address;
      this.updateOwnership(this.ownership).then(() => {
        this.$router.push("/ownership/" + this.$route.params.id);
      });
    },
  },
  computed: {
    ...mapGetters({
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
.ownership {
  margin-right: 10px;
  width: 50%;
}
.address {
  margin-left: 10px;
  width: 50%;
}
</style>
