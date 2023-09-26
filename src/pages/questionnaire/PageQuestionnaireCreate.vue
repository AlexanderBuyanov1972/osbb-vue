<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header
      text="Создать опросный лист."
      :style="{ color: 'blueviolet' }"
    />
    <div class="form">
      <div class="title">
        <block-error-message
          :field="title"
          messageFalse="Укажите тему опроса."
          messageTrue="Тема опроса."
          @valid="(value) => (validTitle = value)"
        />
        <input-simple v-model="title" placeholder="Тема опроса." />
      </div>

      <div class="byWhom">
        <block-error-message
          :field="byWhom"
          messageFalse="Кто инициатор опроса."
          messageTrue="Инициатор опроса."
          @valid="(value) => (validByWhom = value)"
        />
        <input-simple v-model="byWhom" placeholder="Инициатор опроса." />
      </div>

      <div class="selects" v-for="(one, index) in selects" :key="index">
        <div class="question">
          <block-error-message
            :field="one.question"
            messageFalse="Опишите вопрос."
            messageTrue="Вопрос."
            @valid="(value) => (validQuestion = value)"
          />
          <input-simple v-model="one.question" placeholder="Опишите вопрос." />
        </div>
      </div>
    </div>

    <vue-hr />
    <button-create @click="addQuestion">Добавить вопрос</button-create>
    <button-delete @click="removeQuestion"
      >Удалить последний вопрос</button-delete
    >
    <button-simple
      :hidden="
        !(checkHidden)
      "
      @click="sendToServer"
      >SEND_TO_SERVER</button-simple
    >
  </div>
</template>
<script>
import { SEND_TO_SERVER } from "@/ui/namesButton";
import { PAGE_QUESTIONNAIRES_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      validTitle: false,
      validByWhom: false,
      validQuestion: false,
      SEND_TO_SERVER,
      PAGE_QUESTIONNAIRES_GET,
      title: "",
      byWhom: "",
      selects: [],
    };
  },
  methods: {
    ...mapActions({
      generateListQuestionnaire: "questionnaire/generateListQuestionnaire",
      fetchAllTitleOfQuestionnaire:
        "questionnaire/fetchAllTitleOfQuestionnaire",
    }),
    addQuestion() {
      this.selects.push({});
    },
    removeQuestion() {
      if (this.selects.length > 0) {
        this.selects.length -= 1;
      }
    },
    sendToServer() {
      let body = [];
      this.selects.forEach((el) => {
        body.push({
          title: this.title,
          byWhom: this.byWhom,
          question: el.question,
        });
      });
      this.generateListQuestionnaire(body).then(() => {
        this.fetchAllTitleOfQuestionnaire().then(()=> this.$router.push(PAGE_QUESTIONNAIRES_GET))
      });
    },
  },
  computed: {
    ...mapGetters({
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
    checkHidden() {
      return this.validTitle && this.validByWhom && this.validQuestion && this.selects.length != 0;
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
.question {
  width: auto;
  border: 1px solid teal;
  font-size: 17px;
  color: blueviolet;
  padding: 5px;
  margin: 5px 5px;
}
.list {
  padding: 10px 0px;
}
.item {
  border: 1px solid blueviolet;
}
</style>
