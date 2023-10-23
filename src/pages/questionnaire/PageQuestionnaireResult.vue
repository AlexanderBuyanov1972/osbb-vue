<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <div class="blocks">
      <div class="button">
        <button-create @click="printResult">Печатать результат</button-create>
      </div>
      <div class="list">
        <block-questionnaire-result
          :map="mapVotedArea"
          :processing="processingPercentageArea"
          textHeader="Результаты опроса в метрах квадратных"
          :textFooter="`Всего проголосовало :
            ${areaVoted}
            из ${summaArea} метров квадратных`"
        />
        <block-questionnaire-result
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
    };
  },
  methods: {
    ...mapActions({
      printResultQuestionnaire: "questionnaire/printResultQuestionnaire",
      fetchResultQuestionnaire: "questionnaire/fetchResultQuestionnaire",
    }),
    printResult() {
      this.printResultQuestionnaire(this.$route.params.title);
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "questionnaire/getIsLoading",
      getMessages: "questionnaire/getMessages",
      getResult: "questionnaire/getResult",
    }),
    check() {
      this.fetchResultQuestionnaire(this.$route.params.title).then(() => {
        // area ------------------
        this.processingPercentageArea = this.getResult.processingPercentageArea;
        this.mapVotedArea = this.getResult.mapVotedArea;
        this.areaVoted = this.getResult.areaVoted;
        this.summaArea = this.getResult.summaArea;
        // owner -----------------
        this.processingPercentageOwner =
          this.getResult.processingPercentageOwner;
        this.mapVotedOwner = this.getResult.mapVotedOwner;
        this.ownerVoted = this.getResult.ownerVoted;
        this.countOwner = this.getResult.countOwner;
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
