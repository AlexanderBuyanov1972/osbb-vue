<template>
  <header-polls></header-polls>
  <div class="main">
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
    <button-simple @click="addQuestion">Добавить вопрос</button-simple>
    <button-simple @click="removeQuestion"
      >Удалить последний вопрос</button-simple
    >
    <button-simple :hidden="!checkHidden" @click="sendToServer"
      >Сохранить</button-simple
    >
  </div>
</template>
<script>
import { PAGE_SURVEYS_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      validTitle: false,
      validByWhom: false,
      validQuestion: false,
      PAGE_SURVEYS_GET,
      title: "",
      byWhom: "",
      selects: [],
    };
  },
  methods: {
    ...mapActions({
      createAllSurvey: "survey/createAllSurvey",
      fetchAllTitleSurvey: "survey/fetchAllTitleSurvey",
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
      this.createAllSurvey(body).then(() => {
        this.$router.push(PAGE_SURVEYS_GET);
      });
    },
  },
  computed: {
    checkHidden() {
      return (
        this.validTitle &&
        this.validByWhom &&
        this.validQuestion &&
        this.selects.length != 0
      );
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
