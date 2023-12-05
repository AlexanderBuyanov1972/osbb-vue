<template>
  <header-polls></header-polls>
  <div class="main">
      <div class="blocks">
      <div class="button">
        <button-simple v-if="getResult != undefined" @click="printResult"
          >Печатать результат</button-simple
        >
      </div>
      <div class="list" v-if="getResult != undefined">
        <block-survey-result
          :map="mapVotedArea"
          :processing="processingPercentageArea"
          textHeader="Результаты опроса в метрах квадратных"
          :textFooter="`Всего проголосовало :
            ${areaVoted}
            из ${summaArea} метров квадратных`"
        />
        <block-survey-result
          :map="mapVotedOwner"
          :processing="processingPercentageOwner"
          textHeader="Результаты опроса в голосах"
          :textFooter="`Всего проголосовало :
            ${ownerVoted}
            из ${countOwner} собственников`"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { PAGE_SURVEYS_GET, PAGE_SURVEY_RESULT } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      processingPercentageArea: 0.0,
      mapVotedArea: {},
      areaVoted: 0.0,
      summaArea: 0.0,
      // owner -----------------
      processingPercentageOwner: 0.0,
      mapVotedOwner: {},
      ownerVoted: 0,
      countOwner: 0,
      PAGE_SURVEYS_GET,
      PAGE_SURVEY_RESULT,
    };
  },
  methods: {
    ...mapActions({
      printResultSurvey: "survey/printResultSurvey",
      fetchResultSurvey: "survey/fetchResultSurvey",
    }),
    printResult() {
      this.printResultSurvey(this.$route.params.title);
    },
  },
  computed: {
    ...mapGetters({
      getResult: "survey/getResult",
    }),
    check() {
      this.fetchResultSurvey(this.$route.params.title).then(() => {
        if (this.getResult != undefined) {
          // area ------------------
          this.processingPercentageArea =
            this.getResult.processingPercentageArea;
          this.mapVotedArea = this.getResult.mapVotedArea;
          this.areaVoted = this.getResult.areaVoted;
          this.summaArea = this.getResult.summaArea;
          // owner -----------------
          this.processingPercentageOwner =
            this.getResult.processingPercentageOwner;
          this.mapVotedOwner = this.getResult.mapVotedOwner;
          this.ownerVoted = this.getResult.ownerVoted;
          this.countOwner = this.getResult.countOwner;
        }
      });
    },
  },
  mounted() {
    this.check;
  },
  updated() {
    this.check;
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.blocks {
  display: flex;
  flex-direction: column;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item {
  color: brown;
  font-size: 20px;
  margin: 5px 0px;
}
.question {
  color: blueviolet;
  font-size: 20px;
}
.block {
  border: 1px solid teal;
  margin: 5px 0px;
  padding: 5px 20px;
}
</style>
