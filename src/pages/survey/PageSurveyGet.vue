<template>
  <header-polls></header-polls>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Результаты опроса" />
    <div class="items">
      <div class="item" v-for="one in getSurveys.selects" :key="one.id">
        {{ one.question }} ---> {{ one.answer }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getSurveys: "survey/getSurveys",
      getMessages: "survey/getMessages",
      getIsLoading: "survey/getIsLoading",
    }),
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
