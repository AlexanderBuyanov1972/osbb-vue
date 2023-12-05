<template>
  <header-polls></header-polls>
  <div class="main">
   <line-header text="Список опросов" :style="{ color: 'blueviolet' }" />
    <survey-item :survey="header" count="№" />
    <div v-for="one in getSurveys" :key="one.id">
      <div
        @click="
          () =>
            this.$router.push(
              PAGE_SURVEY_ANSWER +
                '/' +
                one.title +
                '/' +
                one.fullName +
                '/' +
                one.apartment
            )
        "
      >
        <survey-item :survey="one" />
      </div>
    </div>
  </div>
</template>
<script>
import { PAGE_SURVEY_ANSWER } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      header: {
        title: "Тема опроса",
        byWhom: "Кем инициализирован",
        dateDispatch: "Дата инициализации",
        dateReceiving: "Дата завершения",
        apartment: "Квартира №",
        fullName: "Ф.И.О.",
      },
      PAGE_SURVEY_ANSWER,
    };
  },
  methods: {
    ...mapActions({
      fetchAllSurvey: "survey/fetchAllSurvey",
      fetchAllSurveyByTitle: "survey/fetchAllSurveyByTitle",
      fetchAllSurveyByTitleAndById: "survey/fetchAllSurveyByTitleAndById",
    }),
  },
  computed: {
    ...mapGetters({
      getSurveys: "survey/getSurveys",
    }),
    changeParams() {
      let title = this.$route.params.title;
      let id = this.$route.params.id;
      if (title == undefined) {
        this.fetchAllSurvey();
      }
      if (title != undefined && id == undefined) {
        this.fetchAllSurveyByTitle(title);
      }
      if (title != undefined && id != undefined) {
        this.fetchAllSurveyByTitleAndById({ title, id });
      }
    },
  },

  updated() {
    this.changeParams;
  },
  mounted() {
    this.changeParams;
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
