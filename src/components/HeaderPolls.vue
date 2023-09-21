<template>
  <div class="main">
    <button-create @click="goToPageQuestionnaires"
      >{{ LIST_QUESTIONNAIRES }}
    </button-create>
    <button-create @click="goToPageCreateQuestionnaire"
      >{{ CREATE_QUESTIONNAIRE }}
    </button-create>
  </div>
</template>
<script>
import { LIST_QUESTIONNAIRES, CREATE_QUESTIONNAIRE } from "@/ui/namesButton";
import {
  PAGE_SHOW_QUESTIONNAIRES,
  PAGE_CREATE_QUESTIONNAIRE,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      LIST_QUESTIONNAIRES,
      CREATE_QUESTIONNAIRE,
      PAGE_SHOW_QUESTIONNAIRES,
      PAGE_CREATE_QUESTIONNAIRE,
    };
  },
  methods: {
    goToPageQuestionnaires() {
      this.$router.push(PAGE_SHOW_QUESTIONNAIRES + "/" + "");
    },
    goToPageCreateQuestionnaire() {
      this.$router.push(PAGE_CREATE_QUESTIONNAIRE);
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
  justify-content: flex-start;
}
</style>
