<template>
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
              PAGE_ANSWER_FOR_QUESTIONNAIRE +
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
import { PAGE_ANSWER_FOR_QUESTIONNAIRE } from "@/router/apiRouter";
import { mapActions, mapGetters, mapMutations } from "vuex";
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
      PAGE_ANSWER_FOR_QUESTIONNAIRE,
    };
  },
  methods: {
    ...mapActions({
      getAllQuestionnaire: "questionnaire/getAllQuestionnaire",
    }),
    ...mapMutations({
      setMessages:"questionnaire/setMessages"
    })
  },
  computed: {
    ...mapGetters({
      getQuestionnaires: "questionnaire/getQuestionnaires",
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
  },
  mounted() {
    this.getAllQuestionnaire().then(() => {
      this.array = this.getQuestionnaires;
    }).catch(err => {
this.setMessages([err.message,...this.getMessages])
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
