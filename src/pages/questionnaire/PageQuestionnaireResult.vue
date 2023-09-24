<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Результаты опроса в голосах" />
    <div
      class="block"
      v-for="key in Object.keys(this.getResultOwner)"
      :key="key"
    >
      <div class="question">{{ key }}</div>
      <div class="item">
        За :
        {{
          this.getResultOwner[key]["BEHIND"] == null
            ? 0
            : this.getResultOwner[key]["BEHIND"].toFixed(2)
        }}
      </div>
      <div class="item">
        Против :
        {{
          this.getResultOwner[key]["AGAINST"] == null
            ? 0
            : this.getResultOwner[key]["AGAINST"].toFixed(2)
        }}
      </div>
      <div class="item">
        Воздержался :
        {{
          this.getResultOwner[key]["ABSTAINED"] == null
            ? 0
            : this.getResultOwner[key]["ABSTAINED"].toFixed(2)
        }}
      </div>
      <vue-hr />
      <div class="item">
        Всего проголосовало :
        {{
          this.getResultOwner[key]["BEHIND"].toFixed(2) * 1 +
          this.getResultOwner[key]["AGAINST"].toFixed(2) * 1 +
          this.getResultOwner[key]["ABSTAINED"].toFixed(2) * 1
        }}
      </div>
    </div>
    <line-header text="Результаты опроса в квадратных метрах" />
    <div
      class="block"
      v-for="key in Object.keys(this.getResultDouble)"
      :key="key"
    >
      <div class="question">{{ key }}</div>
      <div class="item">
        За :
        {{
          this.getResultDouble[key]["BEHIND"] == null
            ? 0
            : this.getResultDouble[key]["BEHIND"].toFixed(2)
        }}
      </div>
      <div class="item">
        Против :
        {{
          this.getResultDouble[key]["AGAINST"] == null
            ? 0
            : this.getResultDouble[key]["AGAINST"].toFixed(2)
        }}
      </div>
      <div class="item">
        Воздержался :
        {{
          this.getResultDouble[key]["ABSTAINED"] == null
            ? 0
            : this.getResultDouble[key]["ABSTAINED"].toFixed(2)
        }}
      </div>
      <vue-hr />
      <div class="item">
        Всего проголосовало :
        {{
          this.getResultDouble[key]["BEHIND"].toFixed(2) * 1 +
          this.getResultDouble[key]["AGAINST"].toFixed(2) * 1 +
          this.getResultDouble[key]["ABSTAINED"].toFixed(2) * 1
        }}
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
      fetchResultQuestionnaire: "result/fetchResultQuestionnaire",
    }),
    summa(key) {
      const sum = 0.0;
      const names = ["BEHIND", "AGAINST", "ABSTAINED"];
      names.forEach((el) => {
        sum = sum + this.getResultOwner[key][el].toFixed(2);
      });
      return sum;
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "result/getIsLoading",
      getMessages: "result/getMessages",
      getResultDouble: "result/getResultDouble",
      getResultOwner: "result/getResultOwner",
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
