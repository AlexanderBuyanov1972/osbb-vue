<template>
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header :text="info.title" :style="{ color: 'brown' }" />
    <block-information-questionnaire :info="info" />
    <div class="list" v-for="one in list" :key="one.id">
      <div class="item">
        <div class="question">{{ one.question }}</div>
        <line-radio @select="(value) => (one.answer = value)" />
      </div>
    </div>
    <vue-hr />
    <button-simple @click="sendToServer">SEND_TO_SERVER</button-simple>
  </div>
</template>
<script>
import QuestionnaireItem from "@/itemsAndLists/QuestionnaireItem.vue";
import { SEND_TO_SERVER } from "@/ui/namesButton";
import {
  PAGE_SHOW_QUESTIONNAIRE,
  PAGE_SHOW_QUESTIONNAIRES,
} from "@/router/apiRouter";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    QuestionnaireItem,
  },
  data() {
    return {
      list: [],
      info: {},
      SEND_TO_SERVER,
      PAGE_SHOW_QUESTIONNAIRE,
    };
  },
  methods: {
    ...mapActions({
      createAllQuestionnaire: "questionnaire/createAllQuestionnaire",
      fetchQuestionnaire: "questionnaire/fetchQuestionnaire",
      fetchQuestionnaireByTitleAndFullname:
        "questionnaire/fetchQuestionnaireByTitleAndFullname",
    }),
    sendToServer() {
      this.createAllQuestionnaire(this.list).then(() => {
        this.$router.push(PAGE_SHOW_QUESTIONNAIRES);
      });
    },
  },
  computed: {
    ...mapGetters({
      getQuestionnaires: "questionnaire/getQuestionnaires",
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
    ...mapMutations({
      setMessages: "questionnaire/setMessages",
    }),
  },
  mounted() {
    const payload = {
      title: this.$route.params.title,
      fullname: this.$route.params.fullname,
    };
    this.fetchQuestionnaireByTitleAndFullname(payload)
      .then(() => {
        this.list = this.getQuestionnaires;
        this.info.dateDispatch = this.list[0].dateDispatch;
        this.info.byWhom = this.list[0].byWhom;
        this.info.fullname = this.list[0].fullname;
        this.info.apartment = this.list[0].apartment;
        this.info.title = this.list[0].title;
      })
      .catch((err) => {
        this.setMessages([err.message, ...this.getMessages]);
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
