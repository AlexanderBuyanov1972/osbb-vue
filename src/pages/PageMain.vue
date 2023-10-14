<template>
  <div class="main">
    <vue-loader :isLoader="getIsLoadingRecord" />
    <vue-loader :isLoader="getIsLoadingQuestionnaire" />
    <vue-loader :isLoader="getIsLoadingRate" />
    <header-messages
      :messages="messages"
      :style="{ width: '100%', display: 'flex', 'text-align': 'start' }"
    />
    <div class="header">ОСББ "Свободы 51"</div>
    <div class="img">
      <img
        src="https://myshtetl.org/dnepropetrovsk/images/dneprdzrzh_0004.JPG"
        alt="Not Found"
      />
    </div>
    <div class="">
      <button-create @click="sendToServerDataBase"
        >Создание базы данных собственник/помещение</button-create
      >
    </div>
    <div class="">
      <button-create @click="sendToServerQuestionnaire"
        >Создание опроса</button-create
      >
    </div>
    <div class="">
      <button-create @click="sendToServerRates">Создание тарифов</button-create>
    </div>
  </div>
  <dialog-window :show="showModalDB">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalDB = false"
      @successfuly="successfulyActionDB"
    ></modal-action>
  </dialog-window>

  <dialog-window :show="showModalPolls">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalPolls = false"
      @successfuly="successfulyActionPolls"
    ></modal-action>
  </dialog-window>

  <dialog-window :show="showModalRates">
    <modal-action
      message="Вы действительно хотите выполнить это действие?"
      @close="showModalRates = false"
      @successfuly="successfulyActionRates"
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
    };
  },
  computed: {
    ...mapGetters({
      getMessagesRecord: "record/getMessages",
      getIsLoadingRecord: "record/getIsLoading",
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
    successfulyActionDB() {
      this.generateJsonRecords().then(() => {
        this.messages = this.getMessagesRecord;
      });
    },
    successfulyActionPolls() {
      this.createAllQuestionnaire(this.generateJsonQuestionnaires()).then(
        () => {
          this.messages = this.getMessagesQuestionnaire;
        }
      );
    },
    successfulyActionRates() {
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
}
</style>
