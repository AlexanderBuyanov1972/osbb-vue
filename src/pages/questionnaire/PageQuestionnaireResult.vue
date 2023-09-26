<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />

    <div class="" v-for="(item, index) in getResult">
      <line-header v-if="index == 0" text="Результаты опроса в голосах" />
      <line-header
        v-if="index == 1"
        text="Результаты опроса в квадратных метрах"
      />
      <div class="block" v-for="key in Object.keys(item)" :key="key">
        <div class="question">{{ key }}</div>
        <div class="item">
          За :
          {{ result(item, key, "BEHIND") }}
        </div>
        <div class="item">
          Против :
          {{ result(item, key, "AGAINST") }}
        </div>
        <div class="item">
          Воздержался :
          {{ result(item, key, "ABSTAINED") }}
        </div>
        <vue-hr />
        <div class="item">
          Всего проголосовало :
          {{
            result(item, key, "BEHIND") +
            result(item, key, "AGAINST") +
            result(item, key, "ABSTAINED")
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchResultQuestionnaire: "questionnaire/fetchResultQuestionnaire",
    }),
    result(item, key, str) {
      return item[key][str] == null ? 0 : item[key][str];
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "questionnaire/getIsLoading",
      getMessages: "questionnaire/getMessages",
      getResult: "questionnaire/getResult",
    }),
    check() {
      return this.fetchResultQuestionnaire(this.$route.params.title);
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
