<template>
  <header-polls></header-polls>
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
    <button-simple @click="sendToServer" :hidden="!checkValid">{{
      SELECT
    }}</button-simple>
  </div>
</template>
<script>
import QuestionnaireItem from "@/itemsAndLists/QuestionnaireItem.vue";
import { SELECT } from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    QuestionnaireItem,
  },
  data() {
    return {
      list: [],
      info: {},
      SELECT,
    };
  },
  methods: {
    ...mapActions({
      updateAllQuestionnaire: "questionnaire/updateAllQuestionnaire",
      fetchAllQuestionnaireByTitleAndFullNameAndApartment:
        "questionnaire/fetchAllQuestionnaireByTitleAndFullNameAndApartment",
    }),
    sendToServer() {
      this.updateAllQuestionnaire(this.list).then(() => this.$router.back());
    },
  },
  computed: {
    ...mapGetters({
      getQuestionnaires: "questionnaire/getQuestionnaires",
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
    checkValid() {
      let valid = 1;
      this.list.forEach((el) => {
        if (el == undefined || el.answer == null || el.answer.length < 5) {
          valid *= 0;
        } else {
          valid *= 1;
        }
      });
      return valid;
    },
  },
  mounted() {
    const payload = {
      title: this.$route.params.title,
      fullName: this.$route.params.fullName,
      apartment: this.$route.params.apartment,
    };
    this.fetchAllQuestionnaireByTitleAndFullNameAndApartment(payload).then(() => {
      this.list = this.getQuestionnaires;
      this.info.dateDispatch = this.list[0].dateDispatch;
      this.info.byWhom = this.list[0].byWhom;
      this.info.fullName = this.list[0].fullName;
      this.info.apartment = this.list[0].apartment;
      this.info.title = this.list[0].title;
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
