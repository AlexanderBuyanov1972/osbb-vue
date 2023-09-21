<template>
  <div class="main">
    <div class="title">Введите тему опроса :</div>
    <select-title
      :style="{ margin: '10px 10px 10px 0px' }"
      :array="array"
      @select="(value) => (title = value)"
      :flagReset="flagReset"
    />
    <button-create @click="goToPageResultQuestionnaire"
      >{{ GET_RESULT_POLL }}
    </button-create>
    <button-create @click="goToPageQuestionnairesByTitle"
      >{{ GET_POLLS_BY_TITLE }}
    </button-create>
    <button-create @click="goToPageQuestionnairesByTitleAndByApartment"
      >{{ GET_POLLS_BY_TITLE_AND_BY_APARTMENT }}
    </button-create>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  GET_RESULT_POLL,
  GET_POLLS_BY_TITLE,
  GET_POLLS_BY_TITLE_AND_BY_APARTMENT,
} from "@/ui/namesButton";
import {
  PAGE_RESULT_QUESTIONNAIRE,
  PAGE_SHOW_QUESTIONNAIRES,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      array: [],
      title: "",
      // apartment: this.apartment,
      GET_RESULT_POLL,
      GET_POLLS_BY_TITLE,
      GET_POLLS_BY_TITLE_AND_BY_APARTMENT,
      PAGE_RESULT_QUESTIONNAIRE,
    };
  },
  props: {
    apartment: String,
  },
  methods: {
    goToPageResultQuestionnaire() {
      return this.$router.push(PAGE_RESULT_QUESTIONNAIRE + "/" + this.title);
    },
    goToPageQuestionnairesByTitle() {
      return this.$router.push(PAGE_SHOW_QUESTIONNAIRES + "/" + this.title);
    },
    goToPageQuestionnairesByTitleAndByApartment() {
      return this.$router.push(
        PAGE_SHOW_QUESTIONNAIRES + "/" + this.title + "/" + this.apartment
      );
    },
    ...mapActions({
      fetchAllTitleOfQuestionnaire:
        "questionnaire/fetchAllTitleOfQuestionnaire",
    }),
  },
  mounted() {
    this.fetchAllTitleOfQuestionnaire().then(() => {
      this.array = this.getTitles;
    });
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
.main {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  font-size: 17px;
  color: teal;
  margin-right: 5px;
}
</style>
