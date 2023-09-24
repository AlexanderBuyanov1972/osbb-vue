<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Список опросов" :style="{ color: 'blueviolet' }" />
    <questionnaire-item :questionnaire="header" count="№" />
    <div v-for="one in array" :key="one.id">
      <div
        @click="
          () =>
            this.$router.push(
              PAGE_QUESTIONNAIRE_ANSWER +
                '/' +
                one.title +
                '/' +
                one.fullname
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
      array: [],
      header: {
        title: "Тема опроса",
        byWhom: "Кем инициализирован",
        dateDispatch: "Дата инициализации",
        dateReceiving: "Дата завершения",
        apartment: "Квартира №",
        fullname: "Ф.И.О.",
      },
      PAGE_QUESTIONNAIRE_ANSWER,
    };
  },
  methods: {
    ...mapActions({
      fetchAllQuestionnaire: "questionnaire/fetchAllQuestionnaire",
    }),
  },
  computed: {
    ...mapGetters({
      getQuestionnaires: "questionnaire/getQuestionnaires",
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
  },
  mounted() {
    this.fetchAllQuestionnaire().then(() => {
      this.array = this.getQuestionnaires;
    });
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
