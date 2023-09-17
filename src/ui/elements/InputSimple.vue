<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "input-simple",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
input {
  background-color: white;
  height: 2.5em;
  outline: none;
  border: 1px solid teal;
  width: 100%;
  text-indent: 1em;
  color: teal;
  font-size: 1em;
}
::placeholder {
  color: #999999;
}
</style>
