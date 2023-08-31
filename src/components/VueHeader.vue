<template>
  <div class="main">
    <div class="">
      <button-simple class="btn" @click="goToPageMain"
        >На главную</button-simple
      >
      <button-simple class="btn" @click="goToPageOwners"
        >Собственники
      </button-simple>
      <button-simple class="btn" @click="goToPageOwnerships"
        >Недвижимость
      </button-simple>
      <button-simple class="btn" @click="goToPageRegistryOwners"
        >Регистр собственников
      </button-simple>
      <button-simple class="btn" @click="goToPageRegistryOwnerships"
        >Регистр недвижимости
      </button-simple>
    </div>
    <div class="">
      <h4>Сообщения с сервера : </h4>
      <p v-for="(one, index ) in createMessage()">{{index + 1}}. {{ one }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    goToPageMain() {
      this.$router.push("/");
    },
    goToPageOwners() {
      this.$router.push("/owners");
    },
    goToPageOwnerships() {
      this.$router.push("/ownerships");
    },
    goToPageRegistryOwners() {
      this.$router.push("/registry/owners");
    },
    goToPageRegistryOwnerships() {
      this.$router.push("/registry/ownerships");
    },
    createMessage() {
      return this.getMessagesOwner;
    },
  },
  computed: {
    ...mapGetters({
      getMessagesAddress: "address/getMessages",
      getMessagesOwner: "owner/getMessages",
      getMessagesOwnership: "ownership/getMessages",
      getMessagesPassword: "password/getMessages",
      getMessagesRegistry: "registry/getMessages",
      getMessagesRole: "role/getMessages",
      getMessagesUser: "user/getMessages",
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
.main {
  margin: 0px 0px 0px 5px;
}
.btn {
  margin-right: 5px;
}
p, h4{
  color: red;
  font-size: 1em;
}
</style>
