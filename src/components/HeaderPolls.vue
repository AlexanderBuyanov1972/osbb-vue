<template>
  <div class="block1">
    <button-create @click="goToPageQuestionnaires"
      >{{ LIST_QUESTIONNAIRES }}
    </button-create>
    <button-create @click="goToPageCreateQuestionnaire"
      >{{ CREATE_QUESTIONNAIRE }}
    </button-create>
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
  <div class="block2" @mousemove="emitTitleAndApartment">
    <div class="main">
      <div class="title">Введите тему опроса :</div>
      <select-title
        :style="{ margin: '10px 10px 10px 0px' }"
        :array="array"
        @select="(value) => (title = value)"
        :flagReset="flagReset"
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
    </div>
  </div>
</template>
<script>
import {
  LIST_QUESTIONNAIRES,
  CREATE_QUESTIONNAIRE,
  GET_RESULT_POLL,
  GET_POLLS_BY_TITLE,
  GET_POLLS_BY_TITLE_AND_BY_APARTMENT,
} from "@/ui/namesButton";
import {
  PAGE_SHOW_QUESTIONNAIRES,
  PAGE_CREATE_QUESTIONNAIRE,
  PAGE_RESULT_QUESTIONNAIRE,
} from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-polls",
  data() {
    return {
      array: [],
      title: "",
      apartment: "",
      GET_RESULT_POLL,
      GET_POLLS_BY_TITLE,
      GET_POLLS_BY_TITLE_AND_BY_APARTMENT,
      LIST_QUESTIONNAIRES,
      CREATE_QUESTIONNAIRE,

      PAGE_SHOW_QUESTIONNAIRES,
      PAGE_CREATE_QUESTIONNAIRE,
      PAGE_RESULT_QUESTIONNAIRE,
    };
  },
  methods: {
    goToPageQuestionnaires() {
      this.$router.push(PAGE_SHOW_QUESTIONNAIRES + "/" + "");
    },
    goToPageCreateQuestionnaire() {
      this.$router.push(PAGE_CREATE_QUESTIONNAIRE);
    },
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
    plus() {
      if (this.apartment < 84) this.apartment = this.apartment * 1 + 1;
    },
    minus() {
      if (this.apartment > 1) this.apartment = this.apartment * 1 - 1;
    },
    emitTitleAndApartment() {
      this.$emit("title", this.title);
      this.$emit("apartment", this.apartment);
    },
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
.block1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.block {
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
