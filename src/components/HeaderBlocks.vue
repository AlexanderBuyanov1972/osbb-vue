<template>
  <div class="main">
    <button-delete @click="$router.push(PAGE_MAIN)">{{ MAIN }}</button-delete>
    <button-delete @click="$router.push(PAGE_SHOW_OWNERSHIPS)"
      >{{ BLOCK_OWNERSHIP }}
    </button-delete>
    <button-delete @click="$router.push(PAGE_SHOW_OWNERS)"
      >{{ BLOCK_OWNER }}
    </button-delete>
    <button-delete @click="$router.push(PAGE_SHOW_QUESTIONNAIRES)"
      >{{ BLOCK_QUESTIONNAIRE }}
    </button-delete>
  </div>
</template>
<script>
import {
  PAGE_MAIN,
  PAGE_SHOW_QUESTIONNAIRES,
  PAGE_SHOW_OWNERSHIPS,
  PAGE_SHOW_OWNERS,
} from "@/router/apiRouter";
import {
  BLOCK_OWNER,
  BLOCK_OWNERSHIP,
  BLOCK_QUESTIONNAIRE,
  MAIN,
} from "@/ui/namesButton";
export default {
  data() {
    return {
      BLOCK_OWNER,
      BLOCK_OWNERSHIP,
      BLOCK_QUESTIONNAIRE,
      MAIN,
      PAGE_MAIN,
      PAGE_SHOW_OWNERSHIPS,
      PAGE_SHOW_OWNERS,
      PAGE_SHOW_QUESTIONNAIRES,
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
