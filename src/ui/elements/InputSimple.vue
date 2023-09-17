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
  height: 30px;
  outline: none;
  border: 1px solid teal;
  width: 100%;
  text-indent: 1em;
  color: teal;
  font-size: 15px;
}
::placeholder {
  color: #999999;
}
</style>
