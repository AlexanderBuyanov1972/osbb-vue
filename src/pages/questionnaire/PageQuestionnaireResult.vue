<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <div class="blocks">
      <div class="" v-for="(map, index) in list" :key="index">
        <line-header
          :text="
            index == 0
              ? 'Результаты опроса в голосах'
              : 'Результаты опроса в квадратных метрах'
          "
        />
        <line-header :style="{ color: 'brown' }" :text="compute(index)" />
        <div class="block" v-for="key in Object.keys(map)" :key="key">
          <div class="question">{{ key }}</div>
          <div class="item">
            За :
            {{
              index == 0
                ? Object.keys(result(map, key, "BEHIND")).length
                : result(map, key, "BEHIND")
            }}
          </div>
          <div class="item">
            Против :
            {{
              index == 0
                ? Object.keys(result(map, key, "AGAINST")).length
                : result(map, key, "AGAINST")
            }}
          </div>
          <div class="item">
            Воздержался :
            {{
              index == 0
                ? Object.keys(result(map, key, "ABSTAINED")).length
                : result(map, key, "ABSTAINED")
            }}
          </div>
          <vue-hr />
          <div class="item">
            Всего проголосовало :
            {{ summa(index) }}
            из {{ index == 1 ? summaTotalArea : countOwners }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
      countOwners: 0,
      summaTotalArea: 0.0,
    };
  },
  methods: {
    ...mapActions({
      fetchResultQuestionnaire: "questionnaire/fetchResultQuestionnaire",
      fetchBuildingCharacteristics: "registry/fetchBuildingCharacteristics",
    }),
    result(map, key, answer) {
      return map[key][answer] == null ? 0 : map[key][answer];
    },
    aroundString(value) {
      let str = value + "";
      return str.substring(str.indexOf("." + 2));
    },
    compute(ind) {
      let itog = ind === 0 ? this.countOwners : this.summaTotalArea;
      return `Обработано ${((this.summa(ind) / itog) * 100).toFixed(
        2
      )} % листов опроса`;
    },
    summa(ind) {
      let question = Object.keys(this.list[0])[0];
      let result = 0;
      //--------------------------------------
      // const answers = ["BEHIND", "AGAINST", "ABSTAINED"];
      // for (let answer in answers) {
      //   let line = this.result(this.list[0], question, answer);
      // result = ind === 0 ? (result + line) : (result + Object.keys(line).length);
      // }
      // return result;
      //---------------------------------------

      if (ind === 0) {
        //list[0] - data question:answer:{fullName:number}
        result =
          Object.keys(this.result(this.list[0], question, "BEHIND")).length +
          Object.keys(this.result(this.list[0], question, "AGAINST")).length +
          Object.keys(this.result(this.list[0], question, "ABSTAINED")).length;
      } else {
        //list[1] - data question:answer:double
        result =
          this.result(this.list[1], question, "BEHIND") +
          this.result(this.list[1], question, "AGAINST") +
          this.result(this.list[1], question, "ABSTAINED");
      }
      return result;
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "questionnaire/getIsLoading",
      getMessages: "questionnaire/getMessages",
      getResult: "questionnaire/getResult",
      getBuildingCharacteristics: "registry/getBuildingCharacteristics",
    }),
    check() {
      this.fetchResultQuestionnaire(this.$route.params.title).then(() => {
        this.list = this.getResult;
      });
    },
  },
  mounted() {
    this.check;
    this.fetchBuildingCharacteristics().then(() => {
      this.countOwners = this.getBuildingCharacteristics.countOwners;
      this.summaTotalArea = this.getBuildingCharacteristics.summaTotalArea;
    });
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
.main {
}
</style>
