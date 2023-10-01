<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Список опросов" :style="{ color: 'blueviolet' }" />
    <questionnaire-item :questionnaire="header" count="№" />
    <div v-for="one in getQuestionnaires" :key="one.id">
      <div
        @click="
          () =>
            this.$router.push(
              PAGE_QUESTIONNAIRE_ANSWER + '/' + one.title + '/' + one.fullName
            )
        "
      >
        <questionnaire-item :questionnaire="one" />
      </div>
    </div>
  </div>
</template>
<script>
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import { PAGE_QUESTIONNAIRE_ANSWER } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    OwnerItem,
  },
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
      PAGE_QUESTIONNAIRE_ANSWER,
    };
  },
  methods: {
    ...mapActions({
      fetchAllQuestionnaire: "questionnaire/fetchAllQuestionnaire",
      fetchAllQuestionnaireByTitle:
        "questionnaire/fetchAllQuestionnaireByTitle",
      fetchAllQuestionnaireByTitleAndByApartment:
        "questionnaire/fetchAllQuestionnaireByTitleAndByApartment",
    }),
  },
  computed: {
    ...mapGetters({
      getQuestionnaires: "questionnaire/getQuestionnaires",
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
    changeParams() {
      let title = this.$route.params.title;
      let apartment = this.$route.params.apartment;
      if (title == undefined) {
        this.fetchAllQuestionnaire();
      }
      if (title != undefined && apartment == undefined) {
        this.fetchAllQuestionnaireByTitle(title);
      }
      if (title != undefined && apartment != undefined) {
        this.fetchAllQuestionnaireByTitleAndByApartment({ title, apartment });
      }
    },
  },

  updated() {
    this.changeParams
  },
  mounted() {
    this.changeParams
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
