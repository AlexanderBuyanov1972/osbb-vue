<template>
  <div class="main">
    <div class="header">ОСББ "Свободы 51"</div>
    <photo-carousel :urls="urls" />
    <div class="buttons">
      <button-simple @click="sendToServerDataBase"
        >Создание базы данных собственник/помещение</button-simple
      >
      <button-simple @click="sendToServerSurvey">Создание опроса</button-simple>
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
  generateJsonSurveys,
  generateJsonRates,
} from "@/pages/_functions/generate";
import { generateSvobody51 } from "@/pages/_functions/generateRealDB";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      generateJsonRecords,
      generateJsonSurveys,
      generateJsonRates,
      generateSvobody51,
      showModalDB: false,
      showModalPolls: false,
      showModalRates: false,
      urls: ["dndz1", "dndz2", "dndz3", "dndz4", "dndz5", "dndz6"],
    };
  },
  methods: {
    ...mapActions({
      createAllRecord: "record/createAllRecord",
      createAllSurvey: "survey/createAllSurvey",
      createAllRate: "rate/createAllRate",
    }),
    sendToServerDataBase() {
      this.showModalDB = true;
    },
    sendToServerSurvey() {
      this.showModalPolls = true;
    },
    sendToServerRates() {
      this.showModalRates = true;
    },
    successfullyActionDB() {
      this.generateJsonRecords();
    },
    successfullyActionPolls() {
      this.createAllSurvey(this.generateJsonSurveys());
    },
    successfullyActionRates() {
      this.createAllRate(this.generateJsonRates());
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
