<template>
  <div class="block1">
    <button-create @click="goToPageQuestionnaires"
      >{{ QUESTIONNAIRES_GET }}
    </button-create>
    <button-create @click="goToPageQuestionnairesByTitle"
      >{{ GET_POLLS_BY_TITLE }}
    </button-create>
    <button-create @click="goToPageResultQuestionnaire"
      >{{ GET_RESULT_POLL }}
    </button-create>
    <button-create @click="goToPageCreateQuestionnaire"
      >{{ QUESTIONNAIRE_CREATE }}
    </button-create>
    <button-create @click="removeByTitle"
      >{{ QUESTIONNAIRE_DELETE_BY_TITLE }}
    </button-create>
  </div>
  <div class="block2">
    <div class="main">
      <div class="title">Введите тему опроса :</div>
      <select-title
        :style="{ margin: '10px 10px 10px 0px' }"
        @select="(value) => (title = value)"
      />
    </div>
    <block-search-apartment
      :nameButton="GET_POLLS_BY_TITLE_AND_BY_APARTMENT"
      @apartment="(value) => action(value)"
    />
  </div>
</template>
<script>
import {
  QUESTIONNAIRE_DELETE_BY_TITLE,
  QUESTIONNAIRES_GET,
  QUESTIONNAIRE_CREATE,
  GET_RESULT_POLL,
  GET_POLLS_BY_TITLE,
  GET_POLLS_BY_TITLE_AND_BY_APARTMENT,
} from "@/ui/namesButton";
import {
  PAGE_QUESTIONNAIRES_GET,
  PAGE_QUESTIONNAIRE_CREATE,
  PAGE_QUESTIONNAIRE_RESULT,
} from "@/router/apiRouter";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "header-polls",
  data() {
    return {
      title: "",
      apartment: "1",
      message: "Выберите тему опроса",
      // buttons
      QUESTIONNAIRE_DELETE_BY_TITLE,
      QUESTIONNAIRES_GET,
      QUESTIONNAIRE_CREATE,
      GET_RESULT_POLL,
      GET_POLLS_BY_TITLE,
      GET_POLLS_BY_TITLE_AND_BY_APARTMENT,
      // pages
      PAGE_QUESTIONNAIRES_GET,
      PAGE_QUESTIONNAIRE_CREATE,
      PAGE_QUESTIONNAIRE_RESULT,
    };
  },
  methods: {
    goToPageQuestionnaires() {
      this.$router.push(PAGE_QUESTIONNAIRES_GET);
    },
    goToPageCreateQuestionnaire() {
      this.$router.push(PAGE_QUESTIONNAIRE_CREATE);
    },
    goToPageResultQuestionnaire() {
      if (this.title == undefined || this.title == this.message) {
        this.setMessages([this.message]);
      } else {
        this.$router.push(PAGE_QUESTIONNAIRE_RESULT + "/" + this.title);
      }
    },
    goToPageQuestionnairesByTitle() {
      if (this.title == undefined || this.title == this.message) {
        this.setMessages([this.message]);
      } else {
        this.$router.push(PAGE_QUESTIONNAIRES_GET + "/" + this.title);
      }
    },
    action(value) {
      if (this.title == undefined || this.title == this.message) {
        this.setMessages([this.message]);
      } else if (value == undefined || value <= 0) {
        this.setMessages(["Выберите номер квартиры"]);
      } else {
        this.$router.push(
          PAGE_QUESTIONNAIRES_GET + "/" + this.title + "/" + value
        );
      }
    },
    removeByTitle() {
      if (this.title == undefined || this.title == this.message) {
        this.setMessages([this.message]);
      } else {
        this.deleteAllQuestionnaireByTitle(this.title);
      }
    },

    ...mapMutations({
      setMessages: "questionnaire/setMessages",
    }),
    ...mapActions({
      deleteAllQuestionnaireByTitle:
        "questionnaire/deleteAllQuestionnaireByTitle",
    }),
  },
  computed: {
    ...mapGetters({
      getTitles: "questionnaire/getTitles",
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
.block1 {
  display: flex;
  align-items: center;
  justify-content: start;
}
.main {
  display: flex;
  align-items: center;
  justify-content: start;
}
.block2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  font-size: 17px;
  color: teal;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: teal;
}
</style>
