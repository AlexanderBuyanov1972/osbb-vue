<template>
  <div class="main">
    <div>Сообщения с сервера :</div>
    <div v-for="(one, index) in messages" :key="one.id">
      {{ index + 1 }}. {{ one }}
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
</style>
