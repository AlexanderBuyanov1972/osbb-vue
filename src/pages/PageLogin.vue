<template>
  <div class="main">
    <div class="form">
      <line-header text="Логин" :style="{ color: 'blueviolet' }" />
      <div class="email">
        <block-error-message
          :field="email"
          messageFalse="Укажите e-mail"
          messageTrue="E-mail"
          @valid="(value) => (validEmail = value)"
        />
        <input-simple v-focus v-model.trim="email" placeholder="E-mail" />
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
export default {
  data() {
    return {
      email: "",
      password: "",
      PAGE_MAIN,
      PAGE_REGISTRATION,
      validEmail: false,
      validPassword: false,
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    send() {
      this.login({ email: this.email, password: this.password })
        .then(() => this.$router.push(PAGE_MAIN))
        .catch(() => this.$router.push(PAGE_REGISTRATION));
    },
  },
  computed: {
      isValid() {
      return this.validEmail && this.validPassword;
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
