<template>
  <div class="main">
    <button-simple
      :style="currentButton == 1 ? { color: 'red', 'border-color': 'red' } : {}"
      @click="clickButton1"
      >На главную</button-simple
    >
    <button-simple
      :style="currentButton == 2 ? { color: 'red', 'border-color': 'red' } : {}"
      @click="clickButton2"
      >Блок недвижимости
    </button-simple>
    <button-simple
      :style="currentButton == 4 ? { color: 'red', 'border-color': 'red' } : {}"
      @click="clickButton4"
      >Блок опросов
    </button-simple>
    <button-simple
      :style="currentButton == 5 ? { color: 'red', 'border-color': 'red' } : {}"
      @click="clickButton5"
      >Оплата счетов
    </button-simple>
    <button-simple
      :style="{ color: 'green', 'border-color': 'green' }"
      @click="showModal = true"
      >Logout
    </button-simple>
    <dialog-window :show="showModal">
      <modal-action
        message="Вы действительно хотите выйти из системы?"
        @close="showModal = false"
        @successfully="successfullyAction"
      ></modal-action>
    </dialog-window>
  </div>
</template>
<script>
import {
  PAGE_MAIN,
  PAGE_QUESTIONNAIRES_GET,
  PAGE_OWNERSHIPS_GET,
  PAGE_OWNERS_GET,
  PAGE_PAYMENTS_GET,
  PAGE_LOGIN,
} from "@/router/apiRouter";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      PAGE_MAIN,
      PAGE_QUESTIONNAIRES_GET,
      PAGE_OWNERSHIPS_GET,
      PAGE_OWNERS_GET,
      PAGE_PAYMENTS_GET,
      PAGE_LOGIN,
      currentButton: 1,
      showModal: false,
    };
  },

  methods: {
    clickButton1() {
      this.$router.push(PAGE_MAIN);
      this.currentButton = 1;
    },
    clickButton2() {
      this.$router.push(PAGE_OWNERSHIPS_GET);
      this.currentButton = 2;
    },
    clickButton3() {
      this.$router.push(PAGE_OWNERS_GET);
      this.currentButton = 3;
    },
    clickButton4() {
      this.$router.push(PAGE_QUESTIONNAIRES_GET);
      this.currentButton = 4;
    },
    clickButton5() {
      this.$router.push(PAGE_PAYMENTS_GET);
      this.currentButton = 5;
    },
    ...mapActions({
      logout: "auth/logout",
    }),
    successfullyAction() {
      this.logout().then(() => this.$router.push(PAGE_LOGIN));
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
  align-items: center;
  justify-content: space-between;
}
</style>
