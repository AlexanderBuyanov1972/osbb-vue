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
  </div>
  <div class="block2">
    <div class="main">
      <div class="title">Введите тему опроса :</div>
      <select-title
        :style="{ margin: '10px 10px 10px 0px' }"
        @select="(value) => (title = value)"
      />
    </div>
    <div class="main">
      <div class="title">Введите № помещения :</div>
      <button-simple
        :style="{ 'border-color': 'teal', color: 'teal' }"
        @click="minus"
        >-</button-simple
      >
      <input-simple
        class="input"
        v-model="apartment"
        :style="{ width: '65px' }"
      />

      <button-simple
        :style="{ 'border-color': 'teal', color: 'teal' }"
        @click="plus"
        >+</button-simple
      >
      <button-create @click="goToPageQuestionnairesByTitleAndByApartment"
        >{{ GET_POLLS_BY_TITLE_AND_BY_APARTMENT }}
      </button-create>
    </div>
  </div>
</template>
<script>
import {
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
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "header-polls",
  data() {
    return {
      title: "",
      apartment: "1",
      message: "Выберите тему опроса",
      // buttons
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
    goToPageQuestionnairesByTitleAndByApartment() {
      if (this.title == undefined || this.title == this.message) {
        this.setMessages([this.message]);
      } else if (this.apartment == undefined || this.apartment <= 0) {
        this.setMessages(["Выберите номер квартиры"]);
      } else {
        this.$router.push(
          PAGE_QUESTIONNAIRES_GET + "/" + this.title + "/" + this.apartment
        );
      }
    },
    ...mapMutations({
      setMessages: "questionnaire/setMessages",
    }),
    plus() {
      if (this.apartment < 84) this.apartment = this.apartment * 1 + 1;
    },
    minus() {
      if (this.apartment > 1) this.apartment = this.apartment * 1 - 1;
    },
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
