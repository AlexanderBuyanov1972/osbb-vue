<template>
  <div class="main">
    <h4>Сообщения с сервера :</h4>
    <p v-for="(one, index) in messages" :key="one.id">
      {{ index + 1 }}. {{ one }}
    </p>
  </div>
</template>
<script>
export default {
  name: "block-messages",
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

p,
h4 {
  color: green;
  font-size: 1.3em;
  margin: 10px 0px;
}
.main{
  margin: 10px 0px;
  border: 2px solid green;
  padding-left: 10px;
}
</style>
