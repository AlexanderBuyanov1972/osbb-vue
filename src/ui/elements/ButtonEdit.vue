<script>
export default {
  name: "button-edit",
};
</script>
<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 0;
  cursor: pointer;
  padding: 0.7em 1.4em;
  background-color: white;
  color: darkgoldenrod;
  border: 2px solid darkgoldenrod;
  margin: 10px 10px 10px 0px;
}
</style>