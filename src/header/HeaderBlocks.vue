<template>
  <vue-loader :isLoader="getIsLoading" />
  <div class="main">
    <div class="one-row">
      <button-simple
        :style="currentButton == 1 ? style : {}"
        @click="clickButton1"
        >На главную</button-simple
      >
      <button-simple
        :style="currentButton == 2 ? style : {}"
        @click="clickButton2"
        >Блок недвижимости
      </button-simple>
      <button-simple
        :style="currentButton == 4 ? style : {}"
        @click="clickButton4"
        >Блок опросов
      </button-simple>
      <button-simple
        :style="currentButton == 5 ? style : {}"
        @click="clickButton5"
        >Оплата счетов
      </button-simple>
      <button-simple
        :style="currentButton == 6 ? style : {}"
        @click="clickButton6"
        >Полезные запросы
      </button-simple>
      <button-simple
        :style="{ color: 'green', 'border-color': 'green' }"
        @click="showModal = true"
        >Logout
      </button-simple>
    </div>
    <header-messages :messages="getMessages" />
  </div>

  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите выйти из системы?"
      @close="showModal = false"
      @successfully="successfullyAction"
    ></modal-action>
  </dialog-window>
</template>
<script>
import {
  PAGE_MAIN,
  PAGE_SURVEYS_GET,
  PAGE_OWNERSHIPS_GET,
  PAGE_OWNERS_GET,
  PAGE_PAYMENTS_GET,
  PAGE_LOGIN,
  PAGE_USEFUL_QUERIES,
} from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      style: { color: "red", "border-color": "red" },
      PAGE_MAIN,
      PAGE_SURVEYS_GET,
      PAGE_OWNERSHIPS_GET,
      PAGE_OWNERS_GET,
      PAGE_PAYMENTS_GET,
      PAGE_LOGIN,
      PAGE_USEFUL_QUERIES,
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
      this.$router.push(PAGE_SURVEYS_GET);
      this.currentButton = 4;
    },
    clickButton5() {
      this.$router.push(PAGE_PAYMENTS_GET);
      this.currentButton = 5;
    },
    clickButton6() {
      this.$router.push(PAGE_USEFUL_QUERIES);
      this.currentButton = 6;
    },
    ...mapActions({
      logout: "auth/logout",
    }),
    successfullyAction() {
      this.logout().then(() => this.$router.push(PAGE_LOGIN));
    },
  },
  computed: {
    ...mapGetters({
      getMessages: "message/getMessages",
      getIsLoading: "message/getIsLoading",
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
.one-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
