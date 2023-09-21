<template>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Результаты опроса" />
    <div class="blocks" v-for="one in list">
      <div class="block" v-for="key in Object.keys(one)">
        <div class="question">{{ key }}</div>
        <div class="item">
          За :
          {{ one[key]["BEHIND"] == null ? 0 : one[key]["BEHIND"].toFixed(2) }}
        </div>
        <div class="item">
          Против :
          {{ one[key]["AGAINST"] == null ? 0 : one[key]["AGAINST"].toFixed(2) }}
        </div>
        <div class="item">
          Воздержался :
          {{
            one[key]["ABSTAINED"] == null ? 0 : one[key]["ABSTAINED"].toFixed(2)
          }}
        </div>
      </div>
    </div>
    <div class="blocks" v-for="two in list2">
      <div class="block" v-for="key in Object.keys(two)">
        <div class="item">{{ key }} : {{ two[key].toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: [],
      list2: [],
    };
  },
  methods: {
    ...mapActions({
      fetchResultQuestionnaire: "result/fetchResultQuestionnaire",
    }),
    ...mapMutations({
      setMessages: "result/setMessages",
    }),
  },
  computed: {
    ...mapGetters({
      getIsLoading: "result/getIsLoading",
      getMessages: "result/getMessages",
      getResultDouble: "result/getResultDouble",
      getResultOwner: "result/getResultOwner",
      getCounterDouble: "result/getCounterDouble",
      getCounterOwner: "result/getCounterOwner",
    }),
  },
  mounted() {
    this.fetchResultQuestionnaire(this.$route.params.title)
      .then(() => {
        this.list = [this.getResultDouble, this.getResultOwner];
        this.list2 = [this.getCounterDouble, this.getCounterOwner];
      })
      .catch((err) => {
        this.setMessages([err.message, ...this.getMessages]);
      });
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
  font-size: 17px;
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
