<template>
  <div class="main" v-if="messages.length > 0">
    <div class="header">СООБЩЕНИЯ ОТ СЕРВЕРА :</div>
    <div v-for="(one, index) in messages" :key="one.id">
      <span> {{ index + 1 }}. {{ one }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "header-messages",
  props: {
    messages: {
      Type: Array,
      default: () => [],
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
.main {
  margin: 10px 0px;
  padding: 10px 20px;
  border: 1px solid brown;
  color: brown;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
span {
  color: red;
  font-size: 23px;
}
.header{
  margin-bottom: 10px;
}
</style>
