<template>
  <div class="main">
    <div class="form">
      <line-header text="Логин" :style="{ color: 'blueviolet' }" />
      <div class="username">
        <block-error-message
          :field="username"
          messageFalse="Укажите username"
          messageTrue="Username"
          @valid="(value) => (validUsername = value)"
        />
        <input-simple v-focus v-model.trim="username" placeholder="Username" />
      </div>
      <div class="password">
        <block-error-message
          :field="password"
          messageFalse="Укажите password"
          messageTrue="Password"
          @valid="(value) => (validPassword = value)"
        />
        <input-simple v-model.trim="password" placeholder="Password" />
      </div>
      <button-simple @click="send" :hidden="!isValid">Логин</button-simple>
    </div>
  </div>
</template>
<script>
import { PAGE_MAIN, PAGE_REGISTRATION } from "@/router/apiRouter";
import { mapActions } from "vuex";
import LineHeader from "@/ui/elements/LineHeader.vue";
import BlockErrorMessage from "@/pages/blocks/BlockErrorMessage.vue";
import InputSimple from "@/ui/elements/InputSimple.vue";
import ButtonSimple from "@/ui/elements/buttons/ButtonSimple.vue";
export default {
  components: {ButtonSimple, InputSimple, BlockErrorMessage, LineHeader},
  data() {
    return {
      username: "",
      password: "",
      PAGE_MAIN,
      PAGE_REGISTRATION,
      validUsername: false,
      validPassword: false,
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    send() {
      this.login({ username: this.username, password: this.password })
        .then(() => this.$router.push(PAGE_MAIN))
        .catch(() => this.$router.push(PAGE_REGISTRATION));
    },
  },
  computed: {
      isValid() {
      return this.validUsername && this.validPassword;
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
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 50%;
}
</style>
