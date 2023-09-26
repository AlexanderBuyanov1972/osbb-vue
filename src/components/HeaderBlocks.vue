<template>
  <div class="main">
    <button-delete @click="$router.push(PAGE_MAIN)">{{ MAIN }}</button-delete>
    <button-simple @click="$router.push(PAGE_OWNERSHIPS_GET)"
      >{{ BLOCK_OWNERSHIP }}
    </button-simple>
    <button-edit @click="$router.push(PAGE_OWNERS_GET)"
      >{{ BLOCK_OWNER }}
    </button-edit>
    <button-create @click="$router.push(PAGE_QUESTIONNAIRES_GET)"
      >{{ BLOCK_QUESTIONNAIRE }}
    </button-create>
    <button-bills @click="$router.push(PAGE_BILLS_GET)"
      >{{ BLOCK_PAYMENT_BILLS }}
    </button-bills>
  </div>
</template>
<script>
import {
  PAGE_MAIN,
  PAGE_QUESTIONNAIRES_GET,
  PAGE_OWNERSHIPS_GET,
  PAGE_OWNERS_GET,
  PAGE_BILLS_GET,
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
      PAGE_BILLS_GET,
    };
  },
  updated() {
    this.$router.push(PAGE_MAIN);
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
