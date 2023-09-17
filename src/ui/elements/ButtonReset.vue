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
  font-size: 12px;
  padding: 5px;
  margin: 5px 5px 5px 0px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: whitesmoke;

  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  color: red;
  border: 1px solid red;
}
</style>