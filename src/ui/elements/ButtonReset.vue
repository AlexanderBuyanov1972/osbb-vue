<script>
export default {
  name: "button-reset",
};
</script>
<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 0;
  cursor: pointer;
  padding: 0.7em 1.4em;
  background-color: white;
  color: red;
  border: 2px solid red;
  margin: 10px 0px;
}
</style>