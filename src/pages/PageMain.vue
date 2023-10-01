<template>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <div class="header">ОСББ "Свободы 51"</div>
    <div class="img">
      <img
        src="https://myshtetl.org/dnepropetrovsk/images/dneprdzrzh_0004.JPG"
        alt="Not Found"
      />
    </div>
    <div class="">
      <button-create @click="sendToServerDataBase">FullDataBase</button-create>
    </div>
    <div class="">
      <button-create @click="sendToServerQuestionnaire"
        >FullQuestionnaire</button-create
      >
    </div>
  </div>
</template>
<script>
import {
  generateJsonEntries,
  generateJsonQuestionnaires,
} from "@/pages/_functions/generate";
import { generateSvobody51 } from "@/pages/_functions/generateRealDB";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      generateJsonEntries,
      generateJsonQuestionnaires,
      generateSvobody51,
    };
  },
  methods: {
    ...mapActions({
      createAllRecord: "record/createAllRecord",
      createAllQuestionnaire: "questionnaire/createAllQuestionnaire",
    }),
    sendToServerDataBase() {
      this.createAllRecord(this.generateJsonEntries());
    },
    sendToServerQuestionnaire() {
      this.createAllQuestionnaire(this.generateJsonQuestionnaires());
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
