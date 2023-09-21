<template>
  <div class="main">
    <button-create @click="goToPageQuestionnaires"
      >{{ LIST_QUESTIONNAIRES }}
    </button-create>
    <button-create @click="goToPageCreateQuestionnaire"
      >{{ CREATE_QUESTIONNAIRE }}
    </button-create>
    <div class="title">Введите тему опроса :</div>
    <input-simple class="input" v-model="title" :style="{ width: '400px' }" />
    <button-simple
      :hidden="this.title.length == 0"
      @click="goToPageResultQuestionnaire"
      >{{ SEND_TO_SERVER }}
    </button-simple>
  </div>
</template>
<script>
import {
  LIST_QUESTIONNAIRES,
  CREATE_QUESTIONNAIRE,
  SEND_TO_SERVER,
} from "@/ui/namesButton";
import {
  PAGE_SHOW_QUESTIONNAIRES,
  PAGE_CREATE_QUESTIONNAIRE,
  PAGE_RESULT_QUESTIONNAIRE,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      title: "",
      SEND_TO_SERVER,
      LIST_QUESTIONNAIRES,
      CREATE_QUESTIONNAIRE,
      PAGE_SHOW_QUESTIONNAIRES,
      PAGE_CREATE_QUESTIONNAIRE,
      PAGE_RESULT_QUESTIONNAIRE,
    };
  },
  methods: {
    goToPageQuestionnaires() {
      this.$router.push(PAGE_SHOW_QUESTIONNAIRES);
    },
    goToPageCreateQuestionnaire() {
      this.$router.push(PAGE_CREATE_QUESTIONNAIRE);
    },
    goToPageResultQuestionnaire() {
      this.$router.push(PAGE_RESULT_QUESTIONNAIRE + "/" + this.title);
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
.btn {
  margin: 10px 0px;
}
.title {
  font-size: 17px;
  color: blueviolet;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
}
</style>
