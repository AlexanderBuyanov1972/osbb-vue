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

p,
h4 {
  color: brown;
  font-size: 20px;
  margin: 5px 0px;
}
.main{
  margin: 10px 0px;
  border: 1px solid brown;
  padding: 10px 20px;
}
</style>
