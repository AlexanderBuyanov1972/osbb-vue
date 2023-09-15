<template>
  <div class="header">{{ text }}.</div>
</template>
<script>
export default {
  name: "line-header-block",
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
  color: blueviolet;
  margin: 20px 0px;
  text-align: center;
  font-size: 1.5em;
  text-decoration: underline;
}
</style>
