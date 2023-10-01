<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <div class="blocks">
      <div class="" v-for="(map, index) in getResult" :key="index">
        <line-header
          :text="
            index == 0
              ? 'Результаты опроса в голосах'
              : 'Результаты опроса в квадратных метрах'
          "
        />
        <line-header
          :style="{ color: 'brown' }"
          :text="index == 0 ? compute : computeDouble"
        />
        <div class="block" v-for="key in Object.keys(map)" :key="key">
          <div class="question">{{ key }}</div>
          <div class="item">
            За :
            {{ result(map, key, "BEHIND") }}
          </div>
          <div class="item">
            Против :
            {{ result(map, key, "AGAINST") }}
          </div>
          <div class="item">
            Воздержался :
            {{ result(map, key, "ABSTAINED") }}
          </div>
          <vue-hr />
          <div class="item">
            Всего проголосовало :
            {{
              result(map, key, "BEHIND") +
              result(map, key, "AGAINST") +
              result(map, key, "ABSTAINED")
            }}
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
      countOwners: 0,
      summaTotalArea: 0,
    };
  },
  methods: {
    ...mapActions({
      fetchResultQuestionnaire: "questionnaire/fetchResultQuestionnaire",
      fetchBuildingCharacteristics: "registry/fetchBuildingCharacteristics",
    }),
    result(map, key, str) {
      return map[key][str] == null ? 0 : map[key][str];
    },
    aroundString(value) {
      let str = value + "";
      return str.substring(str.indexOf("." + 2));
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
      return this.fetchResultQuestionnaire(this.$route.params.title);
    },
    compute() {
      const keys = Object.keys(this.getResult[0]);
      let summa =
        this.result(this.getResult[0], keys[0], "BEHIND") +
        this.result(this.getResult[0], keys[0], "AGAINST") +
        this.result(this.getResult[0], keys[0], "ABSTAINED");
      return `Обработано ${((summa / this.countOwners) * 100).toFixed(
        2
      )} % листов опроса`;
    },
    computeDouble() {
      const keys = Object.keys(this.getResult[0]);
      let summa =
        this.result(this.getResult[1], keys[1], "BEHIND") +
        this.result(this.getResult[1], keys[1], "AGAINST") +
        this.result(this.getResult[1], keys[1], "ABSTAINED");
      return `Обработано ${((summa / this.summaTotalArea) * 100).toFixed(
        2
      )} % листов опроса`;
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
.blocks{
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
