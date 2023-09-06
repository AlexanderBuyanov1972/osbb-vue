<template>
  <div
    class="p"
    :style="[field == undefined || field.length == 0 ? { color: 'red' } : { color: 'white' }]"
  >
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "block-error",
  props: {
    field: String,
    message: String,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
