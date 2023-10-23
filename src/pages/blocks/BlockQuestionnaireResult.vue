<template>
  <div class="main">
    <line-header :text="textHeader" :style="{ color: 'blueviolet' }" />
    <line-header
      :style="{ color: 'brown' }"
      :text="`Обработано ${processing} % листов опроса`"
    />
    <line-header :style="{ color: 'teal' }" :text="textFooter" />
    <div class="block" v-for="key in Object.keys(map)" :key="key">
      <div class="question">{{ key }}</div>
      <div class="item">"За" : {{ roundDouble(map[key]["BEHIND"]) }}</div>
      <div class="item">"Против" : {{ roundDouble(map[key]["AGAINST"]) }}</div>
      <div class="item">"Воздержался" : {{ roundDouble(map[key]["ABSTAINED"]) }}</div>
    </div>
  </div>
</template>
<script>
import { roundDouble } from "@/pages/_functions/functions";
export default {
  name: "block-questionnaire-result",
  props: {
    map: Object,
    processing: Number,
    textHeader: String,
    textFooter: String,
  },
  data() {
    return {
      roundDouble,
    };
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
  display: flex;
  flex-direction: column;
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
