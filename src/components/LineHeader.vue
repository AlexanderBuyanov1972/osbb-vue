<template>
  <div class="header">{{ text }}.</div>
</template>
<script>
export default {
  name: "line-header",
  props: {
    text: String,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.header {
  color: teal;
  margin: 10px 0px;
  text-align: center;
  font-size: 2.2em;
  text-decoration: underline;
}
</style>
