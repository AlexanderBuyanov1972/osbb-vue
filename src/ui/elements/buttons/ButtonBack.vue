<script>
export default {
  name: "button-back",
};
</script>
<template>
  <button @click="$router.back()">Назад</button>
</template>

<style scoped>
button {
  font-size: 12px;
  padding: 5px;
  margin: 5px 5px 5px 0px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: white;

  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  color: #999999;
  border: 1px solid #999999;
}
</style>
