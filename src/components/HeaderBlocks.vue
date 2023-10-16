<template>
  <div class="main">
    <button-delete
      :style="
        currentButton == 1 ? { color: 'blue', 'border-color': 'blue' } : {}
      "
      @click="clickButton1"
      >{{ MAIN }}</button-delete
    >
    <button-delete
      :style="
        currentButton == 2
          ? { color: 'blueviolet', 'border-color': 'blueviolet' }
          : {}
      "
      @click="clickButton2"
      >{{ BLOCK_OWNERSHIP }}
    </button-delete>
    <button-delete
      :style="
        currentButton == 3
          ? { color: 'darkgoldenrod', 'border-color': 'darkgoldenrod' }
          : {}
      "
      @click="clickButton3"
      >{{ BLOCK_OWNER }}
    </button-delete>
    <button-delete
      :style="
        currentButton == 4 ? { color: 'teal', 'border-color': 'teal' } : {}
      "
      @click="clickButton4"
      >{{ BLOCK_QUESTIONNAIRE }}
    </button-delete>
    <button-delete
      :style="currentButton == 5 ? { color: 'red', 'border-color': 'red' } : {}"
      @click="clickButton5"
      >Оплата счетов
    </button-delete>
  </div>
</template>
<script>
import {
  PAGE_MAIN,
  PAGE_QUESTIONNAIRES_GET,
  PAGE_OWNERSHIPS_GET,
  PAGE_OWNERS_GET,
  PAGE_PAYMENTS_GET,
} from "@/router/apiRouter";
import {
  BLOCK_PAYMENT_BILLS,
  BLOCK_OWNER,
  BLOCK_OWNERSHIP,
  BLOCK_QUESTIONNAIRE,
  MAIN,
} from "@/ui/namesButton";
export default {
  data() {
    return {
      BLOCK_PAYMENT_BILLS,
      BLOCK_OWNER,
      BLOCK_OWNERSHIP,
      BLOCK_QUESTIONNAIRE,
      MAIN,
      PAGE_MAIN,
      PAGE_QUESTIONNAIRES_GET,
      PAGE_OWNERSHIPS_GET,
      PAGE_OWNERS_GET,
      PAGE_PAYMENTS_GET,
      currentButton: 0,
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
