<template>
  <div class="main">
    <h4>Сообщения с сервера :</h4>
    <p v-for="(one, index) in createMessage()" :key="one.id">
      {{ index + 1 }}. {{ one }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
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
p,
h4 {
  color: green;
  font-size: 1.4em;
}
</style>
