<template>
  <div class="block1">
    <button-simple @click="goToPageSurveysByTitle"
      >Получить опросы по теме
    </button-simple>
    <button-simple @click="goToPageResultSurvey"
      >Получить результаты опроса
    </button-simple>
    <button-simple @click="goToPageCreateSurvey"
      >Создать опросный лист
    </button-simple>
    <button-simple @click="showModal = true"
      >Удалить опросный лист по теме
    </button-simple>
  </div>
  <div class="block2">
    <div class="main">
      <div class="title">Введите тему опроса :</div>
      <select-title
        :style="{ margin: '10px 10px 10px 0px' }"
        :titles="getTitles"
        @select="(value) => (title = value)"
      />
    </div>
    <block-search-apartment
      nameButton="Получить опросы по теме и № помещения"
      @selectId="actionId"
    />
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите удалить опросы по выбранной Вами теме?"
      @close="showModal = false"
      @successfully="removeAllByTitle"
    ></modal-action>
  </dialog-window>
</template>
<script>
import {
  PAGE_SURVEYS_GET,
  PAGE_SURVEY_CREATE,
  PAGE_SURVEY_RESULT,
} from "@/router/apiRouter";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "header-polls",
  data() {
    return {
      showModal: false,
      title: "",
      id: 0,
      message:
        "Действие не может выполниться, потому что не выбрана тема опроса",
      PAGE_SURVEYS_GET,
      PAGE_SURVEY_CREATE,
      PAGE_SURVEY_RESULT,
    };
  },
  methods: {
    goToPageCreateSurvey() {
      this.$router.push(PAGE_SURVEY_CREATE);
    },
    goToPageResultSurvey() {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else {
        this.$router.push(PAGE_SURVEY_RESULT + "/" + this.title);
      }
    },
    goToPageSurveysByTitle() {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else {
        this.$router.push(PAGE_SURVEYS_GET + "/" + this.title);
      }
    },
    actionId(id) {
      this.id = id;
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else if (this.id == undefined || this.id <= 0) {
        this.setMessages(["Выберите номер квартиры"]);
      } else {
        this.$router.push(PAGE_SURVEYS_GET + "/" + this.title + "/" + this.id);
      }
    },
    removeAllByTitle() {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else {
        this.deleteAllSurveyByTitle(this.title).then(() => {
          this.fetchAllTitleSurvey();
          this.$router.push(PAGE_SURVEYS_GET);
        });
      }
    },
    isValidTitle() {
      return this.title === undefined || this.title === this.message;
    },
    ...mapMutations({
      setMessages: "survey/setMessages",
    }),
    ...mapActions({
      deleteAllSurveyByTitle: "survey/deleteAllSurveyByTitle",
      fetchAllTitleSurvey: "survey/fetchAllTitleSurvey",
    }),
  },
  computed: {
    ...mapGetters({
      getTitles: "survey/getTitles",
    }),
  },
  mounted() {
    this.fetchAllTitleSurvey();
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
  justify-content: start;
}
.main {
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
