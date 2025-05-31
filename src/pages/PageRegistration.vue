<template>
  <div class="main">
    <div class="form">
      <line-header text="Регистрация" :style="{ color: 'blueviolet' }" />
      <div class="email">
        <block-error-message
          :field="email"
          messageFalse="Укажите e-mail"
          messageTrue="E-mail"
          @valid="(value) => (validEmail = value)"
        />
        <input-simple v-focus v-model.trim="email" placeholder="E-mail" />
      </div>

      <div class="username">
        <block-error-message
          :field="username"
          messageFalse="Укажите имя пользователя"
          messageTrue="Имя пользователя"
          @valid="(value) => (validUsername = value)"
        />
        <input-simple v-model.trim="username" placeholder="Имя пользователя" />
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
      <button-simple @click="send" :hidden="!isValid"
        >Регистрироваться</button-simple
      >
    </div>
  </div>
</template>
<script>
import { PAGE_LOGIN } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
import LineHeader from "@/ui/elements/LineHeader.vue";
import BlockErrorMessage from "@/pages/blocks/BlockErrorMessage.vue";
import InputSimple from "@/ui/elements/InputSimple.vue";
import ButtonSimple from "@/ui/elements/buttons/ButtonSimple.vue";
export default {
  components: {ButtonSimple, InputSimple, BlockErrorMessage, LineHeader},
  data() {
    return {
      email: "",
      username: "",
      password: "",
      PAGE_LOGIN,
      validEmail: false,
      validUsername: false,
      validPassword: false,
    };
  },
  methods: {
    ...mapActions({
      registration: "auth/registration",
    }),
    send() {
      const object = {
        email: this.email,
        username: this.username,
        password: this.password,
        roles: ["ADMIN"],
      };
      this.registration(object).then(() => {
        this.$router.push(PAGE_LOGIN);
      });
    },
  },
  computed: {
     isValid() {
      return this.validEmail && this.validUsername && this.validPassword;
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
