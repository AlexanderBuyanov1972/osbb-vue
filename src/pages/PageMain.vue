<template>
  <div class="main">
    <vue-loader :isLoader="getIsLoadingOwnership" />
    <vue-loader :isLoader="getIsLoadingQuestionnaire" />
    <vue-loader :isLoader="getIsLoadingRate" />
    <header-messages
      :messages="messages"
      :style="{ width: '100%', display: 'flex', 'text-align': 'start' }"
    />

    <div class="header">ОСББ "Свободы 51"</div>
    <photo-carousel :urls="urls" />
    <div class="buttons">
      <button-simple @click="sendToServerDataBase"
        >Создание базы данных собственник/помещение</button-simple
      >
      <button-simple @click="sendToServerQuestionnaire"
        >Создание опроса</button-simple
      >
      <button-simple @click="sendToServerRates">Создание тарифов</button-simple>
    </div>
  </div>
  <dialog-window :show="showModalDB">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalDB = false"
      @successfully="successfullyActionDB"
    ></modal-action>
  </dialog-window>

  <dialog-window :show="showModalPolls">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalPolls = false"
      @successfully="successfullyActionPolls"
    ></modal-action>
  </dialog-window>

  <dialog-window :show="showModalRates">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalRates = false"
      @successfully="successfullyActionRates"
    ></modal-action>
  </dialog-window>
</template>
<script>
import {
  generateJsonRecords,
  generateJsonQuestionnaires,
  generateJsonRates,
} from "@/pages/_functions/generate";
import { generateSvobody51 } from "@/pages/_functions/generateRealDB";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      generateJsonRecords,
      generateJsonQuestionnaires,
      generateJsonRates,
      generateSvobody51,
      showModalDB: false,
      showModalPolls: false,
      showModalRates: false,
      messages: [],
      urls: ["dndz1", "dndz2", "dndz3", "dndz4", "dndz5", "dndz6"],
    };
  },
  computed: {
    ...mapGetters({
      getMessagesOwnership: "ownership/getMessages",
      getIsLoadingOwnership: "ownership/getIsLoading",
      getMessagesQuestionnaire: "questionnaire/getMessages",
      getIsLoadingQuestionnaire: "questionnaire/getIsLoading",
      getMessagesRate: "rate/getMessages",
      getIsLoadingRate: "rate/getIsLoading",
    }),
  },
  methods: {
    ...mapActions({
      createAllRecord: "record/createAllRecord",
      createAllQuestionnaire: "questionnaire/createAllQuestionnaire",
      createAllRate: "rate/createAllRate",
    }),
    sendToServerDataBase() {
      this.showModalDB = true;
    },
    sendToServerQuestionnaire() {
      this.showModalPolls = true;
    },
    sendToServerRates() {
      this.showModalRates = true;
    },
    successfullyActionDB() {
      this.generateJsonRecords().then(() => {
        this.messages = this.getMessagesOwnership;
      });
    },
    successfullyActionPolls() {
      this.createAllQuestionnaire(this.generateJsonQuestionnaires()).then(
        () => {
          this.messages = this.getMessagesQuestionnaire;
        }
      );
    },
    successfullyActionRates() {
      this.createAllRate(this.generateJsonRates()).then(() => {
        this.messages = this.getMessagesRate;
      });
    },
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
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img {
  width: 1050px;
  height: 800px;
  padding: 10px;
  align-self: center;
}
.header {
  text-align: center;
  color: teal;
  font-size: 25px;
  margin: 15px 0px;
}
</style>
