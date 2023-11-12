<script>
export default {
  name: "button-simple",
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
  background-color: mintcream;
  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  color: blueviolet;
  border: 1px solid blueviolet;
  border-radius: 10px;
}
</style>
