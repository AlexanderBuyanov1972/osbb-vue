<template>
  <div class="main">
    <header-messages :messages="[]" />
    <line-header text="Опросный лист" />
    <div class="list" v-for="item in list" :key="item.id">
      <div class="item">
        <div class="question">{{ item.title }}</div>
        <line-radio @select="(value) => (item.select = value)" />
      </div>
    </div>
    <vue-hr />
    <button-simple @click="sendToServer">SEND_TO_SERVER</button-simple>
  </div>
</template>
<script>
import { SEND_TO_SERVER } from "@/ui/namesButton";
export default {
  data() {
    return {
      questionnaire: { title: "" },
      list: [
        { id: 1, title: "Красить крышу в красный цвет", select: "" },
        { id: 2, title: "Красить крышу в синий цвет", select: "" },
        { id: 3, title: "Красить крышу в зелёный цвет", select: "" },
        { id: 4, title: "Красить крышу в фиолетовый цвет", select: "" },
        { id: 5, title: "Красить крышу в жёлтый цвет", select: "" },
      ],
      SEND_TO_SERVER,
    };
  },
  methods: {
    sendToServer() {
      console.log(this.list);
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
.question {
  width: 100%;
  border: 2px solid teal;
  font-size: 2em;
  color: blueviolet;
  padding: 15px;
  margin: 15px 20px;
}
.list {
  padding: 10px 10px;
}
.item {
  margin: 20px 0px;
  border: 2px solid blueviolet;
}
</style>
