<template>
  <div class="block1">
    <button-create @click="goToPageQuestionnairesByTitle"
      >Получить опросы по теме
    </button-create>
    <button-create @click="goToPageResultQuestionnaire"
      >Получить результаты опроса
    </button-create>
    <button-create @click="goToPageCreateQuestionnaire"
      >Создать опросный лист
    </button-create>
    <button-create @click="showModal = true"
      >Удалить опросный лист по теме
    </button-create>
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
      @apartment="(value) => action(value)"
    />
  </div>
  <dialog-window :show="showModal">
    <modal-action
      message="Вы действительно хотите удалить опросы по выбранной Вами теме?"
      @close="showModal = false"
      @successfuly="removeByTitle"
    ></modal-action>
  </dialog-window>
</template>
<script>
import {
  PAGE_QUESTIONNAIRES_GET,
  PAGE_QUESTIONNAIRE_CREATE,
  PAGE_QUESTIONNAIRE_RESULT,
} from "@/router/apiRouter";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "header-polls",
  data() {
    return {
      showModal: false,
      title: "",
      apartment: "1",
      message: "Выберите тему опроса",
      PAGE_QUESTIONNAIRES_GET,
      PAGE_QUESTIONNAIRE_CREATE,
      PAGE_QUESTIONNAIRE_RESULT,
    };
  },
  methods: {
    goToPageCreateQuestionnaire() {
      this.$router.push(PAGE_QUESTIONNAIRE_CREATE);
    },
    goToPageResultQuestionnaire() {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else {
        this.$router.push(PAGE_QUESTIONNAIRE_RESULT + "/" + this.title);
      }
    },
    goToPageQuestionnairesByTitle() {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else {
        this.$router.push(PAGE_QUESTIONNAIRES_GET + "/" + this.title);
      }
    },
    action(value) {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else if (value == undefined || value <= 0) {
        this.setMessages(["Выберите номер квартиры"]);
      } else {
        this.$router.push(
          PAGE_QUESTIONNAIRES_GET + "/" + this.title + "/" + value
        );
      }
    },
    removeByTitle() {
      if (this.isValidTitle()) {
        this.setMessages([this.message]);
      } else {
        this.deleteAllQuestionnaireByTitle(this.title).then(() => {
          this.fetchAllTitleOfQuestionnaire();
        });
      }
    },
    isValidTitle() {
      return this.title == undefined || this.title == this.message;
    },
    ...mapMutations({
      setMessages: "questionnaire/setMessages",
    }),
    ...mapActions({
      deleteAllQuestionnaireByTitle:
        "questionnaire/deleteAllQuestionnaireByTitle",
      fetchAllTitleOfQuestionnaire:
        "questionnaire/fetchAllTitleOfQuestionnaire",
    }),
  },
  computed: {
    ...mapGetters({
      getTitles: "questionnaire/getTitles",
    }),
  },
  mounted() {
    this.fetchAllTitleOfQuestionnaire();
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
